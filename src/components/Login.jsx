import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/MainPG.scss";
import { Link } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState([]);
  const [chk, setChk] = useState(false);

  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const idChange = (e) => {
    setId(e.target.value);
  };
  const pwChange = (e) => {
    setPw(e.target.value);
  };

  return (
    <nav className="login">
      {/*  로그인/회원가입 버튼  */}
      <input
        type="text"
        placeholder="id"
        name="id"
        value={id}
        onChange={idChange}
        style={{ width: "100px", height: "20px", color: "black" }}
        maxLength={14}
        autoComplete="off"
      />
      <input
        type="password"
        placeholder="Password"
        name="pw"
        value={pw}
        onChange={pwChange}
        style={{ width: "100px", height: "20px", color: "black" }}
        maxLength={16}
        autoComplete="off"
      />

      <button
        onClick={async () => {
          const data = await axios({
            url: "http://localhost:4000/test1/doLogin",
            method: "POST",
            data: { id, pw },
          });
          console.log(data.data);
          if (data.data === true) {
            alert("로그인 성공");
          } else {
            alert("로그인 실패");
          }
        }}
      >
        Login
      </button>
      <Link to="/Join">
        <button>JOIN</button>
      </Link>
    </nav>
  );
};

export default Login;
