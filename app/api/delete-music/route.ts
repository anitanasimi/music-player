import React from 'react'
import { redirect } from "next/navigation"
import { auth } from '@/app/auth'
import { deleteMusic, isExists } from '@/db/queries/musicQueries'
import { S3Client, DeleteObjectCommand } from "@aws-sdk/client-s3"


const s3 = new S3Client({
    region: process.env.AWS_BUCKET_REGION!,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY!,
        secretAccessKey: process.env.AWS_SECRET_AWS_ACCESS_KEY!,
    }
})

export async function DELETE(request: Request) {

    const session = await auth();

    if (!session?.user) {
        return redirect("/api/auth/signin?callbackUrl=/profile");
    }

    var jsonReq = await request.json();


    const exists = await isExists(jsonReq.id, session.user.id);
    if (exists) {

        // delete from db
        const music = await deleteMusic(jsonReq.id);

        // delete from s3
        const deleteObjectCommand = new DeleteObjectCommand({
            Bucket: process.env.AWS_BUCKET_NAME!,
            Key: music.url.split("/").pop()!,
        })

        await s3.send(deleteObjectCommand);

        return new Response("ok");
    } else {
        return new Response("NotFound");
    }
}


