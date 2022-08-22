import React, { useState } from "react";
import "tailwindcss/tailwind.css";
import Join from "./Page/Join";
import axios from "axios";

import Topbar from "./components/Topbar";
import MainPG from "./components/MainPG";
import Footer from "./components/Footer";
import Buy from "./components/Buy";
import MGDP from "./Page/MGDP";

import Payment from "./components/Payment";

function App() {
  return (
    <div>
      <Topbar />
      <MainPG />
      {/* <Buy /> */}
      <Footer />
    </div>
  );
}

export default App;
