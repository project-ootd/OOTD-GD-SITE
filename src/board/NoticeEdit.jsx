import React, { useEffect, useState } from "react";

<<<<<<< HEAD
import "../styles/board/NoticeEdit.scss";

const NoticeEdit = ({ selectedNotice, onUpdate, onInsertToggle }) => {
  const [value, setValue] = useState("");
  const onChange = (e) => {
    setValue(e.target.value);
  };
=======
// styles/board/NoticeEdit";

const NoticeEdit = ({ selectedNotice, onUpdate, onInsertToggle }) => {
  const [value, setValue] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
  };

>>>>>>> 23f3b7bcf61a439ff782bbb3aebeb8cc529caa6b
  const onSubmit = (e) => {
    e.preventDefault();
    onUpdate(selectedNotice.id, value);
    setValue("");
  };
<<<<<<< HEAD
=======

>>>>>>> 23f3b7bcf61a439ff782bbb3aebeb8cc529caa6b
  useEffect(() => {
    setValue(selectedNotice.text);
  }, [selectedNotice]);

  return (
    <div
      className="background"
      onClick={(e) => {
        if (e.target !== e.currentTarget) return;
        onInsertToggle();
      }}
    >
<<<<<<< HEAD
      <form onSubmit={onSubmit} className="todoedit__insert">
=======
      <form onSubmit={onSubmit} className="noticeedit__insert">
>>>>>>> 23f3b7bcf61a439ff782bbb3aebeb8cc529caa6b
        <h2>수정하기</h2>
        <input
          onChange={onChange}
          value={value}
          placeholder="할 일을 입력하세요"
        />
        <button type="submit">수정하기</button>
      </form>
    </div>
  );
};

export default NoticeEdit;
