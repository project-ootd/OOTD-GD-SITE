import React from "react";
import { useState } from "react";
<<<<<<< HEAD
=======
import "../styles/icons/FavoritCheck.scss"

>>>>>>> master
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
        <AiOutlineHeart className="voidheart hrt-btn" onClick={onClick} />
      ) : (
        <AiFillHeart className="fullheart hrt-btn" onClick={onClick} />
      )}
      <div className="favorite-text" onClick={onClick}>
        관심상품 등록
      </div>
    </div>
  );
};

export default FavoritCheck;
