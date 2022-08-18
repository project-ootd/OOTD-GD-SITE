import React, { useState, useEffect } from "react";
import axios from "axios";

import Join from "./components/Join";
import Topbar from "./components/Topbar";
import Footer from "./components/Footer";

import NewmainPG from "./components/NewmainPG";

function App() {
  useEffect(() => {
    const getData = async () => {
      const data = await axios({
        url: `http://localhost:4000/test1`,
        method: "GET",
      });
      console.log(data.data);
    };
    getData();
  }, []);

  return (
    <div>
      <Topbar />

      <NewmainPG />

      <Footer />
    </div>
  );
}

export default App;
