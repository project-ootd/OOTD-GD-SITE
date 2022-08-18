import React, { useState } from "react";
import Join from "./Page/Join";
import axios from "axios";

import Topbar from "./components/Topbar";
import Footer from "./components/Footer";

import NewmainPG from "./components/NewmainPG";

function App() {
  const [user, setUser] = useState([]);

  const join = async (id, pw, name) => {
    const data = await axios({
      url: `http://localhost:4000/test1`,
      method: "POST",
      data: {
        id,
        pw,
        name,
      },
    });
    setUser(data.data);
  };

  return (
    <div>
      <Topbar />

      <NewmainPG />

      <Join join={join} />

      <Footer />
    </div>
  );
}

export default App;
