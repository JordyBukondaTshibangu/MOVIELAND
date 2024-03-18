# MovieLand SDK Documentation 

## Introduction 
The MovieLand SDK provides an easy and ready to use function that interacts with the Movie Database API.
It fetches a list of random movies ( q ), with q being the quantity of movies
It fetches single movie by there id, also using a query parameter (tt)
It search movie by its title, or a keyword ( starring)

## Installation 

To make use of the SDK in your javascript project, include it by importing the module as follow : 

    import { fetchRandomMovies, searchMovies, getMovieDetails } from './sdk/movieAPI';

## API reference

- fetchRandomMovies(query : number) 

  * query : The q query is for the number of movies you would like to fetch
  * Returns : An Array of movies objects
  * Endpoint : https://search.imdbot.workers.dev/movies/random?q=query

  Fetches a list of random movies

- fetchMovieById(query : string) 

  * query : The tt query is for the ID a specific movie
  * Returns a movie object
  * Endpoint : https://search.imdbot.workers.dev?tt=query
  
  Fetches a single movie

- searchMovie(query:string) 

  * query : The q query is for the movie title or a keyword
  * Returns an Array of movies objects
  * Endpoint : https://search.imdbot.workers.dev?q=query
  
  Fetches a list of random movies

## Error Handling

All functions return a Promise that throws an error message in case of an failure

## Bonus 

A convertToObject to convert the data into readable JS object