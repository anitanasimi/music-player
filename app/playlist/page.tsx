import React from 'react'
import Link from 'next/link'
import { auth } from '@/app/auth'
import { redirect } from "next/navigation"
import { getMusicsByUserId } from '@/db/queries/musicQueries'
import { Music } from '@/lib/types'
import MusicPlayer from "@/components/DynamicMusicPlayer"



const PlayListPage = async () => {

    const session = await auth()

    if (!session?.user) {
        redirect("/api/auth/signin?callbackUrl=/playlist")
    }

    const user = session?.user;

    let MusicList: Music[] = [];
    if (user?.email) {
        MusicList = await getMusicsByUserId(user.email);
    }

    return (
        <div>
            <div className="mb-4">
                <Link href="/add-music" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Add New Music</Link>
            </div>
            {MusicList.map((music: Music, index) => (
                <div className="flex flex-col items-center">

                    <MusicPlayer {...music} />

                </div>
            ))}
        </div>

    )
}

export default PlayListPage