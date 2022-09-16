import React, { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import axios from "axios";
import "../styles/icons/ShoppingCart.scss";

function ShoppingCart({ prdId, userId }) {
  const [dup, setDup] = useState(false);
  const [addCart, setAddCart] = useState("");
  const cartAdd = async () => {
    const data = await axios({
      url: `http://localhost:4000/cart`,
      method: "POST",
      data: {
        prdId,
        userId,
      },
    });
    setAddCart(data.data);
    console.log(addCart);
  };
  return (
    <div onClick={cartAdd} className="all-cart">
      <button className="shopping-cart">
        <AiOutlineShoppingCart />
      </button>
      <div className="cart-text">장바구니 담기</div>
    </div>
  );
}
export default ShoppingCart;
