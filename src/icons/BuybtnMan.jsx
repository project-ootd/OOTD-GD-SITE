import React, { useState } from "react";
import { BiWon } from "react-icons/bi";

function BuybtnMan() {
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
export default BuybtnMan;
