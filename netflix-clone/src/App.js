import React, { useState } from 'react';
import './App.css';
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import MovieRow from "./components/MovieRow";
import SearchBar from './components/SearchBar';
import Watchlist from './components/Watchlist';
import requests from "./api";

function App() {
  const [watchlist, setWatchlist] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  const addToWatchlist = (movie) => {
    setWatchlist([...watchlist, movie]);
  };

  const handleSearch = async (query) => {
    // Implement search logic here, for example using fetch with a search API
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=<YOUR_API_KEY>&query=${query}`);
    const data = await response.json();
    setSearchResults(data.results);
  };

  return (
    <div className="App">
      <NavBar />
      <Banner />
      <SearchBar onSearch={handleSearch} />
      <div className="search-results">
        {searchResults.map((movie) => (
          <div key={movie.id} className="movie-thumbnail">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <button onClick={() => addToWatchlist(movie)}>Add to Watchlist</button>
          </div>
        ))}
      </div>
      <MovieRow title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
      <MovieRow title="Trending Now" fetchUrl={requests.fetchTrending} />
      <MovieRow title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <MovieRow title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <MovieRow title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <MovieRow title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <MovieRow title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <MovieRow title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      <Watchlist watchlist={watchlist} />
    </div>
  );
}

export default App;
