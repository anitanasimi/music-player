"use client"

import { useState, useRef, useEffect } from 'react';

export default function MusicPlayer() {
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
        <div className="flex items-center justify-center h-auto bg-pink-500 rounded-xl p-2">
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-4">
                <div className="md:flex">
                    <div className="p-8">
                        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Music Player</div>
                        <div className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Mockingbird: Eminem - tiktok version</div>
                        <div className="flex items-center justify-center mt-4">
                            <button className="bg-pink-500 hover:bg-pink-600 text-white rounded-full p-2 mx-1" onClick={handlePlayPause}>
                                {isPlaying ? '❚❚' : '▶'}
                            </button>
                        </div>
                        <input type="range" min="0" max="100" value={progress} onChange={handleSeek} className="w-full h-2 bg-pink-200 rounded-full mt-4 cursor-pointer"/>
                        <audio ref={audioRef} src="./Mockingbird.mp3" />
                    </div>
                </div>
            </div>
        </div>
    );
}
