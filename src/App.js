import React, { useState } from "react";
import "tailwindcss/tailwind.css";
import Join from "./Page/Join";
import axios from "axios";

import Topbar from "./components/Topbar";
import NewmainPG from "./components/NewmainPG";
import Footer from "./components/Footer";
import Buy from "./components/Buy";

import Payment from "./components/Payment";
import Popup from "./components/Pop-up";

function App() {
  return (
    <div>
      <Topbar />

      <NewmainPG />
      <Popup />

      <Footer />
    </div>
  );
}

export default App;
