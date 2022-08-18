import React, { useEffect, useState } from "react";
import "../styles/subscss/TestBae.scss";
import axios from "axios";

import { Link } from "react-router-dom";

const Test1 = ({ children }) => {
  const [item, setItem] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await axios({
          url: "http://localhost:4000/Test1",
          method: "GET",
        });
        setItem(data.data);
        console.log(data.data);
      } catch (e) {
        setError(e);
      }
    };

    getData();
  }, []);
  return (
    <div>
      <h1>test1</h1>
      <div className="ts-box">
        {item.map((item, index) => (
          <div key={index}>
            <input type="text" value={item.id} disabled className="box" />
            <input type="text" value={item.price} className="box" disabled />
          </div>
        ))}
      </div>

      <div>{children}</div>
    </div>
  );
};

export default Test1;
