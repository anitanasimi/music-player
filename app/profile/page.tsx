import React from 'react'
import { auth } from '@/app/auth'
import { redirect } from "next/navigation"

const ProfilePage = async () => {

    const session = await auth()

    if (!session?.user) {
        redirect("/api/auth/signin?callbackUrl=/profile")
    }

    const user = session?.user;

    return (
        <div className="flex justify-center items-start min-h-screen pt-10">
            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-pink-200">
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2 text-pink-700">Profile</div>
                    <p className="text-gray-700 text-base mb-3">
                        <span className="font-bold text-pink-700">Name:</span> {user?.name}
                    </p>
                    <p className="text-gray-700 text-base">
                        <span className="font-bold text-pink-700">Email:</span> {user?.email}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage