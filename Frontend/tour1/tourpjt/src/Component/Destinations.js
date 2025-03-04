
     
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Destinations.css';

const destinationsData = [
  {
    id: 1,
    name: 'Taj Mahal',
    image: 'https://th.bing.com/th?id=OIP.O0SXnq9wBbj9C3SALsGIewHaE9&w=305&h=204&c=8&r2s=1&qlt=90&o=6&pid=3.1&rm=',
    description: 'One of the seven wonders of the world, located in Agra.',
    location: 'Agra, India',
    bestTime: 'October to March'
  },{
    id: 2,
    name: 'Jaipur',
    image: 'https://th.bing.com/th/id/OIP.k574Xz5W6lZQGCT-TZdL6wHaE7?w=183&h=180&c=7&r=0&o=5&pid=1.7',
    description: 'The Pink City, famous for its palaces and forts.',
    location: 'Jaipur, India',
    bestTime: 'November to February'
  },
  {
    id: 3,
    name: 'Varanasi',
    image: 'https://th.bing.com/th/id/OIP.e1CZfd9n1nYcy191apsszQHaEj?w=292&h=180&c=7&r=0&o=5&pid=1.7',
    description: 'The spiritual capital of India, located on the banks of the Ganges.',
    location: 'Varanasi, India',
    bestTime: 'October to March'
  },
  {
    id: 4,
    name: 'Kerala Backwaters',
    image: 'https://th.bing.com/th/id/OIP.HyjU2tItxGqeu1piwJogEQHaE8?w=294&h=196&c=7&r=0&o=5&pid=1.7',
    description: 'A serene network of lagoons, rivers, and lakes in Kerala.',
    location: 'Kerala, India',
    bestTime: 'November to February'
  },
  {
    id: 5,
    name: 'Leh Ladakh',
    image: 'https://th.bing.com/th/id/OIP.YSleYaU4olDnwPARXZbyTQHaE8?w=258&h=180&c=7&r=0&o=5&pid=1.7',
    description: 'A high-altitude desert famous for its monasteries and landscapes.',
    location: 'Leh, Ladakh, India',
    bestTime: 'May to September'
  },
  {
    id: 6,
    name: 'Goa',
    image: 'https://th.bing.com/th/id/OIP.RGpdb3FKmZ07rSFIvoaEtAHaE8?w=236&h=180&c=7&r=0&o=5&pid=1.7',
    description: 'Known for its pristine beaches, vibrant nightlife, and Portuguese influence.',
    location: 'Goa, India',
    bestTime: 'November to March'
  },
  {
    id: 7,
    name: 'Rajasthan Desert',
    image: 'https://th.bing.com/th/id/OIP.ctgXULIOZy1UOIQQN0t6cwHaEo?w=274&h=180&c=7&r=0&o=5&pid=1.7',
    description: 'The vast Thar Desert, known for its sand dunes and camel rides.',
    location: 'Rajasthan, India',
    bestTime: 'October to March'
  },
  {
    id: 8,
    name: 'Andaman and Nicobar Islands',
    image: 'https://th.bing.com/th/id/OIP.EuXpIRvi3V-h9TfzQ7souQHaEb?w=281&h=180&c=7&r=0&o=5&pid=1.7',
    description: 'A group of islands known for their pristine beaches and coral reefs.',
    location: 'Andaman and Nicobar Islands, India',
    bestTime: 'October to May'
  },
  {
    id: 9,
    name: 'Mysore',
    image: 'https://ts3.mm.bing.net/th?id=OIP.XqnjVwhPrQ6dxEBCLcwg1AHaEK&pid=15.1',
    description: 'Known for its royal heritage, palaces, and the famous Mysore Dussehra.',
    location: 'Mysore, India',
    bestTime: 'October to March'
  },
  {
    id: 10,
    name: 'Kolkata',
    image: 'https://ts2.mm.bing.net/th?id=OIP.zCpeCDZk9jumAKC8OAGhfgHaE8&pid=15.1',
    description: 'Known for its rich colonial history and cultural diversity.',
    location: 'Kolkata, India',
    bestTime: 'October to March'
  },
  {
    id: 11,
    name: 'Shimla',
    image: 'https://th.bing.com/th/id/OIP.tlFg9X8lSnLyul3KRFSzMgHaEc?w=286&h=180&c=7&r=0&o=5&pid=1.7',
    description: 'A beautiful hill station known for its pleasant climate and colonial architecture.',
    location: 'Shimla, India',
    bestTime: 'March to June, September to December'
  },
  {
    id: 12,
    name: 'Sikkim',
    image: 'https://th.bing.com/th/id/OIP.jS7MFt3qFQ-R78Rkq4I_xAHaFj?w=219&h=180&c=7&r=0&o=5&pid=1.7',
    description: 'A state with stunning landscapes, monasteries, and the majestic Kanchenjunga.',
    location: 'Sikkim, India',
    bestTime: 'March to June, September to December'
  }
  
];

const Destinations = ({ setFavorites }) => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const addToFavorites = (destination) => {
    setFavorites((prevFavorites) => [...prevFavorites, destination]);
  };

  const filteredDestinations = destinationsData.filter((destination) =>
    destination.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="destinations">
      <div className="search-bar">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search places..."
        />
      </div>
      <div className="destination-list">
        {filteredDestinations.map((destination) => (
          <div key={destination.id} className="destination-box">
            <img src={destination.image} alt={destination.name} />
            <h2>{destination.name}</h2>
            <p>{destination.description}</p>
            <p><strong>Location:</strong> {destination.location}</p>
            <p><strong>Best time to visit:</strong> {destination.bestTime}</p>
            <button
              className="add-to-favorites"
              onClick={() => addToFavorites(destination)}
            >
              Add to Favourites
            </button>
            <Link to="/booking" state={{ destination }} className="book-now">
              Book Now
            </Link>
          </div>
        ))}
      </div>
      <Link to="/favorites" className="favorites-link">Go to Favorites</Link>
    </div>
  );
};

export default Destinations;
