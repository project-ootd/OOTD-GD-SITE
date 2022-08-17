import React, { useState } from "react";
import "../styles/Join.scss";

const Join = () => {
  const [joinId, setJoinId] = useState("");
  const [joinPw, setJoinPw] = useState("");
  const [joinName, setJoinName] = useState("");

  const joinIdChange = (e) => {
    setJoinId(e.target.value);
  };

  const joinPwChange = (e) => {
    setJoinPw(e.target.value);
  };

  const joinNameChange = (e) => {
    setJoinPw(e.target.value);
  };

  const join = () => {};

  return (
    <div>
      <h1>회원가입</h1>

      <form name="joinForm">
        <input
          type="text"
          name="joinId"
          value={joinId}
          onChange={joinIdChange}
          placeholder="아이디를 입력하세요"
        />
        <input
          type="text"
          name="joinPw"
          value={joinPw}
          onChange={joinPwChange}
          placeholder="비밀번호를 입력하세요"
        />
        <input
          type="text"
          name="name"
          value={joinName}
          onChange={joinNameChange}
          placeholder="이름을 입력하세요"
        />
        <button onClick={join}>회원가입</button>
      </form>
    </div>
  );
};

export default Join;
