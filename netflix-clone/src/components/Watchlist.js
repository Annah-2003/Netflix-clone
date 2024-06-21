import React from 'react';
import '../App.css';

const Watchlist = ({ watchlist }) => {
  return (
    <div className="watchlist">
      <h2>Your Watchlist</h2>
      {watchlist.map((movie) => (
        <div key={movie.id} className="watchlist-item">
          <img src={movie.posterUrl} alt={movie.title} />
          <p>{movie.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Watchlist;
