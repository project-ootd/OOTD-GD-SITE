import React from "react";

const ShoppingListItem = ({ CartArr }) => {
  return (
    <div className="Shopping-list-item">
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
                  src="/tailwind-css-component-profile-2@56w.png"
                  alt="Avatar Tailwind CSS Component"
                />
              </div>
            </div>
            <div>
              <div className="font-bold">{CartArr.prdName}</div>
              <div className="text-sm opacity-50">{CartArr.prdPrice}</div>
            </div>
          </div>
        </td>
        <td>
          {CartArr.prdName}
          <br />
          <span className="badge badge-ghost badge-sm">{CartArr.prdName}</span>
        </td>
        <td>{CartArr.prdName}</td>
        <th>
          <button className="btn btn-ghost btn-xs">{CartArr.prdName}</button>
        </th>
      </tr>
    </div>
  );
};

export default ShoppingListItem;
