import axios from 'axios';
import type { Movie } from '../types/movie';

export interface MoviesHttpResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

const BASE_URL = 'https://api.themoviedb.org/3/search/movie';

async function fetchMovies(
  query: string,
  page: number
): Promise<MoviesHttpResponse> {
  const response = await axios.get<MoviesHttpResponse>(BASE_URL, {
    params: {
      query,
      page,
    },
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
    },
  });

  return response.data;
}

export default fetchMovies;
