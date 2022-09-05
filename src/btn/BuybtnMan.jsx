import React, { useState } from "react";
import { BiWon } from "react-icons/bi";
import { Link } from "react-router-dom";
import "../styles/subscss/Buybtn.scss";
import BuyMan from "../buy/BuyMan";
import axios from "axios";

function BuybtnMan({ prdId, userId }) {
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
    <div onClick={cartAdd}>
      <button className="sell">
        <div className="won">
          <BiWon />
        </div>{" "}
        구매하기
      </button>
    </div>
  );
}
export default BuybtnMan;
