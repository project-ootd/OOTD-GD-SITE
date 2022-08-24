import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import App from "./App";
import { RecoilRoot } from "recoil";

import { render } from "react-dom";

// import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Test1 from "./TestFile/TestBae";
import Sub_detail_man from "./sub_detail/Sub_detail_man";
import Join from "./Page/Join";
import WGDP from "./Page/WGDP";
import MGDP from "./Page/MGDP";
import RGDP from "./Page/RGDP";

import KGDP from "./Page/KGDP";

import Buy_man from "./buy/Buy_man";

const root = createRoot(document.getElementById("root"));

setInterval(() => {
  root.render(
    <React.StrictMode>
      <RecoilRoot>
        <BrowserRouter>
          <Routes>
            <Route path="/RGDP" element={<RGDP />} />
            <Route path="/KGDP" element={<KGDP />} />
            <Route path="/Buy_man" element={<Buy_man />} />
            <Route path="/MGDP" element={<MGDP />} />
            <Route path="/" element={<App />} />
            <Route path="/Test1" element={<Test1 />} />
            <Route path="/Sub_detail_man" element={<Sub_detail_man />} />
            <Route path="/WGDP" element={<WGDP />} />
            <Route path="/Join" element={<Join />} />
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </React.StrictMode>
  );
}, 1000);
