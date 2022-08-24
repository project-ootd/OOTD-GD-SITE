import React, { useState, useRef } from "react";
import "../styles/subscss/Pop-up.scss";
const Popup = () => {
  const [row, Setrow] = useState("curr");
  const [active, setActive] = useState(true);

  return (
    <div>
      <input
        type="checkbox"
        id="my-modal-3"
        className="modal-toggle"
        onChange={() => {}}
        checked={active}
      />
      <div className="modal">
        <div className="modal-box relative">
          <label
            onClick={() => {
              setActive(!active);
            }}
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">
            가을 맞이 특별 여름 의류 세일!!!!
          </h3>
          <p className="py-4">
            가을을 이긴하지만 아직까지 더운 날이 이어지는 관계로 여름 의류를
            30%세일 판매하기로 했습니다. 기존의 의류들을 정리하고 더 좋은 겨울
            옷들로 여러분들을 맞이 하겠습니다.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Popup;
