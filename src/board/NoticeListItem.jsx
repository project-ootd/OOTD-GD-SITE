import React from "react";
import {
  MdCheckBoxOutlineBlank,
  MdRemoveCircleOutline,
  MdCheckBox,
  MdModeEditOutline,
} from "react-icons/md";
import cn from "classnames";
<<<<<<< HEAD
import "../styles/board/NoticeListItem.scss";
=======
// styles/board/NoticeListItem";
>>>>>>> 23f3b7bcf61a439ff782bbb3aebeb8cc529caa6b

const NoticeListItem = ({
  Notice,
  onRemove,
  onToggle,
  onInsertToggle,
  setSelectedNotice,
}) => {
  const { id, text, checked } = Notice;
  //console.log(`${id}번 NoticelistItem에서 Notice를 출력함`, Notice);
  return (
    <li className="NoticeListItem">
      <div
        className={cn("checkbox", { checked: checked })}
        onClick={() => {
          onToggle(id);
        }}
      >
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
<<<<<<< HEAD
        <div className="text">{text}</div>
      </div>
      <div
=======
      </div>
      <div className="NoticeNumber">{id}</div>
      <div className="text">{text}</div>
      {/* <div
>>>>>>> 23f3b7bcf61a439ff782bbb3aebeb8cc529caa6b
        className="edit"
        onClick={() => {
          onInsertToggle();
          setSelectedNotice((prev) => Notice);
        }}
      >
        <MdModeEditOutline />
      </div>
      <div
        className="remove"
        onClick={() => {
          onRemove(id);
        }}
      >
        <MdRemoveCircleOutline />
<<<<<<< HEAD
      </div>
=======
      </div> */}
      <div className="NoticeListDate"></div>
>>>>>>> 23f3b7bcf61a439ff782bbb3aebeb8cc529caa6b
    </li>
  );
};

export default NoticeListItem;
