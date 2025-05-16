import { useContext } from "react";
import "./Cart.css";
import { CartContext } from "../../context/CartContext";
import { FiMinus, FiPlus } from "react-icons/fi";

const Cart = () => {
  const { cartData } = useContext(CartContext);

  if (cartData.length === 0) {
    return <div>Your Cart is empty.</div>;
  }

  return (
    <div>
      <div className="cart-section">
        <h1 className="heading">Your Cart Items</h1>

        {cartData.map((item) => (
          <div className="cart" key={item.id}>
            <img src={item.thumbnail} alt={item.title} height={100} />
            <div>
              <h4>{item.title}</h4>
              <p className="para">Price: ${item.price}</p>
              <div className="quantity-section">
                <button>
                  <FiPlus />
                </button>

                <p className="para"> 1</p>
                <button>
                  <FiMinus />
                </button>
                <button className="removebtn">Remove</button>
              </div>
              
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
