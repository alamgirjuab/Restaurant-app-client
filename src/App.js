import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home/Home";
import { CartProvider } from "react-use-cart";
import Cart from "./components/Cart/Cart";
import ItemCard from "./components/ItemCard/ItemCard";
import Test from "./components/Test/Test";
import Invoice from "./components/Invoice/Invoice";

function App() {
  return (
    <>
      <CartProvider>
        {/* <Home />
        <ItemCard /> */}
        <Test />
        <Cart />
        <Invoice />
      </CartProvider>
    </>
  );
}

export default App;
