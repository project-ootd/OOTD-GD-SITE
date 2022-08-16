import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Sub_detail from "./components/Sub_detail";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="test1" element={<test1 />} />
      <Route path="Sub_detail" element={<Sub_detail />} />
    </Routes>
    
  </BrowserRouter>
  </React.StrictMode>,
  root
);
