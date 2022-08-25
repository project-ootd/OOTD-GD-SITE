import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import App from "./App";
import { RecoilRoot } from "recoil";

// import { render } from "react-dom";

// import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Test1 from "./TestFile/TestBae";
import SubDetailMan from "./sub_detail/SubDetailMan";
import Join from "./Page/Join";
import WGDP from "./Page/WGDP";
import MGDP from "./Page/MGDP";
import RGDP from "./Page/RGDP";
import WSBP from "./Page/WSBP";
import KSBP from "./Page/KSBP";
import KGDP from "./Page/KGDP";
import BuyWoman from "./buy/BuyWoman";
import BuyKids from "./buy/BuyKids";
import BuyMan from "./buy/BuyMan";
import Carousel from "./components/Carousel";

const root = createRoot(document.getElementById("root"));

setInterval(() => {
  root.render(
    <React.StrictMode>
      <RecoilRoot>
        <BrowserRouter>
          <Routes>
            <Route path="/RGDP" element={<RGDP />} />
            <Route path="/KGDP" element={<KGDP />} />
            <Route path="/BuyMan" element={<BuyMan />} />
            <Route path="/BuyWoman" element={<BuyWoman />} />
            <Route path="/BuyKids" element={<BuyKids />} />
            <Route path="/MGDP" element={<MGDP />} />
            <Route path="/" element={<App />} />
            <Route path="/Test1" element={<Test1 />} />
            <Route path="/SubDetailMan" element={<SubDetailMan />} />
            <Route path="/KSBP" element={<KSBP />} />
            <Route path="/WSBP" element={<WSBP />} />
            <Route path="/WGDP" element={<WGDP />} />
            <Route path="/Join" element={<Join />} />
            <Route path="/Carousel" element={<Carousel />} />
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </React.StrictMode>
  );
}, 1000);
