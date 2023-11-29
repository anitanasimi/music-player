import MusicPlayer from '@/components/DefaultMusicPlayer';

export default function Home() {
  return (
    <div>
      <div className="bg-pink-200 text-pink-700 border-l-4 border-pink-500 p-4 rounded-lg mb-4" role="alert">
        <h1 className="text-2xl font-bold">Immerse yourself in the rhythm of these fantastic tunes!</h1>
        <p><a href="/playlist" className="text-sky-800">Create your own playlist</a> and let the music carry you away.</p>
      </div>
      <MusicPlayer />
    </div>
  );
}
