import axios, { AxiosError } from 'axios';
import { IMovie } from '../interfaces/movie'; 

const API_ENDPOINT = 'https://search.imdbot.workers.dev';

// Fetch random movies and convert it to a readable js array of object
export const fetchRandomMovies = async (quantity: number): Promise<IMovie[]> => {
  try {
    const response = await axios.get(`${API_ENDPOINT}/movies/random`, {
      params: { q: quantity },
    });
    const data = response.data;

    if(data.ok){

        const movieList: any[] = Array.isArray(data) ? data : data.description;
        const updatedMovieList: IMovie[] = movieList.map(item => convertToObject(item));

        return updatedMovieList.length > 0 ? updatedMovieList : [];
    }
    else {
       return []
    }
  } catch (error) {
    const axiosError = error as AxiosError;
    console.log("Failed to fetch Movies", axiosError.message);
    throw axiosError; 
  }
};

// Fetch movie by Id and convert it to a readable js object
export const fetchMovieById = async (id: string): Promise<IMovie | null> => {
  try {
    const response = await axios.get(`${API_ENDPOINT}/?`, {
      params: { tt: id },
    });
    const data = response.data;

    const movie = convertToObject(data.fake);

      return movie

  } catch (error) {
    const axiosError = error as AxiosError;
    console.log("Failed to fetch Movies", axiosError.message);
    throw axiosError; 
  }
};

// Search movie by title or keyword function 
export const searchMovie = async (search:string):Promise<IMovie | null> => {
  try {
    const response = await axios.get(`${API_ENDPOINT}/?`, {
      params: { q: search },
    });
    const data = response.data;
    
    if(data.ok){
      const movie = convertToObject(data);
      return movie
    } 

    return null

  } catch(error){
    const axiosError = error as AxiosError;
    console.log("Failed to search movie", axiosError.message);
    throw axiosError; 
  }
}



// Function used to convert the API data object into a readable JS object
 function convertToObject(obj: any): IMovie {
  const mapping: Record<string, keyof IMovie> = {
    "#TITLE": "TITLE",
    "#YEAR": "YEAR",
    "#IMDB_ID": "IMDB_ID",
    "#RANK": "RANK",
    "#ACTORS": "ACTORS",
    "#IMG_POSTER": "IMG_POSTER"
  };

  const newObj: Partial<IMovie> = {};

  Object.entries(mapping).forEach(([inputKey, outputKey]) => {
    if (obj[inputKey] !== undefined) {
      newObj[outputKey] = obj[inputKey];
    }
  });

  return newObj as IMovie;
}
