import React from "react";
import { Link } from "react-router-dom";
import {
  MdCheckBoxOutlineBlank,
  MdRemoveCircleOutline,
  MdCheckBox,
  MdModeEditOutline,
} from "react-icons/md";
import cn from "classnames";
import "../styles/board/NoticeListItem.scss";
import NoticeContent from "./NoticeContent";

const NoticeListItem = ({
  Notice,
  onRemove,
  onToggle,
  onInsertToggle,
  setSelectedNotice,
}) => {
  const { checked, id, title, reg_date } = Notice;

  // console.log(`${id}번 NoticelistItem에서 Notice를 출력함`, Notice);
  return (
    <li className="NoticeListItem">
      <div
        className={("checkbox", { checked: checked })}
        onClick={() => {
          onToggle(id);
        }}
        style={{ fontSize: "1.5rem" }}
      >
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
      </div>
      <div className="NoticeNumber">{id}</div>
      <Link to={`/NoticeContent/${id}`}>
        <div className="NoticeText" onClick={() => {}}>
          {title}
        </div>
      </Link>
      <div className="NoticeDate">{reg_date.substring(0, 10)}</div>
      {/* <div
        className="NoticeEdit"
        onClick={() => {
          onInsertToggle();
          setSelectedNotice((prev) => Notice);
        }}
      >
        <MdModeEditOutline />
      </div>
      <div
        className="NoticeRemove"
        onClick={() => {
          onRemove(id);
        }}
      >
        <MdRemoveCircleOutline />
      </div> */}
    </li>
  );
};

export default NoticeListItem;
