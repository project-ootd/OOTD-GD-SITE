import React from "react";
import { BiWon } from "react-icons/bi";
import { Link } from "react-router-dom";
import "../styles/subscss/Buybtn.scss";
import BuyMan from "../buy/BuyMan";
import axios from "axios";

function Buybtn_man({ prdId, userId }) {
  const cartAdd = async () => {
    const data = await axios({
      url: `http://localhost:4000/cart`,
      method: "POST",
      data: {
        prdId,
        userId,
      },
    });
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
export default Buybtn_man;
