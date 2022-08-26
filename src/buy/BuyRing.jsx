import React from "react";

import "../styles/buy/BuyMan.scss";
import Topbar from "../components/Topbar";
import Footer from "../components/Footer";

import { Link } from "react-router-dom";

const BuyRing = (args) => {
  return (
    <>
      <Topbar />
      <div
        className="overflow-x-auto w-full"
        style={{ width: "50%", margin: "15vh auto" }}
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
              <th />
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
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
                      <img
                        src="https://image.msscdn.net/images/goods_img/20201204/1713630/1713630_1_500.jpg?t=20201204105700"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">
                      심플베이직 각인 10K Gold 커플링{" "}
                    </div>
                    <div className="text-sm opacity-50">LRW19011T</div>
                  </div>
                </div>
              </td>
              <td>
                1
                <br />
                {/* <span className="badge badge-ghost badge-sm"></span> */}
              </td>
              <td>99,000원</td>
              <th>
                <button
                  className="btn btn-ghost btn-mg"
                  style={{ color: "red" }}
                >
                  삭제
                </button>
              </th>
            </tr>

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
                <th
                  style={{
                    textAlign: "center",
                    color: "red",
                    fontSize: "1rem",
                    fontWeight: "bold",
                  }}
                >
                  1
                </th>
                {/* <span className="badge badge-ghost badge-sm"></span> */}
              </td>
              <td style={{ fontSize: "1rem", fontWeight: "bold" }}>
                총 가격
                <br />
                <th
                  style={{
                    textAlign: "center",
                    color: "red",
                    fontSize: "1rem",
                    fontWeight: "bold",
                  }}
                >
                  99,000원
                </th>
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
                <Link to="/RSBP">
                  <button class="btn">돌아가기</button>
                </Link>
              </th>
              <th>
                <button class="btn btn-secondary" style={{ marginLeft: "0" }}>
                  구매하기
                </button>
              </th>

              <th />
            </tr>
          </tfoot>
        </table>
      </div>
      <Footer />
    </>
  );
};

export default BuyRing;
