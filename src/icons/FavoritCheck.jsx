import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import "../styles/icons/FavoritCheck.scss";
import axios from "axios";
import cn from "classnames";

const FavoritCheck = ({ checked, onClick }) => {
  return (
    <div className={cn("favorite", { checked: checked })} onClick={onClick}>
      {/*  <div className="favorite">
       {console.log("check", checked)} */}
      {checked ? (
        <AiFillHeart className="fullheart hrt-btn" onClick={onClick} />
      ) : (
        <AiOutlineHeart className="voidheart hrt-btn" onClick={onClick} />
      )}
      {/* {checked === true ? (
        <AiFillHeart className="fullheart hrt-btn" onClick={onClick} />
      ) : (
        <AiOutlineHeart className="voidheart hrt-btn" onClick={onClick} />
      )}
      <div className="favorite-text" onClick={onClick}>
        관심상품 등록
      </div> */}
      {/* </div> */}
    </div>
  );
};

export default FavoritCheck;
