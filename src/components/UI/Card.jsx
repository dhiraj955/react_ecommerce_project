import React from "react";
import { Link } from "react-router";
import Button from "./Button";

const Card = ({ item }) => {
  return (
    <div className="card" key={item.id}>
      <div className="card-img">
        <Link to={`/shop/${item.id}`}>
          {" "}
          <img src={item.thumbnail} alt={item.title} />
        </Link>
      </div>
      <div className="card-details">
        <h3>{item.title}</h3>
        <p className="category">Category: {item.category}</p>
        <p className="price">${item.price}</p>
        <div className="card-meta">
          <span>⭐ {item.rating}</span>
          <span>Stock: {item.stock}</span>
        </div>
        <Button classname="buy-btn" name="Add to Cart" />
      </div>
    </div>
  );
};

export default Card;
