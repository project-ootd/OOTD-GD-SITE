import React from "react";
import { Link } from "react-router-dom";
import "../styles/ShoppingCart.scss";

const ShoppingCart = () => {
  return (
    <div className="Shopping-Main">
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
                      <img src="" alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold"></div>
                    <div className="text-sm opacity-50"></div>
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
                ></div>
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
                ></div>
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
                <Link to="/DetailPage">
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
    </div>
  );
};

export default ShoppingCart;
