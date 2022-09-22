import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import "../styles/icons/FavoritCheck.scss";
import axios from "axios";
import cn from "classnames";

const FavoritCheck = ({
  checked,
  onToggle,
  // setHeart,
  // checked, onClick
}) => {
  return (
    // <div>
    //   <AiOutlineHeart className="voidheart hrt-btn" />
    // </div>
    <div className={cn("favorite", { checked: checked })}>
      {checked === true || checked === 1 ? (
        <AiFillHeart
          className="fullheart hrt-btn"
          onClick={() => {
            onToggle();
            // console.log("활성화", checked);
          }}
        />
      ) : (
        <AiOutlineHeart
          className="voidheart hrt-btn"
          onClick={() => {
            // console.log("비활성화", checked);
            // insertHeart(checked);
            onToggle();
          }}
          //  onClick={onClick}
        />
      )}
    </div>
  );
};

export default FavoritCheck;
