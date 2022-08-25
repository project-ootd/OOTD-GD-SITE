import React, { useState } from "react";
import "tailwindcss/tailwind.css";
// import Join from "./Page/Join";
// import axios from "axios";

import Topbar from "./components/Topbar";
import MainPG from "./components/MainPG";
import Footer from "./components/Footer";
import Popup from "./components/Pop-up";

function App() {
  return (
    <div>
      <Topbar />

      <MainPG />

      <Footer />

      {/* <Topbar />
      <MainPG /> */}

      {/* <Buy /> */}
      {/* 
      <Popup />

      <Footer /> */}

      <Popup />
    </div>
  );
}

export default App;
