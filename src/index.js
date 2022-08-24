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
<<<<<<< HEAD
import KGDP from "./Page/KGDP";

=======
import Buy_man from "./buy/Buy_man";
>>>>>>> master
const root = createRoot(document.getElementById("root"));

setInterval(() => {
  root.render(
    <React.StrictMode>
<<<<<<< Updated upstream
      <BrowserRouter>
        <Routes>
          <Route path="/KGDP" element={<KGDP />} />
          <Route path="/MGDP" element={<MGDP />} />
          <Route path="/" element={<App />} />
          <Route path="/Test1" element={<Test1 />} />
          <Route path="/Sub_detail_man" element={<Sub_detail_man />} />
          <Route path="/WGDP" element={<WGDP />} />
          <Route path="/Join" element={<Join />} />
          <Route path="/Buy_man" element={<Buy_man />} />
        </Routes>
      </BrowserRouter>
=======
      <RecoilRoot>
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
      </RecoilRoot>
>>>>>>> Stashed changes
    </React.StrictMode>
  );
}, 1000);
