import { db } from '@/db'
import { getUserByEmail } from '@/db/queries/userQueries'
import { Music } from '@/lib/types'
import { musics } from '../schema/musics'
import { eq } from "drizzle-orm"


export async function createMusic(music: Music,email:string) {
    const user = await getUserByEmail(email);

    music.userId = user.id;

    await db.insert(musics).values(music) // create a new music
}

export async function getMusicsByUserId(email: string) {
    const user = await getUserByEmail(email);
    return await db.select().from(musics).where(eq(musics.userId, user.id));
}


