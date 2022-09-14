import React, { useState } from "react";
import { MdAdd } from "react-icons/md";
<<<<<<< HEAD
import "../styles/board/NoticeInsert.scss";
=======
>>>>>>> 23f3b7bcf61a439ff782bbb3aebeb8cc529caa6b

const NoticeInsert = ({ onInsert }) => {
  const [value, setValue] = useState("");
  const onChange = (e) => {
    setValue(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setValue("");
    onInsert(value);
  };

  return (
    <form className="NoticeInsert" onSubmit={onSubmit}>
      <input
        onChange={onChange}
        value={value}
        placeholder="할 일을 입력하세요"
      />
<<<<<<< HEAD
      <button type="submit">
=======
      <button className="Insert-button" type="submit">
>>>>>>> 23f3b7bcf61a439ff782bbb3aebeb8cc529caa6b
        <MdAdd />
      </button>
    </form>
  );
};

export default NoticeInsert;
