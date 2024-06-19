import axios from 'axios';

 const API_KEY ='8406a2de92dad14b74d89293f503c4e8';
 const BASE_URL = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NDA2YTJkZTkyZGFkMTRiNzRkODkyOTNmNTAzYzRlOCIsInN1YiI6IjY2NzJkMGNmZTUzYTE1YTY0MDE2OWQ3MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EgPoMK6K1nZ7A_FiCDla8v_-8z9ZByFdjOdb1-SXouQ'

 const requests = {
    fetchTrending: `${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=99`,
  };
  
  export default requests;