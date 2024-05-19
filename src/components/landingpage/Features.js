import React from 'react';
import './features.css';

const Features = () => {
  return (
    <div className="rebel-culture-container">
      <div className="images-section">
        <img src="https://www.rebelfoods.com/uploads/slider/2119306781672814931We%20Always%20Think%20%E2%80%98Customer%20First%E2%80%99.jpg" alt="Person 1" className="rebel-image" />
      </div>
      <div className="text-section">
        <h1 className="title">The Rebel Culture</h1>
        <p className="description">
          We are REBEL. Never shy of redefining the norm, never shy of changes, just never shy.
          We are a bunch of highly motivated people who share a common goal. Everyone is empowered
          to experiment with the way they choose to work.
        </p>
        <p className="description">
          We garner an open, transparent and encouragement led culture where everyone is actively
          trying to stand true to the five Rebel Values. Our organizational culture attracts
          customers and qualified employees, and we enjoy an interesting mix of people.
        </p>
      </div>
    </div>
  );
};

export default Features;
