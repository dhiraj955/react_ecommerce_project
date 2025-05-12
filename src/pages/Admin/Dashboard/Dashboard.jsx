import React, { useEffect, useState } from "react";
import "../../Admin/Admin.css";

import axios from "axios";

function Dashboard() {
  const [userCount, setUserCount] = useState(0);
  const [productCount, setProductCount] = useState(0);

  async function fetchUser() {
    const res = await axios.get("https://fakestoreapi.com/users");
    setUserCount(res.data.length);
  }
  async function fetchProduct() {
    const res = await axios.get("https://dummyjson.com/products?limit=8");
    setProductCount(res.data.products.length);
  }

  useEffect(() => {
    fetchUser();
    fetchProduct();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <div className="count">
        <div className="usercount">
          <h4>Total User</h4>
          <p>{userCount}</p>
        </div>
        <div className="productcount">
          <h4>Total Product</h4>
          <p>{productCount}</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
