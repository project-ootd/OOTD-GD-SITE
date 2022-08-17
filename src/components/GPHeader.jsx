import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "../styles/GP/GPHeader.scss";
import { Link } from "react-router-dom";
const GPHeader = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await axios({
        url: `http://localhost:4000/Login`,
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
        ? user.passwor === pw
          ? alert("로그인 성공")
          : alert("비밀번호 오류")
        : alert("아이디 오류")
    );
  };

  return (
    <header>
      <h1>
        <Link to="">OOTD</Link>
      </h1>
      <nav className="top-bar">
        <ul>
          <li>
            <Link to="">Man</Link>
            <ul>
              <li>
                <Link to="">Summer</Link>
                <ul>
                  <li>
                    <Link to="">Shirts</Link>
                  </li>
                  <li>
                    <Link to="">Pants</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="">Winter</Link>
                <ul>
                  <li>
                    <Link to="">Shirts</Link>
                  </li>
                  <li>
                    <Link to="">Pants</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <Link to="WGDP">Woman</Link>
            <ul>
              <li>
                <Link to="">Summer</Link>
                <ul>
                  <li>
                    <Link to="">Shirts</Link>
                  </li>
                  <li>
                    <Link to="">Pants</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="">Winter</Link>
                <ul>
                  <li>
                    <Link to="">Shirts</Link>
                  </li>
                  <li>
                    <Link to="">Pants</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <Link to="">Kids</Link>
            <ul>
              <li>
                <Link to="">Summer</Link>
                <ul>
                  <li>
                    <Link to="">Shirts</Link>
                  </li>
                  <li>
                    <Link to="">Pants</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="">Winter</Link>
                <ul>
                  <li>
                    <Link to="">Shirts</Link>
                  </li>
                  <li>
                    <Link to="">Pants</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <Link to="">Accessory</Link>
            <ul>
              <li>
                <Link to="">Ring</Link>
                <ul>
                  <li>
                    <Link to="">Gold</Link>
                  </li>
                  <li>
                    <Link to="">Diamond</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="">Necklace</Link>
                <ul>
                  <li>
                    <Link to="">Gold</Link>
                  </li>
                  <li>
                    <Link to="">Diamond</Link>
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
