import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Topbar from "../components/Topbar";
import SubDetailKids from "../sub_detail/SubDetailKids";
import axios from "axios";

const KSBP = () => {
  const location = useLocation();
  const [prdName, setPrdName] = useState("");
  const [prdEname, setPrdEName] = useState("");
  const [prdImg, setPrdImg] = useState("");
  const [prdPrice, setPrdPrice] = useState("");
  const [prdId, setPrdId] = useState("");

  const getData = async () => {
    const data = await axios({
      url: `http://localhost:4000/`,
      method: "POST",
      data: { prdId },
    });
    setPrdId(location.state.data);
    setPrdName(data.data.prdName);
    setPrdEName(data.data.prdEName);
    setPrdPrice(data.data.prdPrice);
    setPrdImg(data.data.prdImg);
  };

  return (
    <div>
      <Topbar />
      <SubDetailKids
        prdName={prdName}
        prdImg={prdImg}
        prdEname={prdEname}
        prdPrice={prdPrice}
        prdId={prdId}
      />
      <Footer />
    </div>
  );
};

export default KSBP;
