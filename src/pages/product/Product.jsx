import "./Product.css";
import { useApiCall } from "../../hooks/useApiCall";
import { fetchProductAxios, } from "../../services/productService";
import Card from "../../components/UI/Card";
import Loader from "../../components/common/Loader";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const Product = () => {
  const { data, error, loading } = useApiCall(fetchProductAxios);
  const{cartData} = useContext(CartContext);
  
  if (loading) {
    return <div><Loader/></div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data || !Array.isArray(data.products)) {
    return <div>No data available</div>;
  }
  return (
    <div className="product">
      <h1>New Arrivals</h1>
      <div className="product-grid">
      {data.products.map((item) => {
        const cartFilters = cartData.filter(
          (cartItem) => item.id === cartItem.id
        ) ;
        const isInCart = cartFilters.length> 0

        return <Card key={item.id} item={item} isInCart={isInCart}/>;
      })}
      </div>
      <div className="btns">
      <button>View All</button>
      </div>
    </div>
  );
};

export default Product;
