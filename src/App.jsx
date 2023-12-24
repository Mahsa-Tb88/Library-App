import React, { useEffect, useState } from "react";
import "./App.css";
import Filter from "./Components/Filter/Filter";
import ListBook from "./Components/ListBook/ListBook";
import axios from "axios";
export default function App() {
  const [search, setSearch] = useState("");
  const [mount, setMount] = useState(false);
  const [bookList, setBookList] = useState([]);
  const [status, setStatus] = useState(null);
  useEffect(() => {
    // if (mount) {
    //   setStatus("Searching");

    //   const timeOut = setTimeout(fetchData, 2000);
    //   return () => {
    //     clearTimeout(timeOut);
    //   };
    // }
    fetchData();
    // setMount(true);
  }, [search]);
  async function fetchData() {
    console.log("search....", search);

    try {
      const { data } = await axios.get(
        `http://serverlibrary.test/get-books.php?q=${search}`
      );
      console.log("data",data);
      return data;
      // if (data.success) {
      //   setBookList(data.body);
      //   search.length ? setStatus("result") : "null";
      //   return data;
      // } else {
      //   throw new Error(data.message);
      // }
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="container  my-5 app">
      <h1 className="header py-3 text-white rounded-2 text-center">
        Welcome to Library App
      </h1>
      <Filter search={search} setSearch={setSearch} status={status} />
      <ListBook bookList={bookList} search={search} status={status} />
    </div>
  );
}
