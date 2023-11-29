import { db } from '@/db'
import { getUserByEmail } from '@/db/queries/userQueries'
import { Music } from '@/lib/types'
import { musics } from '../schema/musics'
import { eq, and } from "drizzle-orm"


export async function createMusic(music: Music, email: string) {
    const user = await getUserByEmail(email);

    music.userId = user.id;

    await db.insert(musics).values(music) // create a new music
}

export async function createMusicWithOutEmail(music: Music) {
    const result = await db.insert(musics).values(music).returning({ id: musics.id }).then(res => res[0]) // create a new music
    return result;
}

export async function deleteMusic(id: string) {
    const music = await db.delete(musics).where(eq(musics.id, Number(id))).returning().then(res => res[0]);
    return music;
}

// this functions also checks that deleted music owner be current user
export async function isExists(id: number, userId: string) {
    const music = await db.select().from(musics).where(and(eq(musics.id, id), eq(musics.userId, userId)));
    if (music) {
        return true;
    }

    return false;
}

export async function getMusicsByUserId(email: string) {
    const user = await getUserByEmail(email);
    return await db.select().from(musics).where(eq(musics.userId, user.id));
}


