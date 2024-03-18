import axios, { AxiosError } from 'axios';
import { IMovie } from '../interfaces/movie'; 
import {  convertToObject } from '../utils/convertToObject';

const API_ENDPOINT = 'https://search.imdbot.workers.dev';

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