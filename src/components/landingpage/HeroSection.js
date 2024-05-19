import React from "react";
import heroSectionLogo from "../../assets/timetastelogo-removebg-preview.png";
import heroSectionBackground from "../../assets/heroSectionBackground.png";
import Navbar from "./Navbar";
function HeroSection() {
  return (
    <section className="hero-section" style={{ backgroundImage: `url(${"https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png"})` }}>
      <Navbar/>
      <div className="hero-section-container">
        <img src={heroSectionLogo} alt="Hero Section Logo" className="hero-section-logo" />
        <h1 className="h1" style={{ color: "white" }}>Effortlessly order your favorite meals and groceries</h1>
        <h1 className="h1" style={{ color: "white" }}>with convenient delivery scheduling</h1>
        {/* <div className="hero-section-input-container">
          <i className="fa fa-map-marker-alt" style={{ color: "pink", marginLeft: "5px" }}></i>
          <input type="text" placeholder="Kukatpally, Hyderabad" className="input-container-location" />
          <i className="fa fa-search search" style={{ color: "grey" }}></i>
          <input type="search" className="input-container-search" placeholder="Search for a restaurant or cuisine" />
        </div> */}
      </div>
    </section>
  );
}

export default HeroSection;
