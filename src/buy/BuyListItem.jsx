import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import cn from "classnames";
import { MdCheckBoxOutlineBlank, MdCheckBox } from "react-icons/md";

const BuyListItem = ({ cart, index, onToggle }) => {
  let sessionStorage = window.sessionStorage;
  const userId = sessionStorage.getItem("id");

  const [prdId, setPrdId] = useState("");
  const [list, setList] = useState("");

  const { checked } = cart;

  //   useEffect(() => {

  useEffect(() => {
    const getData = async () => {
      setPrdId(cart.prdId);
      console.log("prdId", cart.prdId);
      const data = await axios({
        url: `http://localhost:4000/cartList2`,
        method: "POST",
        data: {
          prdId,
        },
      });
      setList(data.data);
      console.log("list", data.data);
    };
    getData();
  }, [prdId]);
  //   }, []);
  return (
    <tr key={index}>
      <th>
        <label>
          <div
            className={cn("checkbox", { checked: checked })}
            onClick={() => {
              onToggle(userId);
            }}
          >
            {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
            {/* <input type="checkbox" className="checkbox" /> */}
            {/* <div className="text">{text}</div> */}
          </div>
          {/* <input type="checkbox" className="checkbox" /> */}
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={list.prdImg} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{list.prdName}</div>
            <div className="text-sm opacity-50">{list.prdEName}</div>
          </div>
        </div>
      </td>
      <td>
        1
        <br />
        {/* <span className="badge badge-ghost badge-sm"></span> */}
      </td>
      {/* <td>{list.prdPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td> */}
      <td>
        <button className="btn btn-ghost btn-mg" style={{ color: "red" }}>
          삭제
        </button>
      </td>
    </tr>
  );
};

export default BuyListItem;
