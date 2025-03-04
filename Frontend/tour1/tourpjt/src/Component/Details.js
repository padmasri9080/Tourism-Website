import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './Details.css';  // Add styling for the details page

const Details = () => {
  const { id } = useParams(); // Get the ID from the URL parameter
  const [destination, setDestination] = useState(null);

  useEffect(() => {
    // Fetch the destination data based on the ID
    const destinationsData = [
      { id: 1, name: 'Taj Mahal', image: 'image_url', description: 'Description', location: 'Location', bestTime: 'Best time' },
      { id: 2, name: 'Jaipur', image: 'image_url', description: 'Description', location: 'Location', bestTime: 'Best time' },
      // Add other destinations here
    ];

    // Find the destination that matches the ID from the URL
    const selectedDestination = destinationsData.find(dest => dest.id === parseInt(id));
    setDestination(selectedDestination);
  }, [id]);

  if (!destination) {
    return <div>Loading...</div>;
  }

  return (
    <div className="destination-details">
      <div className="details-container">
        <img src={destination.image} alt={destination.name} className="destination-image" />
        <div className="destination-info">
          <h2>{destination.name}</h2>
          <p>{destination.description}</p>
          <p><strong>Location:</strong> {destination.location}</p>
          <p><strong>Best time to visit:</strong> {destination.bestTime}</p>
          <Link to="/" className="back-link">Back to Destinations</Link> {/* Link to go back */}
        </div>
      </div>
    </div>
  );
};

export default Details;
