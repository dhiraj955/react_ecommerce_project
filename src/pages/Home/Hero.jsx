import React from "react";
import "./Home.css";
import { NavLink } from "react-router";

function Hero() {
  return (
    <>
    <div className="hero">
    <div className="hero-section">
      <div className="hero-left">
        <h1>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
        <p>
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </p>
        <div className="btn">
          <NavLink to={"/shop"}><button>Shop Now</button></NavLink>
        </div>
        <div className="stat">
          <div className="international">
            <h4>200+</h4>
            <p>International Brands</p>
          </div>
          <div className="international">
            <h4>2,000+</h4>
            <p>High-Quality Products</p>
          </div>
          <div className="international happy">
            <h4>30,000+</h4>
            <p>Happy Customers</p>
          </div>
        </div>
      </div>
      <div className="hero-right">
        <img className="heroimage" src="src/assets/hero.png" alt="" width={"100%"} />
        <img className="vector" src="src/assets/vector.png" alt="" />
        <img className=" vector1" src="src/assets/vector (1).png" alt="" />
      </div>
    </div>
    <div className="marque">
        <div className="marque-image">
            <img src="src/assets/image1.png" alt=""  />
            <img src="src/assets/image2.png" alt=""  />
            <img src="src/assets/image3.png" alt=""  />
            <img src="src/assets/image4.png" alt=""  />
            <img src="src/assets/image5.png" alt=""  />
        </div>
    </div>
    </div>

    
    </>
  );
}

export default Hero;
