import React from "react";

function PopularLocalities() {
  return (
    <section className="popular-localities">
      <h1 className="popular-localities-heading">Popular Localities in and around <span style={{ fontWeight: 500 }}>Hyderabad</span></h1>
      <div className="popular-localities-boxes">
        {Array.from({ length: 12 }).map((_, index) => (
          <div className={`box box${index + 1}`} key={index}>
            <h2>Jubilee Hills</h2>
            <p>285 places</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PopularLocalities;
