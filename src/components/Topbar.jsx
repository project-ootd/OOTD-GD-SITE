import React from "react";
import "../styles/Topbar.scss";
import { Link } from "react-router-dom";
import Login from "./Login";
const Topbar = () => {
  return (
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
      <Login />
    </header>
  );
};

export default Topbar;
