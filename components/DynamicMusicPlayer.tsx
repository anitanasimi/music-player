"use client"

import { useState, useRef, useEffect } from 'react';
import { Music } from '@/lib/types';

export default function MusicPlayer(music: Music) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const audioRef = useRef<HTMLAudioElement>(null);

    const handlePlayPause = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
        }
        setIsPlaying(!isPlaying);
    };

    const handleSeek = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (audioRef.current) {
            audioRef.current.currentTime = (audioRef.current.duration / 100) * Number(event.target.value);
            setProgress(Number(event.target.value));
        }
    };


    const handleDelete = () => {
        fetch('/api/delete-music', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: music.id, // replace with the actual id or data you need to send
            }),
        })
            .then(response => {
                const contentType = response.headers.get('content-type');
                if (contentType && contentType.indexOf('application/json') !== -1) {
                    return response.json().then(data => {
                        if (data === 'ok') {
                            alert('done')
                            window.location.href = "/playlist";
                        } else {
                            if (data === 'NotFound') {
                                alert('Music Not Found')
                            }
                        }
                    });
                } else {
                    return response.text().then(text => {
                        if (text === 'ok') {
                            alert('done')
                            window.location.href = "/playlist";
                        } else {
                            if (text === 'NotFound') {
                                alert('Music Not Found')
                            }
                        }
                    });
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };


    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const handleTimeUpdate = () => {
            setProgress((audio.currentTime / audio.duration) * 100);
        };

        audio.addEventListener('timeupdate', handleTimeUpdate);

        return () => {
            audio.removeEventListener('timeupdate', handleTimeUpdate);
        };
    }, []);

    return (
        <div className="flex items-center justify-center h-64 w-64 bg-pink-500 rounded-xl p-2 m-3">
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-4">
                <div className="md:flex">
                    <div className="music-image" style={{ backgroundImage: 'url(image-url)', height: '200px', backgroundSize: 'cover' }}></div>
                    <div className="p-8">
                        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Music Player</div>
                        <div className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{music.title} - {music.artist}</div>
                        <div className="flex items-center justify-center mt-4">
                            <button className="bg-pink-500 hover:bg-pink-600 text-white rounded-full p-2 mx-1" onClick={handlePlayPause}>
                                {isPlaying ? '❚❚' : '▶'}
                            </button>
                        </div>
                        <input type="range" min="0" max="100" value={progress} onChange={handleSeek} className="w-full h-2 bg-pink-200 rounded-full mt-4 cursor-pointer" />
                        <audio ref={audioRef} src={music.url} />
                        <div className="flex items-center justify-center mt-4">
                            <button
                                className="bg-red-500 hover:bg-red-600 text-white rounded-full p-2 mx-1"
                                onClick={handleDelete}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
}
