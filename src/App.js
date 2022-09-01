import React, { useEffect, useState } from "react";
import axios from "axios";
import "tailwindcss/tailwind.css";
import { useParams } from "react-router-dom";
import Topbar from "./components/Topbar";
import MainPG from "./components/MainPG";
import Footer from "./components/Footer";
import Popup from "./components/Pop-up";
import AnnouncePost from "./board/NoticePost";
import AnnounceBoard from "./board/NoticeBoard";

// WGDP 페이지 prdno 에러
// Woman 페이지 state 배열로 못 넣는지 물어보기

function App() {
<<<<<<< Updated upstream
  let { params } = useParams();
  const [prd, setPrd] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const getData = async () => {
      const data = await axios({
        url: `http://localhost:4000/test2`,
        method: "GET",
      });
      // console.log("data", data.data);
      setPrd(data.data);
      setIsLoading(false);
      // console.log(prd[2].prdName);
    };
    getData();
  }, []);

  if (isLoading) {
    return <>Loading...</>;
  }

=======
>>>>>>> Stashed changes
  return (
    <div>
      <Topbar prd={prd} />

      <MainPG />
      <Popup />

      <Footer />
    </div>
  );
}

export default App;
