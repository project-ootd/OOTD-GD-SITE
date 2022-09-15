import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { RecoilRoot } from "recoil";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Join from "./Page/Join";
import GoodsList from "./Page/GoodsList";
import DetailPage from "./Page/DetailPage";
import ScrollToTop from "./components/ScrollToTop";
import SearchResultPage from "./Page/SearchResultPage";
import JoinPage from "./Page/JoinPage";
const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/SearchResultPage" element={<SearchResultPage />} />
          <Route path="/" element={<App />} />
          {/* <Route path="/BuyWoman" element={<BuyWoman />} />
          <Route path="/BuyWoman/:prdId" element={<BuyWoman />} /> */}

          <Route path="/DetailPage" element={<DetailPage />} />
          <Route path="/GoodsList" element={<GoodsList />} />
          <Route path="/GoodsList/:number" element={<GoodsList />} />
          <Route path="/Join" element={<Join />} />
          <Route path="/JoinPage" element={<JoinPage />} />
        </Routes>
        <ScrollToTop /> {/* 화면 전환시 맨 위에서 시작 */}
      </BrowserRouter>
    </RecoilRoot>
  </React.StrictMode>
);
