import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Kids from "../components/Kids";
import Topbar from "../components/Topbar";
import axios from "axios";

const KGDP = () => {
  const [prd, setPrd] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await axios({
        url: `http://localhost:4000/KGDP`,
        method: "GET",
      });
      console.log("data", data.data);
      setPrd(data.data);
      // console.log(prd[2].prdName);
    };
    getData();
  }, []);
  return (
    <div>
      <Topbar />
      <Kids prd={prd} />
      <Footer />
    </div>
  );
};

export default KGDP;
