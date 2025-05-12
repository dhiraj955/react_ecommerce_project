import { Component } from "react";
import AppLayout from "../components/layout/AppLayout";
import Brands from "../pages/Brands/Brands";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import NewArrival from "../pages/New-Arrival/NewArrival";
import OnSale from "../pages/On-Sale/OnSale";
import AdminLayout from "../components/layout/AdminLayout";
import Dashboard from "../pages/Admin/Dashboard/Dashboard";
import User from "../pages/Admin/User/User";
import Product from "../pages/product/Product";
import Shop from "../pages/Shop/Shop";
import ProductDetails from "../pages/product/ProductDetail/ProductDetails";
import AddProduct from "../pages/product/AddProduct/AddProduct";
import Cart from "../pages/Cart/Cart";
import NotFound from "../components/common/NotFound";
import Signup from "../pages/SignUp/SignUp";


export const routeConfig = [
     {
    Component: AppLayout,
    children: [
        {
            path: "/",
            errorElement: <NotFound/>,
            element: <Home/>
        },
        {
            path: "/shop",
            element: <Shop/>
        },
        {
            path: "/shop/:productID",
            element: <ProductDetails/>
        },
        {
            path: "/onsale",
            element: <OnSale/>
        },
        {
            path: "/newarrival",
            element: <NewArrival/>
        },
        {
            path: "/addproduct",
            element: <AddProduct/>
        },
        {
            path: "/cart",
            element: <Cart/>
        },
    ]
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/signup",
    element: <Signup/>
  },
  {
    path: "/admin",
    errorElement: <NotFound/>,
    Component: AdminLayout,
    children: [ 
        {
            path: "dashboard",
            element: <Dashboard/>
        },
        {
            path: "user",
            element: <User/>
        },
        {
            path: "product",
            element: <Product/>
        },
        
        {
            path: "product",
            element: <Product/>
        },
        

    ]

  },
  {
    path: "*", // catch-all fallback route
    element: <NotFound />
  }
]