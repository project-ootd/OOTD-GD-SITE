import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import App from "./App";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Test1 from "./components/Test1";
import Sub_detail from "./components/Sub_detail";
import WGDP from "./components/WGDP";

const root = createRoot(document.getElementById("root"));
setInterval(() => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/Test1" element={<Test1 />} />
          <Route path="/Sub_detail" element={<Sub_detail />} />
          <Route path ="/WGDP" element={<WGDP />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}, 1000);
