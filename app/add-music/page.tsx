"use client"

import { redirect } from "next/navigation"
import { useState } from 'react'

const AddMusicPage = () => {
    const [title, setTitle] = useState('');
    const [artist, setArtist] = useState('');
    const [file, setFile] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        var obj = {
            title: title,
            artist: artist,
            url: file
        }

        let jsonStr = JSON.stringify(obj);

        const res = await fetch('/api/add-music', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: jsonStr,
        });

        const { data } = await res.json();
        alert({data});
        if(data === 'ok'){
            setTitle('');
            setArtist('');
            setFile('');
            redirect("/playlist");
        }
    };

    return (
        <div className="flex items-center justify-center h-auto bg-gray-200">
            <form onSubmit={handleSubmit} className="w-full max-w-sm bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                        Music Title
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="title" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="artist">
                        Artist
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="artist" type="text" value={artist} onChange={(e) => setArtist(e.target.value)} />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="file">
                        Music File
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="file" type="text" value={file} onChange={(e) => setFile(e.target.value)} />
                    <span className="font-light text-slate-500">Please ensure that the selected audio file is no larger than 20MB.</span>
                </div>
                <div className="flex items-center justify-between">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Add Music
                    </button>
                </div>
            </form>
        </div>
    );
}

export default AddMusicPage;
