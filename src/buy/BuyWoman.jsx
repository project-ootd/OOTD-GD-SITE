import React, { useEffect, useState } from "react";
import "../styles/buy/BuyMan.scss";
import Topbar from "../components/Topbar";
import Footer from "../components/Footer";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const BuyWoman = (args) => {
  let sessionStorage = window.sessionStorage;
  const userId = sessionStorage.getItem("id");

  const [prdId, setPrdId] = useState("");
  const [prdName, setPrdName] = useState("");
  const [prdEName, setPrdEName] = useState("");
  const [prdPrice, setPrdPrice] = useState("");
  const [prdImg, setPrdImg] = useState("");

  const [cart, setCart] = useState([]);

  const params = useParams();

  const prdno = params.prdId;

  useEffect(() => {
    const getData = async () => {
      const data = await axios({
        url: `http://localhost:4000/cartlist`,
        method: "POST",
        data: { userId },
      });

      console.log("data console", data.data);
      // console.log("userId", userId);
      setCart(data.data);

      setPrdId(data.data.prdId);
      setPrdName(data.data.prdName);
      setPrdEName(data.data.prdEName);
      setPrdPrice(data.data.prdPrice);
      setPrdImg(data.data.prdImg);

      // setPrdId(data.data);
      // setIsLoading(false);
    };
    getData();
  }, []);

  console.log("cart", cart);

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
            {cart.map((cart) => (
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={prdImg} alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{cart.prdId}</div>
                      <div className="text-sm opacity-50">{prdName}</div>
                    </div>
                  </div>
                </td>
                <td>
                  1
                  <br />
                  {/* <span className="badge badge-ghost badge-sm"></span> */}
                </td>
                <td>
                  {/* {prdPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} */}
                </td>
                <td>
                  <button
                    className="btn btn-ghost btn-mg"
                    style={{ color: "red" }}
                  >
                    삭제
                  </button>
                </td>
              </tr>
            ))}
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
