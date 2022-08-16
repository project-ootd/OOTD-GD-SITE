import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "../styles/GP/GPHeader.scss";
const GPHeader = () => {
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
    <header>
      <h1>
        <a href="#">OOTD</a>
      </h1>
      <nav className="top-bar">
        <ul>
          <li>
            <a href="#">Man</a>
            <ul>
              <li>
                <a href="#">Summer</a>
                <ul>
                  <li>
                    <a href="#">Shirts</a>
                  </li>
                  <li>
                    <a href="#">Pants</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Winter</a>
                <ul>
                  <li>
                    <a href="#">Shirts</a>
                  </li>
                  <li>
                    <a href="#">Pants</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Woman</a>
            <ul>
              <li>
                <a href="#">Summer</a>
                <ul>
                  <li>
                    <a href="#">Shirts</a>
                  </li>
                  <li>
                    <a href="#">Pants</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Winter</a>
                <ul>
                  <li>
                    <a href="#">Shirts</a>
                  </li>
                  <li>
                    <a href="#">Pants</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Kids</a>
            <ul>
              <li>
                <a href="#">Summer</a>
                <ul>
                  <li>
                    <a href="#">Shirts</a>
                  </li>
                  <li>
                    <a href="#">Pants</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Winter</a>
                <ul>
                  <li>
                    <a href="#">Shirts</a>
                  </li>
                  <li>
                    <a href="#">Pants</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Accessory</a>
            <ul>
              <li>
                <a href="#">Ring</a>
                <ul>
                  <li>
                    <a href="#">Gold</a>
                  </li>
                  <li>
                    <a href="#">Diamond</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Necklace</a>
                <ul>
                  <li>
                    <a href="#">Gold</a>
                  </li>
                  <li>
                    <a href="#">Diamond</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      {/*  로그인/회원가입 버튼  */}
      <nav className="buttons">
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
        <button>Sign in</button>
      </nav>
    </header>
  );
};

export default GPHeader;
