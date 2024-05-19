import React from "react";
import item1 from "../../assets/item1.png";
import item2 from "../../assets/item2.png";
import item3 from "../../assets/item3.png";

function ItemsSection() {
  return (
    <section className="items">
      <div className="item1">
        <a href="#"><img src={item1} alt="Order Online" className="items-image" /></a>
        <h3 className="items-heading">Order Online</h3>
        <p className="items-paragraph">Stay home and order to your door step</p>
      </div>
      <div className="item2">
        <a href="#"><img src={item2} alt="Dining" className="items-image" /></a>
        <h3 className="items-heading">Dining</h3>
        <p className="items-paragraph">View the city's favourite Dining venues</p>
      </div>
      <div className="item3">
        <a href="#"><img src={item3} alt="Night Life and Clubs" className="items-image" /></a>
        <h3 className="items-heading">Night Life and Clubs</h3>
        <p className="items-paragraph">Explore the city's top nightlife outlets</p>
      </div>
    </section>
  );
}

export default ItemsSection;
