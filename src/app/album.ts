import { Track } from './track';

export interface Album {
    album: any;
    artist: string;
    name: string;
    releaseDate: string;
    coverImage: string;
    tracks: Track[];
}
