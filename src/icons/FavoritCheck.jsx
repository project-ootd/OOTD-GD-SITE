import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import "../styles/icons/FavoritCheck.scss";
import axios from "axios";
import cn from "classnames";

const FavoritCheck = ({ checked, onClick }) => {
  return (
    <div className={cn("favorite", { checked: checked })}>
      {checked === true || checked === 1 ? (
        <AiFillHeart className="fullheart hrt-btn" onClick={onClick} />
      ) : (
        <AiOutlineHeart className="voidheart hrt-btn" onClick={onClick} />
      )}
    </div>
  );
};

export default FavoritCheck;
