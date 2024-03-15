import axios from 'axios';
import { convertToObject } from '../utils/convertToObject';

const API_ENDPOINT = 'https://search.imdbot.workers.dev';

export const fetchRandomMovies = async (quantity: number) => {
  try {
    const response = await axios.get(`${API_ENDPOINT}/movies/random?q=${quantity}`);
    const data = response.data; // Assuming this directly contains an array of movies or an object wrapping it

    // Assuming the API returns an array of movies directly or under a specific property
    // Adjust this line according to the actual structure, e.g., data.movies if it's under a 'movies' property
    const movieList = Array.isArray(data) ? data : data.movies; // Adjust based on the actual API response structure

    // Map the data to a readable object
    
    if (movieList.length > 0) {
        const updatedMovieList = movieList.map((item: any) => convertToObject(item));
      console.log(updatedMovieList);
      return updatedMovieList;
    } else {
      return null;
    }
  } catch (error) {
    console.log("Failed to fetch Movies", error);
    throw error; // It's good practice to re-throw the error for handling by the caller
  }
};
