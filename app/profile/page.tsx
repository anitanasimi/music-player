import React from 'react'
import { auth } from '@/app/auth'
import { redirect } from "next/navigation"
import { getUserByEmail, getUserMusicsCount } from '@/db/queries/userQueries'

const ProfilePage = async () => {

    const session = await auth()

    if (!session?.user) {
        redirect("/api/auth/signin?callbackUrl=/profile")
    }

    const user = session?.user;

    let musicsCount;
    if (user?.email) {
        musicsCount = await getUserMusicsCount(user.email);
    }

    let imgUrl;
    if (user?.image) {
        imgUrl = user.image
    }

    return (
        <div className="flex justify-center items-start min-h-screen pt-10">
            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-pink-200">
                <img className="w-full" src={imgUrl} alt="Profile" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2 text-pink-700">Profile</div>
                    <p className="text-gray-700 text-base mb-3">
                        <span className="font-bold text-pink-700">Name:</span> {user?.name}
                    </p>
                    <p className="text-gray-700 text-base mb-4">
                        <span className="font-bold text-pink-700">Email:</span> {user?.email}
                    </p>
                    <hr />
                    <p className="text-gray-700 text-base mt-4">
                        <span className="font-bold text-pink-700">Music Count:</span> {Number(musicsCount)}
                    </p>
                </div>
            </div>
        </div>

    )
}

export default ProfilePage