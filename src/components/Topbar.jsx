import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/Topbar.scss";
import Login from "./Login";
import { BsEye } from "react-icons/bs";
import { Link } from "react-router-dom";
// import { Router } from "express";

const Topbar = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [prd, setPrd] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await axios({
        url: `http://localhost:4000/test2`,
        method: "GET",
      });
      setPrd(data.data);
      setIsLoading(false);
    };
    getData();
  }, []);

  if (isLoading) {
    return <>Loading...</>;
  }
  return (
    <div className="top-bar">
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
                <Link to={`/WGDP/M`}>MAN</Link>
                <ul>
                  <li>
                    SUMMER
                    <ul>
                      <li>TOP</li>
                      <li>BOTTOM</li>
                    </ul>
                  </li>
                  <li>
                    WINTER
                    <ul>
                      <li>TOP</li>
                      <li>BOTTOM</li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <Link to={`/WGDP/W`}>WOMAN</Link>
                <ul>
                  <li>
                    SUMMER
                    <ul>
                      <li>TOP</li>
                      <li>BOTTOM</li>
                    </ul>
                  </li>
                  <li>
                    WINTER
                    <ul>
                      <li>TOP</li>
                      <li>BOTTOM</li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <Link to={`/WGDP/K`}>KIDS</Link>
                <ul>
                  <li>
                    SUMMER
                    <ul>
                      <li>TOP</li>
                      <li>BOTTOM</li>
                    </ul>
                  </li>
                  <li>
                    WINTER
                    <ul>
                      <li>TOP</li>
                      <li>BOTTOM</li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/RGDP">ACCESSORY</Link>
                <ul>
                  <li>
                    RING
                    <ul>
                      <li>GOLD</li>
                      <li>DIAMOND</li>
                    </ul>
                  </li>
                  <li>
                    NECKLACE
                    <ul>
                      <li>GOLD</li>
                      <li>DIAMOND</li>
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
