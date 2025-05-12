
import { useEffect, useState } from "react";
import "./Cart.css"
import axios from "axios";

const Cart = () => {

  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    async function fetchCart() {
      try {
        const res = await axios.get("https://dummyjson.com/carts");
        setCartData(res.data.carts[0]?.products || []); // getting products of the first cart
      } catch (error) {
        console.error("Error fetching cart data:", error);
      }
    }
    fetchCart();
  }, []);

    return (
    <div className="cart">
      <div className="cart-section">
        <h1 className="heading">Shopping Cart</h1>

        {cartData.map((item) => (
          <div className="product-detail" key={item.id}>
            <div className="product-left">
              <img src={item.thumbnail || "src/assets/formal.png"} alt={item.title} />
              <div className="product-name">
                <h2>{item.title}</h2>
                <p>{item.description || "No description available"}</p>
              </div>
            </div>
            <div className="product-rights">
              <div className="cartbtn">
                <input type="number" className="inputnuber" value={item.quantity}  />
              </div>
              <span>${item.total}</span>
            </div>
          </div>
        ))}

        <hr />
        <div className="price">
          <span>Subtotal:</span>
          <span>
            $
            {cartData.reduce((acc, item) => acc + item.total, 0).toFixed(2)}
          </span>
        </div>
        <div className="taxes">
          <span>Taxes:</span>
          <span>$1.00</span>
        </div>
        <hr />
        <div className="total">
          <span>Total:</span>
          <span>
            $
            {(
              cartData.reduce((acc, item) => acc + item.total, 0) + 1
            ).toFixed(2)}
          </span>
        </div>
        <div className="btnc">
          <button className="checkoutbtn">Checkout</button>
        </div>
      </div>
    </div>
  );
};



export default Cart;
