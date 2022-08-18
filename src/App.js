import React, { useState } from "react";
import Join from "./components/Join";
import axios from "axios";

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
      <NewmainPG />
      <Join join={join} />
    </div>
  );
}

export default App;
