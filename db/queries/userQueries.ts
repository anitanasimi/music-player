import { db } from '@/db'
import { eq , sql} from "drizzle-orm"
import { users } from '../schema/users';
import { musics } from '../schema/musics';


export async function getUserByEmail(email:string) {
    const user = await db.select().from(users).where(eq(users.email, email)).then((result) => result[0]);
    return user;
}

export async function getUserMusicsCount(email: string) {
    const user = await getUserByEmail(email);
    const result = await db.select({ count: sql<number>`COUNT (*)` }).from(musics).where(eq(musics.userId, user.id));
    const count = result[0]?.count;
    return count;
}


