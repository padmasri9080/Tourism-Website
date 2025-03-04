import React from 'react';
import { Link } from 'react-router-dom';
import './Favorites.css';

const Favorites = ({ favorites }) => {
  return (
    <div className="favorites">
      <h2>Your Favourite Destinations</h2>
      <div className="favorite-list">
        {favorites.map((destination) => (
          <div key={destination.id} className="favorite-box">
            <img src={destination.image} alt={destination.name} />
            <h3>{destination.name}</h3>
            <p>{destination.description}</p>
          </div>
        ))}
      </div>
      <Link to="/" className="back-link">Back to Destinations</Link>
    </div>
  );
};

export default Favorites;
