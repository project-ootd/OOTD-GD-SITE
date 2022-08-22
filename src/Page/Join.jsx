import axios from "axios";
import React, { useState } from "react";
import Topbar from "../components/Topbar";
import "../styles/Join.scss";
import { Button } from "react-daisyui";

const Join = (args) => {
  const [id, setJoinId] = useState("");
  const [pw, setJoinPw] = useState("");
  const [name, setJoinName] = useState("");

  const [user, setUser] = useState([]);

  const joinbtn = async () => {
    if (id.length == 0) {
      alert("아이디 없음");
      return;
    }
    if (pw.length == 0) {
      alert("비번 없음");
      return;
    }
    if (name.length == 0) {
      alert("이름 없음");
      return;
    }
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
    alert("회원가입 성공!");
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
    setUser(id, pw, name);
  };

  return (
    <div>
      <Topbar />
      <h1>회원가입</h1>

      <form name="joinForm" className="joinForm" onSubmit={onSubmit}>
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
        <button class="btn btn-secondary" type="submit" onClick={joinbtn}>
          회원가입
        </button>
        {/* <button className="btn" type="submit" onClick={joinbtn}>
          회원가입
        </button> */}
      </form>
    </div>
  );
};

export default Join;
