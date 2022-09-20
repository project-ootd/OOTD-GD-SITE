import React from "react";

const ShoppingListItem = ({ CartArr }) => {
  return (
    <div className="Shopping-list-item">
      <tr>
        <td>
          <div></div>
        </td>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={CartArr.prdImg} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{CartArr.prdName}</div>
              <div className="text-sm opacity-50">{CartArr.prdEname}</div>
            </div>
          </div>
        </td>
        <td></td>
        <td
          style={{
            display: "flex",
          }}
        >
          <div
            className="minus"
            style={{
              display: "flex",
              width: "30px",
              height: "48px",
              alignItems: "center",
              justifyContent: "center",
            }}
          ></div>
          <div
            style={{
              display: "flex",
              width: "30px",
              height: "48px",
              alignItems: "center",
              justifyContent: "center",
            }}
          ></div>
          <div
            className="plus"
            style={{
              display: "flex",
              width: "30px",
              height: "48px",
              alignItems: "center",
              justifyContent: "center",
            }}
          ></div>
          <br />
          {/* <span className="badge badge-ghost badge-sm"></span> */}
        </td>
        <td>{CartArr.prdPrice}</td>
        {/* <td>{list.prdPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td> */}
        <td>
          <button className="btn btn-ghost btn-mg" style={{ color: "red" }}>
            삭제
          </button>
        </td>
      </tr>
    </div>
  );
};

export default ShoppingListItem;
