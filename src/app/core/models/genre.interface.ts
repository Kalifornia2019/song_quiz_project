import { Song } from './song.interface';

export interface Genre {
  id: string;
  genre: any; //string
  data: Song[];
  nvclass?: string;
}
