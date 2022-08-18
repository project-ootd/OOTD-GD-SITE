import axios from "axios";
import React, { useState } from "react";
import "../styles/Join.scss";

const Join = ({ Join }) => {
  const [id, setJoinId] = useState("");
  const [pw, setJoinPw] = useState("");
  const [name, setJoinName] = useState("");

  const joinIdChange = (e) => {
    setJoinId(e.target.value);
  };

  const joinPwChange = (e) => {
    setJoinPw(e.target.value);
  };

  const joinNameChange = (e) => {
    setJoinName(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setJoinId("");
    setJoinPw("");
    setJoinName("");
    Join(id, pw, name);
  };

  return (
    <div>
      <h1>회원가입</h1>

      <form name="joinForm" onSubmit={onSubmit}>
        <input
          type="text"
          name="id"
          value={id}
          onChange={joinIdChange}
          placeholder="아이디를 입력하세요"
        />
        <input
          type="text"
          name="pw"
          value={pw}
          onChange={joinPwChange}
          placeholder="비밀번호를 입력하세요"
        />
        <input
          type="text"
          name="name"
          value={name}
          onChange={joinNameChange}
          placeholder="이름을 입력하세요"
        />
        <button>회원가입</button>
      </form>
    </div>
  );
};

export default Join;
