// // Function to pick a random Movie from the Movie array list
import { IMovie } from "../interfaces/movie";

export default function randomMoviePicker(array: IMovie[]) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }
  