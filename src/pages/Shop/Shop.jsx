import React from 'react'
import { useApiCall } from '../../hooks/useApiCall';
import { fetchProductAxiosEverything } from '../../services/productService';
import Card from '../../components/UI/Card';
import Loader from '../../components/common/Loader';

const Shop = () => {
  const { data, error, loading } = useApiCall(fetchProductAxiosEverything);
    console.log(data, loading, error);
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
        <h1>Our Products</h1>
        <div className="product-grid">
        {data.products.map((item) => {
          return <Card key={item.id} item={item}/>;
        })}
        </div>
        
      </div>
    );
}

export default Shop
