import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../styles/NewmainPG.scss";

const Login = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await axios({
        url: `http://localhost:4000/test1`,
        method: "GET",
      });
      setUser(data.data);
      console.log(data.data);
    };
    getData();
  }, []);

  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const idChange = (e) => {
    setId(e.target.value);
  };
  const pwChange = (e) => {
    setPw(e.target.value);
  };

  const loginBtn = () => {
    user.map((user) =>
      user.id === id
        ? user.pw === pw
          ? alert("로그인 성공")
          : alert("비밀번호 오류")
        : alert("아이디 오류")
    );
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
        style={{ width: "100px", height: "20px" }}
        maxLength={14}
        autoComplete="off"
      />
      <input
        type="password"
        placeholder="Password"
        name="pw"
        value={pw}
        onChange={pwChange}
        style={{ width: "100px", height: "20px" }}
        maxLength={16}
        autoComplete="off"
      />

      <button onClick={loginBtn}>Login</button>
      <Link to="/Join">
        <button>Sign in</button>
      </Link>
    </nav>
  );
};

export default Login;
