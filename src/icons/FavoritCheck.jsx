import React from "react";
import { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import "../styles/icons/FavoritCheck.scss";

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
    <div className="favorite">
      {checked ? (
        <AiFillHeart className="fullheart hrt-btn" onClick={onClick} />
      ) : (
        <AiOutlineHeart className="voidheart hrt-btn" onClick={onClick} />
      )}
    </div>
  );
};

export default FavoritCheck;
