import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Topbar from "../components/Topbar";
import SubDetailKids from "../sub_detail/SubDetailKids";
import axios from "axios";

const KSBP = () => {
  const [prdName, SetprdName] = useState("");
  const [prdEname, SetPrdEname] = useState("");
  const [prdImg, SetImg] = useState("");
  const [prdPrice, SetprdPrice] = useState("");
  useEffect(() => {
    const getData = async () => {
      const data = await axios({
        url: `http://localhost:4000/`,
      });
    };
  });

  return (
    <div>
      <Topbar />
      <SubDetailKids
        prdName={prdName}
        prdImg={prdImg}
        prdEname={prdEname}
        prdPrice={prdPrice}
      />
      <Footer />
    </div>
  );
};

export default KSBP;
