import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import NoticeEdit from "./NoticeEdit";
import NoticeInsert from "./NoticeInsert";
import NoticeList from "./NoticeList";
import NoticeTemplate from "./NoticeTemplate";

const NoticeBoard = () => {
  const [notice, setNotice] = useState([]);
  const [insertToggle, setInsertToggle] = useState(false);
  const [selectedNotice, setSelectedNotice] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const nextId = useRef(4);

  const onInsert = async (text) => {
    const data = await axios.post(`http://localhost:4000/notice/`, { text });
    setNotice(data.data);
    // setNotice((notice) => notice.concat(todo));

    nextId.current++;
  };

  const onInsertToggle = () => {
    setInsertToggle((prev) => !prev);
  };

  const onRemove = async (id) => {
    // setNotice((notice) => notice.filter((todo) => todo.id !== id));
    try {
      await axios({
        url: `http://localhost:4000/notice/${id}`,
        method: "DELETE",
      });
      const data = await axios({
        url: `http://localhost:4000/notice`,
        method: "GET",
      });
      setNotice(data.data);
    } catch (e) {
      setError(e);
    }
  };

  const onToggle = async (id) => {
    try {
      const data = await axios({
        url: `http://localhost:4000/notice/check/${id}`,
        method: "PATCH",
      });
      setNotice(data.data);
    } catch (e) {
      setError(e);
    }
  };

  const onUpdate = async (id, text) => {
    // setNotice((notice) =>
    //   notice.map((todo) => (todo.id === id ? { ...todo, text } : todo))
    // );
    try {
      const data = await axios({
        url: `http://localhost:4000/notice/${id}`,
        method: "PATCH",
        data: {
          text,
          perform_date: "2022-08-09 11:11:11",
        },
      });
      setNotice(data.data);
    } catch (e) {
      setError(e);
    }
    onInsertToggle();
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await axios({
          url: "http://localhost:4000/notice",
          method: "GET",
        });

        setNotice(data.data);

        setIsLoading(false);
        // throw new Error("조회중 에러발생!!");
        // await new Promise((resolve, reject) => {
        //   setTimeout(() => {
        //     resolve()
        //   }, 3000)
        // })
      } catch (e) {
        setError(e);
      }
    };

    getData();
  }, []);

  if (error) {
    return <>에러: {error.message}</>;
  }

  if (isLoading) {
    return <>Loading...</>;
  }

  return (
    <NoticeTemplate>
      {/* <NoticeInsert onInsert={onInsert} /> */}
      <NoticeList
        notice={notice}
        onRemove={onRemove}
        onToggle={onToggle}
        onInsertToggle={onInsertToggle}
        setSelectedNotice={setSelectedNotice}
      />
      {insertToggle && (
        <NoticeEdit
          onInsertToggle={onInsertToggle}
          selectedNotice={selectedNotice}
          onUpdate={onUpdate}
        />
      )}
    </NoticeTemplate>
  );
};

export default NoticeBoard;
