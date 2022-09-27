import React from "react";

const NoticeContentItem = ({ contentItem }) => {
  return (
    <div>
      <div className="notice-date">{contentItem.reg_date}</div>
      <nav className="numANDtitle">
        <div className="notice-content-num">{contentItem.id}</div>
        <div className="notice-content-title">{contentItem.text}</div>
      </nav>
      <div className="notice-content-text">{contentItem.perform_date}</div>
    </div>
  );
};

export default NoticeContentItem;
