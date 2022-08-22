import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import App from "./App";

import { render } from "react-dom";

// import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Test1 from "./TestFile/TestBae";
import Sub_detail from "./components/Sub_detail";
import Join from "./Page/Join";
import WGDP from "./Page/WGDP";
import MGDP from "./Page/MGDP";
const root = createRoot(document.getElementById("root"));

setInterval(() => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/MGDP" element={<MGDP />} />
          <Route path="/" element={<App />} />
          <Route path="/Test1" element={<Test1 />} />
          <Route path="/Sub_detail" element={<Sub_detail />} />
          <Route path="/WGDP" element={<WGDP />} />
          <Route path="/Join" element={<Join />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}, 1000);
