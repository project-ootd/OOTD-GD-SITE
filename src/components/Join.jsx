import axios from "axios";
import React, { useState } from "react";
import "../styles/Join.scss";

const Join = () => {
  const [id, setJoinId] = useState("");
  const [pw, setJoinPw] = useState("");
  const [name, setJoinName] = useState("");

  const [user, setUser] = useState([]);

  const joinbtn = async () => {
    const data = await axios({
      url: `http://localhost:4000/test1`,
      method: "POST",
      data: {
        id,
        pw,
        name,
      },
    });
    setUser(id, pw, name);
    console.log("data : " + id, pw, name);
  };

  const joinIdChange = (e) => {
    setJoinId(e.target.value);
  };

  const joinPwChange = (e) => {
    setJoinPw(e.target.value);
  };

  const joinNameChange = (e) => {
    setJoinName(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setJoinId("");
    setJoinPw("");
    setJoinName("");
    console.log("onsubmit : " + id, pw, name);
    setUser(id, pw, name);
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
        <button type="submit" onClick={joinbtn}>
          회원가입
        </button>
      </form>
    </div>
  );
};

export default Join;
