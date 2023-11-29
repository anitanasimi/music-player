"use server"

import { auth } from "@/app/auth"
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3"
import { getSignedUrl } from "@aws-sdk/s3-request-presigner"
import crypto from "crypto"
import { createMusicWithOutEmail } from "@/db/queries/musicQueries"
import { Music, MusicInfo } from "@/lib/types"
import { getUserByEmail } from "@/db/queries/userQueries";

const s3 = new S3Client({
    region: process.env.AWS_BUCKET_REGION!,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY!,
        secretAccessKey: process.env.AWS_SECRET_AWS_ACCESS_KEY!,
    }
})

const acceptedTypes = [
    'audio/mpeg',
    'audio/wav',
    'audio/ogg'
]

const generateFileName = (bytes = 32) => crypto.randomBytes(bytes).toString("hex")

// 20 MB
const maxSize = 20 * 1024 * 1024;

export async function createMusic(type: string, size: number, checksum: string, musicInfo: MusicInfo) {

    const session = await auth()
    if (!session) {
        return { failure: "Not authenticated" }
    }
   let userId: string = "";
   if (session?.user?.email) {
     userId = (await getUserByEmail(session.user.email)).id;
   }

    if (!acceptedTypes.includes(type)) {
        return { failure: "Invalid file type" }
    }

    if (size > maxSize) {
        return { failure: "File size exceeds 20MB" }
    }

    // upload music file to aws
    const fileName = generateFileName();
    const putObjectCommand = new PutObjectCommand({
        Bucket: process.env.AWS_BUCKET_NAME!,
        Key: fileName,
        ContentType: type,
        ContentLength: size,
        ChecksumSHA256: checksum,
        Metadata: {
            userId: userId
        }
    })

    const url = await getSignedUrl(
        s3,
        putObjectCommand,
        { expiresIn: 120 },
    )

    // create music in db
    let music = {} as Music;
    music.userId = userId;
    music.url = url.split("?")[0];
    music.artist = musicInfo.artist;
    music.title = musicInfo.title;

    const result = await createMusicWithOutEmail(music);

    return { success: { url: url, musicId: result } }
}