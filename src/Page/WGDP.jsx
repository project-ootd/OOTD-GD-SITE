import React, { useEffect, useState } from "react";
import axios from "axios";
import Woman from "../components/Woman";
import Topbar from "../components/Topbar";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";

const WGDP = () => {
  const location = useLocation();
  // console.log("location", location.state);
  const prdno = location.state.prdNo;
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
  }, []);

  if (isLoading) {
    return <>Loading...</>;
  }

  return (
    <>
      <Topbar prd={wprd} />
      <Woman prd={wprd} />
      <Footer />
    </>
  );
};
export default WGDP;
