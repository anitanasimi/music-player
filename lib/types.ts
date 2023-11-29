export interface Music {
    id: number;
    userId: string;
    artist: string;
    title: string;
    url: string;
    createdAt: Date;
}

export interface MusicInfo {
    artist: string;
    title: string;
}