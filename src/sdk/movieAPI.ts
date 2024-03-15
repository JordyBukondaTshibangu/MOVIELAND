import axios from 'axios';
import { convertToObject } from '../utils/convertToObject';

const API_ENDPOINT = 'https://search.imdbot.workers.dev';

export const fetchRandomMovies = async (quantity:number) => {
    try {
        const response = await axios.get(`${API_ENDPOINT}/movies/random?q=${quantity}`);
        const data = await response.data

        // map the data to a readable object
        const updatedMovieList =  data.description.map((item:any) => convertToObject(item));

        if(updatedMovieList.length > 0){
            console.log(updatedMovieList)
            return updatedMovieList
        } else {
            return null
        }


    } catch(error){
        console.log("Failed to fetch Movies", error)
        throw error
    }
}


