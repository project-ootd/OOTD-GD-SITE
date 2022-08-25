import React, { useState } from "react";
import "tailwindcss/tailwind.css";

import Carousel from "./components/Carousel";
import Topbar from "./components/Topbar";
import MainPG from "./components/MainPG";
import Footer from "./components/Footer";
import Popup from "./components/Pop-up";

function App() {
  return (
    <div>
      <Topbar />
      <MainPG />

      <Popup />
    </div>
  );
}

export default App;
