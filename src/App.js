import React, { useState } from "react";
import Join from "./Page/Join";
import axios from "axios";

import Topbar from "./components/Topbar";
import Footer from "./components/Footer";
import TestChoi from "./TestFile/TestChoi";

import NewmainPG from "./components/NewmainPG";

function App() {
  return (
    <div>
      <Topbar />

      <TestChoi />
      {/* <NewmainPG /> */}

      <Footer />
    </div>
  );
}

export default App;
