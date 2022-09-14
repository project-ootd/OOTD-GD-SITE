import React from "react";
import NoticeListItem from "./NoticeListItem";
<<<<<<< HEAD
import "../styles/board/NoticeList.scss";
=======
// styles/board/NoticeList";
>>>>>>> 23f3b7bcf61a439ff782bbb3aebeb8cc529caa6b

const NoticeList = ({
  notices,
  onRemove,
  onToggle,
  onInsertToggle,
  setSelectedNotice,
}) => {
  return (
    <ul className="NoticeList">
      {notices.map((Notice, index) => {
        //console.log(`${index}번 Notice `, Notice);
        return (
          <NoticeListItem
            Notice={Notice}
            key={index}
            onRemove={onRemove}
            onToggle={onToggle}
            onInsertToggle={onInsertToggle}
            setSelectedNotice={setSelectedNotice}
          />
        );
      })}
    </ul>
  );
};

export default NoticeList;
