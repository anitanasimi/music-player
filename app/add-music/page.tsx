"use client"

import { useState } from 'react'
import { createMusic } from "./actions"
import { MusicInfo } from "@/lib/types"
import Loading from '../loading'

const AddMusicPage = () => {
    const [title, setTitle] = useState('');
    const [artist, setArtist] = useState('');
    const [file, setFile] = useState<File | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const computeSHA256 = async (file: File) => {
        const buffer = await file.arrayBuffer();
        const hashBuffer = await crypto.subtle.digest("SHA-256", buffer);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const hashHex = hashArray
            .map((b) => b.toString(16).padStart(2, "0"))
            .join("");
        return hashHex;
    };


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!title) {
            alert('Enter Title of music');
            return;
        }

        if (!artist) {
            alert('Enter Artist');
            return;
        }

        if (file) {
            setIsLoading(true);
            let musicInfo = {} as MusicInfo;
            musicInfo.title = title;
            musicInfo.artist = artist;

            const checksum = await computeSHA256(file);
            const signedURLResult = await createMusic(file.type, file.size, checksum, musicInfo);
            if (signedURLResult.failure !== undefined) {
                alert(signedURLResult.failure);
                setIsLoading(false);
                return;
            }
            const { url, musicId } = signedURLResult.success;
            console.log(url);
            console.log(musicId);

            // upload file
            await fetch(url, {
                method: "PUT",
                body: file,
                headers: {
                    "Content-Type": file?.type || "application/octet-stream",
                }
            })

            setIsLoading(false);

            alert('done!')
            setTitle('');
            setArtist('');
        } else {
            alert('No file selected. Please choose an audio file to proceed.');
            return;
        }


    };

    return (
        <div className="flex items-center justify-center h-auto bg-gray-200">
            <form onSubmit={handleSubmit} className="w-full max-w-sm bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                        Music Title
                    </label>
                    <input required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="title" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="artist">
                        Artist
                    </label>
                    <input required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="artist" type="text" value={artist} onChange={(e) => setArtist(e.target.value)} />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="file">
                        Music File
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="file"
                        type="file"
                        accept="audio/*"
                        onChange={(e) => e.target.files && setFile(e.target.files?.[0])} />
                    <span className="font-light text-slate-500">Please ensure that the selected audio file is no larger than 20MB.</span>
                </div>
                <div className="flex items-center justify-between">
                    {isLoading ? <Loading /> : null}
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Add Music
                    </button>
                </div>
            </form>
        </div>
    );
}

export default AddMusicPage;
