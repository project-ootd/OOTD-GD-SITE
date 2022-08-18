import React from "react";
import "../styles/Topbar.scss";
import { Link } from "react-router-dom";
const Topbar = () => {
  return (
    <div>
      <link
        rel="stylesheet"
        Link
        to="https://cdLinkjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css"
      />
      <header>
        <h1>
          <i className="fa-regular fa-eye">&nbsp; OOTD</i>
        </h1>
        <nav className="top-bar">
          <div className="menu-box-1">
            <ul>
              <li>
                <Link to="#">MAN</Link>
                <ul>
                  <li>
                    <Link to="#">SUMMER</Link>
                    <ul>
                      <li>Link </li>
                      <li>
                        <Link to="#">BOTTOM</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="#">WINTER</Link>
                    <ul>
                      <li>
                        <Link to="#">TOP</Link>
                      </li>
                      <li>
                        <Link to="#">BOTTOM</Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="WGDP">WOMAN</Link>
                <ul>
                  <li>
                    <Link to="#">SUMMER</Link>
                    <ul>
                      <li>
                        <Link to="#">TOP</Link>
                      </li>
                      <li>
                        <Link to="#">BOTTOM</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="#">WINTER</Link>
                    <ul>
                      <li>
                        <Link to="#">TOP</Link>
                      </li>
                      <li>
                        <Link to="#">BOTTOM</Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="#">KIDS</Link>
                <ul>
                  <li>
                    <Link to="#">SUMMER</Link>
                    <ul>
                      <li>
                        <Link to="#">TOP</Link>
                      </li>
                      <li>
                        <Link to="#">BOTTOM</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="#">WINTER</Link>
                    <ul>
                      <li>
                        <Link to="#">TOP</Link>
                      </li>
                      <li>
                        <Link to="#">BOTTOM</Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="#">ACCESSOLY</Link>
                <ul>
                  <li>
                    <Link to="#">RING</Link>
                    <ul>
                      <li>
                        <Link to="#">GOLD</Link>
                      </li>
                      <li>
                        <Link to="#">DIAMOND/</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="#">NECKLACE</Link>
                    <ul>
                      <li>
                        <Link to="#">GOLD</Link>
                      </li>
                      <li>
                        <Link to="#">DIAMOND</Link>
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
