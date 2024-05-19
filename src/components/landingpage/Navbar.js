import React from "react";

function Navbar() {
  return (
    <header>
      <nav className="nav-bar">
        <a href="#" className="get-app"></a>
        <div className="hero-section-menu">
          <a href="#" className="link">Investor Relations</a>
          <a href="#" className="link">Add restaurant</a>
          <a href="#" className="link">Login</a>
          <a href="#" className="link">Sign Up</a>
          <a href="#" className="account"><i className="fa-solid fa-user"></i></a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
