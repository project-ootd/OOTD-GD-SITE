import React from "react";
import "../styles/Topbar.scss";
import { Link } from "react-router-dom";
import Login from "./Login";
import { BsEye } from "react-icons/bs";

const Topbar = () => {
  return (
    <div class="top-bar">
      <link
        rel="stylesheet"
        href="https://cdLinkjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css"
      />
      <header>
        <h1>
          <div>
            <Link to="/">
              <BsEye />{" "}
            </Link>{" "}
            <Link to="/">OOTD</Link>
          </div>
        </h1>
        <nav className="top-bar">
          <div className="menu-box-1">
            <ul>
              <li>
                <Link to="/MGDP">MAN</Link>
                <ul>
                  <li>
                    <Link to="#">SUMMER</Link>
                    <ul>
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
                <Link to="/WGDP">WOMAN</Link>
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
                <Link to="/KGDP">KIDS</Link>
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
                <Link to="/">ACCESSOLY</Link>
                <ul>
                  <li>
                    <Link to="#">RING</Link>
                    <ul>
                      <li>
                        <Link to="#">GOLD</Link>
                      </li>
                      <li>
                        <Link to="#">DIAMOND</Link>
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
        <Login />
      </header>
    </div>
  );
};

export default Topbar;
