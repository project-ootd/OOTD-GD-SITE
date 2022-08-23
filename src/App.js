import React, { useState } from "react";
import "tailwindcss/tailwind.css";
import Join from "./Page/Join";
import axios from "axios";

import Topbar from "./components/Topbar";
import MainPG from "./components/MainPG";
import Footer from "./components/Footer";
import Buy_man from "./buy/Buy_man";
import MGDP from "./Page/MGDP";

import Payment from "./components/Payment";
import Popup from "./components/Pop-up";
import Sub_detail_man from "./sub_detail/Sub_detail_man";

function App() {
  return (
    <div>
      <Topbar />
      {/* <Sub_detail /> */}

      <MainPG />

      <Footer />
    </div>
  );
}

export default App;
