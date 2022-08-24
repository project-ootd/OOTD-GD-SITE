import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "../styles/subscss/ShoppingCart.scss";

function ShoppingCart() {
  return (
    <div>
      <button className="shopping-cart">
        <AiOutlineShoppingCart />
      </button>
    </div>
  );
}
export default ShoppingCart;
