import React from "react";
import { useState } from "react";
import "../styles/subscss/FavoritCheck.scss";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const FavoritCheck = () => {
  const [checked, setChecked] = useState(false);
  const onClick = () => {
    if (checked === false) {
      setChecked(!false);
    } else {
      setChecked(false);
    }
  };
  return (
    <div>
      {checked ? (
        <AiOutlineHeart className="voidheart hrt-btn" onClick={onClick} />
      ) : (
        <AiFillHeart className="fullheart hrt-btn" onClick={onClick} />
      )}
    </div>
  );
};

export default FavoritCheck;
