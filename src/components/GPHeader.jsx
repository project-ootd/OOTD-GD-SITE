import React from "react";
import  ReactDOM  from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "../styles/GP/GPHeader.scss";
const GPHeader = () => {
    return (

      <header>
        <h1><a href="#">OOTD</a></h1>
        <nav className="top-bar">
          <ul>
            <li><a href="#">Man</a>
              <ul>
                <li><a href="#">Summer</a>
                  <ul>
                    <li><a href="#">Shirts</a></li>
                    <li><a href="#">Pants</a></li>
                  </ul>
                </li>
                <li><a href="#">Winter</a>
                  <ul>
                    <li><a href="#">Shirts</a></li>
                    <li><a href="#">Pants</a></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li><a href="#">Woman</a>
              <ul>
                <li><a href="#">Summer</a>
                  <ul>
                    <li><a href="#">Shirts</a></li>
                    <li><a href="#">Pants</a></li>
                  </ul>
                </li>
                <li><a href="#">Winter</a>
                  <ul>
                    <li><a href="#">Shirts</a></li>
                    <li><a href="#">Pants</a></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li><a href="#">Kids</a>
              <ul>
                <li><a href="#">Summer</a>
                  <ul>
                    <li><a href="#">Shirts</a></li>
                    <li><a href="#">Pants</a></li>
                  </ul>
                </li>
                <li><a href="#">Winter</a>
                  <ul>
                    <li><a href="#">Shirts</a></li>
                    <li><a href="#">Pants</a></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li><a href="#">Accessory</a>
              <ul>
                <li><a href="#">Ring</a>
                  <ul>
                    <li><a href="#">Gold</a></li>
                    <li><a href="#">Diamond</a></li>
                  </ul>
                </li>
                <li><a href="#">Necklace</a>
                  <ul>
                    <li><a href="#">Gold</a></li>
                    <li><a href="#">Diamond</a></li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        {/*  로그인/회원가입 버튼  */}
        <nav className="buttons">
          <input type="text" placeholder="ID" style={{width: '100px', height: '20px'}} maxLength={14} />
          <input type="password" placeholder="Password" style={{width: '100px', height: '20px'}} maxLength={16} />
          <button>Login</button>
          <button>Sign in</button>
        </nav>
      </header>
    );
  };

export default GPHeader;