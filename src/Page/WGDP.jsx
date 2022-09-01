import React, { useEffect, useState } from "react";
import axios from "axios";
import Woman from "../components/Woman";
import Man from "../components/Man";
import Topbar from "../components/Topbar";
import Footer from "../components/Footer";
import { useLocation, useParams } from "react-router-dom";
import Kids from "../components/Kids";

const WGDP = () => {
  const location = useLocation();
  const params = useParams();
  console.log("params", params.number);
  const prdno = params.number;
  // console.log("location", location.state);
  // const prdno = location.state.prdNo;
  // console.log("prdno123", prdno);
  const [wprd, setWprd] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const data = await axios({
        url: `http://localhost:4000/prdlist`,
        method: "POST",
        data: { prdno },
      });

      setWprd(data.data);
      setIsLoading(false);
    };
    getData();
  }, [prdno]);

  if (isLoading) {
    return <>Loading...</>;
  }

  return (
    <>
      <Topbar prd={wprd} />
      {prdno === "M" ? (
        <Man prd={wprd} />
      ) : prdno === "W" ? (
        <Woman prd={wprd} />
      ) : prdno === "K" ? (
        <Kids prd={wprd} />
      ) : (
        <Man prd={wprd} />
      )}
      {/* <Woman prd={wprd} /> */}
      <Footer />
    </>
  );
};
export default WGDP;
