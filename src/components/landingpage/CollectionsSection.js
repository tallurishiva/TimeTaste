import React from "react";
import collection1 from "../../assets/collection1.jpg"
import collection2 from "../../assets/collection2.jpg";
import collection3 from "../../assets/collection3.jpg";
import collection4 from "../../assets/collection4.jpg";

function CollectionsSection() {
  return (
    <section className="collections">
      <h1 className="collection-heading">Collections</h1>
      <div className="collection-sub-heading">
        <span>Explore curated lists of top restaurants, cafes, pubs, based on trends</span>
        <span> All collections in Hyderabad </span>
      </div>
      <div className="collection-cards">
        <div className="card card1" style={{ backgroundImage: `url(${collection1})` }}>
          <div className="overlay"></div>
          <div className="content">
            <h4>Live Cricket Screening</h4>
            <span>58 places</span>
          </div>
        </div>
        <div className="card card2" style={{ backgroundImage: `url(${collection2})` }}>
          <div className="overlay"></div>
          <div className="content">
            <h4>Ramadan special</h4>
            <span>22 places</span>
          </div>
        </div>
        <div className="card card3" style={{ backgroundImage: `url(${collection3})` }}>
          <div className="overlay"></div>
          <div className="content">
            <h4>Newly Opened</h4>
            <span>53 places</span>
          </div>
        </div>
        <div className="card card4" style={{ backgroundImage: `url(${collection4})` }}>
          <div className="overlay"></div>
          <div className="content">
            <h4>Trending this week</h4>
            <span>66 places</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CollectionsSection;
