import React from "react";
import "tailwindcss/tailwind.css";

import Carousel from "./components/Carousel";
import Topbar from "./components/Topbar";
import MainPG from "./components/MainPG";
import Footer from "./components/Footer";
import Popup from "./components/Pop-up";

function App() {
  console.log("test");
  return (
    <div>
      <Topbar />
      <MainPG />

      <Footer />

      <Popup />
    </div>
  );
}

export default App;
