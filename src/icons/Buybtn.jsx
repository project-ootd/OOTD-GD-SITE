import React, { useState } from "react";
import { BiWon } from "react-icons/bi";
import "../styles/icons/BuyBtn.scss";

function BuybtnMan() {
  return (
    <div>
      <button className="sell">
        <div className="won">
          <BiWon />
        </div>{" "}
        <div className="buy-text">구매하기</div>
      </button>
    </div>
  );
}
export default BuybtnMan;
