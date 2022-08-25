import React, { useEffect, useState } from "react";
import { BiWon } from "react-icons/bi";
import { Link } from "react-router-dom";
import "../styles/subscss/Buybtn.scss";
import BuyMan from "../buy/BuyMan";

function Buybtn_man() {
  return (
    <div>
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
