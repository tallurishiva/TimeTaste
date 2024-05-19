import React from 'react';
import './ServingSections.css';

const ServingSections = () => {
  return (
    <div className="serving-sections">
      <Section 
        title="Restaurants"
        imageSrc="https://ganshidelivery.com/frontend/web/theme/images/service1.jpg" // replace with the correct path
        description="Discover top-rated restaurants offering diverse cuisines to satisfy every palate"
      />
      <Section 
        title="Super Markets"
        imageSrc="https://ganshidelivery.com/frontend/web/theme/images/service2.jpg" // replace with the correct path
        description="Discover local supermarkets offering a wide variety of fresh, high-quality products for all your needs."
      />
      <Section 
        title="HomeFoods"
        imageSrc="https://gfs.com/wp-content/uploads/2022/11/Chef-Ladel-Gravy-Oglebay-e1669131814282-1024x591.jpg" // replace with the correct path
        description="Homefood offers subscription plans for convenient, delicious meals from nearby households."
      />
    </div>
  );
};

const Section = ({ title, imageSrc, description }) => {
  return (
    <div className="section">
      <img src={imageSrc} alt={title} className="section-image" />
      <h3>{title}</h3>
      <p>{description}</p>
      <p style={{color:"green",cursor:"pointer",fontSize:22}}>Order Now</p>
    </div>
  );
};

export default ServingSections;
