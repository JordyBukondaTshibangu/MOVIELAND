import axios from 'axios';
import { fetchRandomMovies, fetchMovieById, searchMovie } from './movieAPI';


jest.mock('axios', () => ({
  get: jest.fn(() => Promise.resolve({ data: {} })),
}));

const mockedAxios = axios as jest.Mocked<typeof axios>;

// Helper function for mocking axios responses
const mockAxiosResponse = (data: any) => {
  (mockedAxios.get as jest.MockedFunction<typeof axios.get>).mockResolvedValueOnce({ data });
};

// Movie SDK Testing

describe('Movie API', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

// Assertion 1 : Fetch movies randomly 
  it('fetches random movies successfully', async () => {
    
    // response data (mocked)
    const movies = [{
        TITLE: "Godzilla Minus One",
        YEAR: 2023,
        IMDB_ID: "tt23289160",
        RANK: 242,
        ACTORS: "Sara Andô, Minim Hama",
        AKA: "Godzilla Minus One (2023)",
        IMG_POSTER: "https://m.media-amazon.com/images/M/MV5BOTI5MjNjMTMtN2NiNC00YjBlLTgzMWQtMGRhZDZkYmY1NGU2XkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_.jpg",

      }, {
        TITLE: "The Lion King",
        YEAR: 2012,
        IMDB_ID: "tt23289160",
        RANK: 452,
        ACTORS: "Sabra Anno, Mimi Hamal",
        IMG_POSTER: "https://m.media-amazon.com/images/M/MV5BOTI5MjNjMTMtN2NiNC00YjBlLTgzMWQtMGRhZDZkYmY1NGU2XkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_.jpg",

      }]; 

    // axios response (mocked)  
    mockAxiosResponse({ ok: true, description: movies }); 

    const result = await fetchRandomMovies(2);

    // expected results
    expect(result.length).toBe(2);
    expect(result[0].TITLE).toEqual('Godzilla Minus One');
    expect(axios.get).toHaveBeenCalledWith('https://search.imdbot.workers.dev/movies/random', {
      params: { q: 2 },
    });
  });

//   Assertion : 2 Fetch movie by ID
  it('fetches a movie by ID successfully', async () => {

    // response data (mocked)
    const movie = { fake: { "#TITLE": "The Lion King" } }; 

    // Axios response (mocked)
    mockAxiosResponse(movie); 

    const result = await fetchMovieById('123');

    // expected results
    expect(result).toHaveProperty('TITLE', 'The Lion King');
    expect(axios.get).toHaveBeenCalledWith('https://search.imdbot.workers.dev/?', {
      params: { tt: '123' },
    });
  });


//   Assertion : 3 Search Movie by Title
  it('searches a movie by keyword successfully', async () => {

    // response data (mocked)
    const movie = { ok: true, fake: { "#TITLE": "Peaky Blinder" } }; 

    // Axios response (mocked)
    mockAxiosResponse(movie); 

    const result = await searchMovie('Peaky Blinder');

    // expected results
    expect(result).toHaveProperty('TITLE', 'Peaky Blinder');
    expect(axios.get).toHaveBeenCalledWith('https://search.imdbot.workers.dev/?', {
      params: { q: 'Peaky Blinder' },
    });
  });
});
