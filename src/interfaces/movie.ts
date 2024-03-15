export interface IMovie {
    id: number;
    name: string;
    rating: number;
    time: string;
    desc: string;
    starring: string;
    genres: string;
    tags: string;
    cover: string;
    video: string;
    date: string;
  }

export interface IMoviePreview {
  id: number;
  name: string;
  cover: string;
  rating: number;
  starring: string;
}