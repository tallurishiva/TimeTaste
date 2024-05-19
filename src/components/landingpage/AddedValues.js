import React from 'react';
import './AddedValues.css';
import { FaBurger } from "react-icons/fa6";
import { FaClock } from "react-icons/fa6";
import { FaCartArrowDown } from "react-icons/fa";
import { IoBagCheckOutline } from "react-icons/io5";
import { MdOutlineFoodBank } from "react-icons/md";
import { PiStackPlusFill } from "react-icons/pi";
const AddedValues = () => {
  return (
    <div className="added-values">
      <div className="text-section">
        <h2>Exclusive Features </h2>
        <div className="value-item">
          <span className='icon'><FaBurger color='orange'size={24}/></span>
          <div>
            <h3>Varied product selection with our Suggestion</h3>
            <p>
              Varied product selection tailored to your preferences, with personalized suggestions based on your requirements.
            </p>
          </div>
        </div>
        <div className="value-item">
        <span className='icon'><FaClock  color='orange'size={24}/></span>
          <div>
            <h3>Scheduling delivery</h3>
            <p>
            Effortlessly schedule deliveries at your convenience, ensuring your favorite meals and groceries arrive when you need them
            </p>
          </div>
        </div>
        <div className="value-item">
        <span className='icon'><MdOutlineFoodBank color='orange'size={26}/></span>
          <div>
            <h3>Subscribe to Homefood</h3>
            <p>
            Homefood is provided by nearby households, offering subscription plans for convenient access to delicious meals right by your workplace or home
            </p>
          </div>
        </div>
        <div className="value-item">
        <span className='icon'><MdOutlineFoodBank color='orange'size={26}/></span>
          <div>
            <h3>Order from Multiple Restaurants</h3>
            <p>
            Order from multiple restaurants within a 200-meter radius of a central restaurant.
            </p>
          </div>
        </div>
        <div className="value-item">
        <span className='icon'><FaCartArrowDown color='orange'size={24}/></span>
          <div>
            <h3>My Cart</h3>
            <p>
            Customer can add their order item to their cart.
            </p>
          </div>
        </div>
        <div className="value-item">
        <span className='icon'><IoBagCheckOutline color='orange'size={24}/></span>
          <div>
            <h3>Checkout</h3>
            <p>
            Pay by debit card or by Cash on Delivery (COD).
            </p>
          </div>
        </div>
      </div>
      <div className="image-section">
        <img src="https://images.herzindagi.info/image/2021/Nov/know-about-some-homemade-delicious-pizza-recipe-in-hindi.jpg" alt="Pizza" />
      </div>
    </div>
  );
};

export default AddedValues;
