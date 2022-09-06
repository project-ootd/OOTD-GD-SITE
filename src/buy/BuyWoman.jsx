import React, { useEffect, useState } from "react";
import "../styles/buy/BuyMan.scss";
import Topbar from "../components/Topbar";
import Footer from "../components/Footer";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import BuyListItem from "./BuyListItem";

const BuyWoman = (args) => {
  let sessionStorage = window.sessionStorage;
  const userId = sessionStorage.getItem("id");

  const [cart, setCart] = useState([]);

  const params = useParams();

  const prdId = params.prdId;

  useEffect(() => {
    const getData = async () => {
      const data = await axios({
        url: `http://localhost:4000/cartlist`,
        method: "POST",
        data: { userId },
      });

      // console.log("data console", data.data);

      setCart(data.data);
    };
    getData();
  }, [userId]);

  const onToggle = async (userId, prdId) => {
    await axios.patch(`http://localhost:4000/check/${userId}/${prdId}`);
    setCart((cart) =>
      cart.map((cart) =>
        cart.userId === userId && cart.prdId === prdId
          ? { ...cart, checked: !cart.checked }
          : cart
      )
    );
  };

  return (
    <>
      <Topbar />
      <div
        className="overflow-x-auto w-full"
        style={{ width: "60%", margin: "15vh auto" }}
      >
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>상품명</th>
              <th>수량</th>
              <th>가격</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            {/* {cart.map((cart) => (
              <tr>
                <td>{prdEName}</td>
              </tr>
            ))} */}
            {cart.map((cart, index) => {
              return (
                <BuyListItem cart={cart} key={index} onToggle={onToggle} />
                // <li cart={cart} key={index}>
                //   {cart.prdId}
                // </li>
              );
            })}
            {/* ))} */}

            {/* row 4 */}
            <tr>
              <th>
                <label>
                  <span></span>
                </label>
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <span></span>
                    </div>
                  </div>
                  <div>
                    <div className="font-bold"></div>
                    <div className="text-sm opacity-50"></div>
                  </div>
                </div>
              </td>
              <td style={{ fontSize: "1rem", fontWeight: "bold" }}>
                총 수량
                <br />
                <div
                  style={{
                    textAlign: "center",
                    color: "red",
                    fontSize: "1rem",
                    fontWeight: "bold",
                  }}
                >
                  1
                </div>
                {/* <span className="badge badge-ghost badge-sm"></span> */}
              </td>
              <td style={{ fontSize: "1rem", fontWeight: "bold" }}>
                총 가격
                <br />
                <div
                  style={{
                    textAlign: "center",
                    color: "red",
                    fontSize: "1rem",
                    fontWeight: "bold",
                  }}
                >
                  25,000원
                </div>
                {/* <span className="badge badge-ghost badge-lg"></span> */}
              </td>
              <th></th>
            </tr>
          </tbody>
          {/* foot */}
          <tfoot>
            <tr>
              <th />
              <th></th>
              <th>
                <Link to="/WSBP">
                  <button className="btn">돌아가기</button>
                </Link>
              </th>
              <td>
                <button
                  className="btn btn-secondary"
                  style={{ marginLeft: "0" }}
                >
                  구매하기
                </button>
              </td>

              <th />
            </tr>
          </tfoot>
        </table>
      </div>
      <Footer />
    </>
  );
};

export default BuyWoman;
