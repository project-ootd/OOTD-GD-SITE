import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/Topbar.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import Login from "./Login";
import { BsEye } from "react-icons/bs";

const Topbar = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [prd, setPrd] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await axios({
        url: `http://localhost:4000/test2`,
        method: "GET",
      });
      // console.log("data", data.data);
      setPrd(data.data);
      setIsLoading(false);
      // console.log(prd[2].prdName);
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
                {/* <Link to="/WGDP" state={{ prd: prd, prdNo: "K" }}> */}
                {/* <Link to="/MGDP"> */}
                <Link to="/WGDP" state={{ prd: prd, prdNo: "M" }}>
                  MAN
                </Link>
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
                {/* {console.log("link", prd)} */}
                {/* <Link
                  to={{
                    pathname: url,
                    state: {
                      prd: prd,
                      prdNo: "W",
                    },
                  }}
                > */}
                <Link to="/WGDP" state={{ prd: prd, prdNo: "W" }}>
                  {/* // <Link to="/WGDP" state={prd}> */}
                  WOMAN
                </Link>
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
                <Link to="/RGDP">ACCESSORY</Link>
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
