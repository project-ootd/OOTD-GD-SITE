import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import cn from "classnames";
import { MdCheckBoxOutlineBlank, MdCheckBox } from "react-icons/md";
import { FaRegMinusSquare, FaRegPlusSquare } from "react-icons/fa";

const BuyListItem = ({ cart, index, onToggle }) => {
  let sessionStorage = window.sessionStorage;
  const userId = sessionStorage.getItem("id");

  const [prdId, setPrdId] = useState("");
  const [list, setList] = useState("");

  const { checked } = cart;
  let [count, setCount] = useState("");
  // let { num, setNum } = useState("");
  const [countlist, setCountList] = useState(cart.amount);

  // const { amount, setAmount } = useState("");

  useEffect(() => {
    const getData = async () => {
      setPrdId(cart.prdId);
      // console.log("prdId", cart.prdId);
      const data = await axios({
        url: `http://localhost:4000/cartList2`,
        method: "POST",
        data: {
          prdId,
        },
      });
      setList(data.data);
    };
    getData();
  }, [prdId]);

  // count = cart.amount;
  const amountPlus = async (prdId) => {
    setCount = countlist + 1;
    const data = await axios.patch(`http://localhost:4000/amount/${prdId}`, {
      setCount,
    });

    setCountList(data.data.amount);
  };

  const amountMinus = async (prdId) => {
    setCount = countlist - 1;
    const data = await axios.patch(`http://localhost:4000/amount/${prdId}`, {
      setCount,
    });

    setCountList(data.data.amount);
  };

  return (
    <tr key={index}>
      <td>
        <div
          className={cn("checkbox1", { checked: checked })}
          onClick={() => {
            onToggle(userId, prdId);
          }}
        >
          {checked ? (
            <MdCheckBox className="checkbox" />
          ) : (
            // <input type="checkbox" className="checkbox" value={""} checked />
            <MdCheckBoxOutlineBlank className="checkbox" />
            // <input type="checkbox" className="checkbox" value={""} />
          )}
        </div>
      </td>
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
      <td>{list.prdPrice}</td>
      <td>
        <div
          className="minus"
          onClick={() => {
            amountMinus(prdId);
          }}
        >
          <FaRegMinusSquare />
        </div>
        {countlist}
        <div
          className="plus"
          onClick={() => {
            amountPlus(prdId);
          }}
        >
          <FaRegPlusSquare />
        </div>

        <br />
        {/* <span className="badge badge-ghost badge-sm"></span> */}
      </td>
      <td>{list.prdPrice * countlist}</td>
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
