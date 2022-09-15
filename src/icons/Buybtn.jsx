import React, { useState } from "react";
import { BiWon } from "react-icons/bi";

import "../styles/icons/Buybtn.scss";

function Buybtn() {
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
export default Buybtn;
