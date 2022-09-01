import React, { useEffect, useState } from "react";
import axios from "axios";
import Man from "../components/Man";
import Topbar from "../components/Topbar";
import Footer from "../components/Footer";

const MGDP = () => {
  const [prd, setPrd] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await axios({
        url: `http://localhost:4000/test2`,
        method: "GET",
      });
      // console.log("data", data.data);
      setPrd(data.data);
      // console.log(prd[2].prdName);
    };
    getData();
  }, []);

  return (
    <>
      <Topbar />
      <Man prd={prd} />
      <Footer />
    </>
  );
};
export default MGDP;
