import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import { routeConfig } from "./routes/routeConfig";
import { useState } from "react";
import { CartContext } from "./context/CartContext";

const router = createBrowserRouter(routeConfig);

function App() {
  const [cartData, setCartData] = useState([]);

  return (
    <CartContext.Provider value={{ cartData, setCartData }}>
      <RouterProvider router={router} />
    </CartContext.Provider>
  );
}

export default App;
