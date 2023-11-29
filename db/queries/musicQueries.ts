import { db } from '@/db'
import { Music } from '@/lib/types'
import { musics } from '../schema/musics'
import { eq } from "drizzle-orm"


export async function createMusic(params: Music) {
    await db.insert(musics).values(params) // create a new music
}

export async function getMusicsByUserId(userId: string) {
    return await db.select().from(musics).where(eq(musics.userId, userId));
}


