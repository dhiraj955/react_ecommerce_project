import React from "react";
import { useApiCall } from "../../hooks/useApiCall";
import { fetchProductAxios } from "../../services/productService";
import Loader from "../../components/common/Loader";
import Card from "../../components/UI/Card";

function NewArrival() {
  const { data, error, loading } = useApiCall(fetchProductAxios);
  console.log(data, loading, error);
  if (loading) {
    return (
      <div>
        <Loader />
      </div>
    );
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
          return <Card key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
}

export default NewArrival;
