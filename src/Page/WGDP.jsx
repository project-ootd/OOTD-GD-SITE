import React, { useEffect, useState } from "react";
import App from "../App";
import axios from "axios";
import Woman from "../components/Woman";
import Topbar from "../components/Topbar";
import Footer from "../components/Footer";

const WGDP = () => {
  const [prd, setPrd] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await axios({
        url: `http://localhost:4000/test2`,
        method: "GET",
      });
      console.log("data", data.data);
      setPrd(data.data);
      // console.log(prd[2].prdName);
    };
    getData();
  }, []);

  return (
    <>
      <Topbar />
      <Woman prd={prd} />
      <Footer />
    </>
  );
};
export default WGDP;
