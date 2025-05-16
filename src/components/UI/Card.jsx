import React, { useContext } from "react";
import { Link } from "react-router";
import Button from "./Button";
import "../../pages/product/Product.css";
import { CartContext } from "../../context/CartContext";

const Card = ({ item, isInCart }) => {
  const { cartData, setCartData } = useContext(CartContext);
  console.log(cartData);

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
        {isInCart ? (
          <div className="buy-btn">Item Already in cart</div>
        ) : (
          <button
            className="buy-btn"
            onClick={() => {
              setCartData([...cartData, item]);
            }}
          >
            Add To Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
