import React, { useEffect, useState } from "react";
import { BiWon } from "react-icons/bi";
import { Link } from "react-router-dom";
import "../styles/subscss/Buybtn.scss";
import Buy_man from "../buy/Buy_man";

function Buybtn() {
  return (
    <div>
      <button className="sell">
        <div className="won">
          <BiWon />
        </div>{" "}
        <Link to="/Buy_man">구매하기</Link>
      </button>
    </div>
  );
}
export default Buybtn;
