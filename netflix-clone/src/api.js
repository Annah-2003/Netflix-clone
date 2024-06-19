import axios from 'axios';

// Define your API key and access token
const API_KEY = '8406a2de92dad14b74d89293f503c4e8';
const ACCESS_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NDA2YTJkZTkyZGFkMTRiNzRkODkyOTNmNTAzYzRlOCIsInN1YiI6IjY2NzJkMGNmZTUzYTE1YTY0MDE2OWQ3MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EgPoMK6K1nZ7A_FiCDla8v_-8z9ZByFdjOdb1-SXouQ';
const BASE_URL = 'https://api.themoviedb.org/3';

// Setup requests with the correct URL parameters
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

// Example function to fetch data using axios
const fetchData = async (url) => {
  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
        'Content-Type': 'application/json;charset=utf-8',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

// Example usage
fetchData(requests.fetchTrending).then(data => console.log(data));

export default requests;
