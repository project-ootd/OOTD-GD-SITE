import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchAllData from "../components/SearchAllData";
import Topbar from "../components/Topbar";
import Footer from "../components/Footer";
import TestBae from "../TestFile/TestBae";
const SearchPage = () => {
  const [prd, setPrd] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await axios({
        url: `http://localhost:4000/test2`,
        method: "Get",
      });
      console.log("data", data.data);
      setPrd(data.data);
    };
    getData();
  }, []);
  return (
    <div>
      <Topbar />
      <SearchAllData />
      <TestBae />
      <Footer />
    </div>
  );
};

export default SearchPage;
