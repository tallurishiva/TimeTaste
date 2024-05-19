import React from "react";
import mobileBanner from "../../assets/mobileBanner.png";
import appleStore from "../../assets/appleStore.png";
import playStore from "../../assets/playStore.png";

function GetTheApp() {
  return (
    <section className="container get__the_app">
      <div className="semi-container">
        <div className="left">
          <img src={mobileBanner} alt="Mobile Banner" />
        </div>
        <div className="right">
          <h1>Get the Zomato app</h1>
          <p>We will send you a link, open it on your phone to download the app</p>
          <div className="radio-button-container">
            <div>
              <input type="radio" name="emailorphone" id="email" />
              <label htmlFor="email" style={{ fontSize: "14px" }}>Email</label>
            </div>
            <div>
              <input type="radio" name="emailorphone" id="phone" />
              <label htmlFor="phone" style={{ fontSize: "14px" }}>Phone</label>
            </div>
          </div>
          <div className="input-container">
            <input type="text" placeholder="Email" />
            <button>Share app link</button>
          </div>
          <div className="download-app-container">
            <h5>Download app from</h5>
            <div>
              <img src={appleStore} alt="Apple Store" />
              <img src={playStore} alt="Play Store" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GetTheApp;
