import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Test1 = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await axios({
        url: `http://localhost:4000/test1`,
        method: "GET",
      });
      setUser(data.data);
      console.log(data);
    };
    getData();
  }, []);

  return (
    <div>
      <h1>test1</h1>
    </div>
  );
};

export default Test1;
