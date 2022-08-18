import React from "react";
import "../styles/Topbar.scss";
const Topbar = () => {
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css"
      />
      <header>
        <h1>
          <i className="fa-regular fa-eye">&nbsp; OOTD</i>
        </h1>
        <nav className="top-bar">
          <div className="menu-box-1">
            <ul>
              <li>
                <a href="#">MAN</a>
                <ul>
                  <li>
                    <a href="#">SUMMER</a>
                    <ul>
                      <li>
                        <a href="#">TOP</a>
                      </li>
                      <li>
                        <a href="#">BOTTOM</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">WINTER</a>
                    <ul>
                      <li>
                        <a href="#">TOP</a>
                      </li>
                      <li>
                        <a href="#">BOTTOM</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">WOMAN</a>
                <ul>
                  <li>
                    <a href="#">SUMMER</a>
                    <ul>
                      <li>
                        <a href="#">TOP</a>
                      </li>
                      <li>
                        <a href="#">BOTTOM</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">WINTER</a>
                    <ul>
                      <li>
                        <a href="#">TOP</a>
                      </li>
                      <li>
                        <a href="#">BOTTOM</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">KIDS</a>
                <ul>
                  <li>
                    <a href="#">SUMMER</a>
                    <ul>
                      <li>
                        <a href="#">TOP</a>
                      </li>
                      <li>
                        <a href="#">BOTTOM</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">WINTER</a>
                    <ul>
                      <li>
                        <a href="#">TOP</a>
                      </li>
                      <li>
                        <a href="#">BOTTOM</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">ACCESSORY</a>
                <ul>
                  <li>
                    <a href="#">RING</a>
                    <ul>
                      <li>
                        <a href="#">GOLD</a>
                      </li>
                      <li>
                        <a href="#">DIAMOND</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">NECKLACE</a>
                    <ul>
                      <li>
                        <a href="#">GOLD</a>
                      </li>
                      <li>
                        <a href="#">DIAMOND</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
        <nav className="login">
          <input
            type="text"
            style={{ width: "100px", height: "20px" }}
            placeholder="ID"
          />
          <input
            type="password"
            style={{ width: "100px", height: "20px" }}
            placeholder="Password"
          />
          <button>Login</button>
          <button>Sign in</button>
        </nav>
      </header>
    </div>
  );
};

export default Topbar;
