import React from 'react';
import './HowItWorks.css';

const HowItWorks = () => {
  return (
    <div className="how-it-works">
      <h2>Here's How It Works</h2>
      <div className="steps">
      <div className="step">
          <img src="https://ganshidelivery.com/frontend/web/theme/images/how1.png" alt="Order & Delivery" />
          <h3>Let us get Your Mood</h3>
          <p>Answer three simple questions to receive personalized recommendations tailored just for you</p>
        </div>
        <div className="step">
          <img src="https://ganshidelivery.com/frontend/web/theme/images/how1.png" alt="Select Location" />
          <h3>Select Location</h3>
          <p>Enter your location and search for Bakerix near you</p>
        </div>
        <div className="step">
          <img src="https://ganshidelivery.com/frontend/web/theme/images/how2.png" alt="Choose Restaurant" />
          <h3>Choose Restaurant</h3>
          <p>Depending on your location, you can choose between several bakeries</p>
        </div>
        <div className="step">
          <img src="https://ganshidelivery.com/frontend/web/theme/images/how3.png" alt="Select Products" />
          <h3>Select Products</h3>
          <p>Find your favourite rolls, breads, and much more</p>
        </div>
        <div className="step">
          <img src="https://ganshidelivery.com/frontend/web/theme/images/how4.png" alt="Order & Delivery" />
          <h3>Order & Delivery</h3>
          <p>Your ordered products are delivered directly to you</p>
        </div>
        
      </div>
    </div>
  );
};

export default HowItWorks;
