import React from 'react'
import { auth } from '@/app/auth'
import { redirect } from "next/navigation"

const PlayListPage = async () => {

    const session = await auth()

    if (!session?.user) {
        redirect("/api/auth/signin?callbackUrl=/playlist")
    }

    const user = session?.user;

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        Music
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Artist
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Action
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                       Mocking bird
                    </th>
                    <td className="px-6 py-4">
                        Eminem
                    </td>
                    <td className="px-6 py-4">
                        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Listen</a>
                        <span className="text-gray-500"> | </span>
                        <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline">Delete</a>
                    </td>
                </tr>
                <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                       Mocking bird
                    </th>
                    <td className="px-6 py-4">
                        Eminem
                    </td>
                    <td className="px-6 py-4">
                        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Listen</a>
                        <span className="text-gray-500"> | </span>
                        <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline">Delete</a>
                    </td>
                </tr>
                <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                       Mocking bird
                    </th>
                    <td className="px-6 py-4">
                        Eminem
                    </td>
                    <td className="px-6 py-4">
                        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Listen</a>
                        <span className="text-gray-500"> | </span>
                        <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline">Delete</a>
                    </td>
                </tr>
               </tbody>
        </table>
    </div>
)
}

export default PlayListPage