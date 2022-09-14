import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { RecoilRoot } from "recoil";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TestBae from "./TestFile/TestBae";

import Join from "./Page/Join";
import WGDP from "./Page/WGDP";
import WSBP from "./Page/WSBP";
import BuyWoman from "./buy/BuyWoman";
import ScrollToTop from "./components/ScrollToTop";
import SearchPage from "./Page/SearchPage";
const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/TestBae" element={<TestBae />} />
          <Route path="/SearchPage" element={<SearchPage />} />
          <Route path="/" element={<App />} />
          <Route path="/BuyWoman" element={<BuyWoman />} />
          <Route path="/BuyWoman/:prdId" element={<BuyWoman />} />

          <Route path="/WSBP" element={<WSBP />} />
          <Route path="/WGDP" element={<WGDP />} />
          <Route path="/WGDP/:number" element={<WGDP />} />
          <Route path="/Join" element={<Join />} />
        </Routes>
        <ScrollToTop /> {/* 화면 전환시 맨 위에서 시작 */}
      </BrowserRouter>
    </RecoilRoot>
  </React.StrictMode>
);
