import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import Login from "./Login";
const GPHeader = () => {
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
      <Login />
    </header>
  );
};

export default GPHeader;
