import React, { useEffect, useState } from "react";
import { BiWon } from "react-icons/bi";
import "../styles/subscss/Buy.scss";

function Buy() {
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
export default Buy;
