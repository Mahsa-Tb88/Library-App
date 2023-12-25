import React, { useEffect, useState } from "react";
import "./App.css";
import Filter from "./Components/Filter/Filter";
import ListBook from "./Components/ListBook/ListBook";
import axios from "axios";
export default function App() {
  const [search, setSearch] = useState("");
  const [mount, setMount] = useState(false);
  const [bookList, setBookList] = useState([]);
  const [totalBooks, setTotalBooks] = useState(0);
  const [status, setStatus] = useState(null);
  useEffect(() => {
    if (mount) {
      const timeOut = setTimeout(fetchData, 1000);
      return () => {
        clearTimeout(timeOut);
      };
    }
    setMount(true);
  }, [search]);
  async function fetchData() {
    try {
      const { data } = await axios.get(
        `http://serverlibrary.test/get-books.php?q=${search}`
      );
      if (search == "") {
        setBookList([]);
      } else {
        setBookList(data.body);
      }
      setTotalBooks(data.totalBooks);
      console.log(data);
      return data;
    } catch (error) {
      setBookList([]);
      setTotalBooks(0);
    } finally {
      setStatus("result");
    }
  }
  function searchHandler(value) {
    setSearch(value);
    setStatus("searching");
  }
  return (
    <div className="container  my-5 app">
      <h1 className="header py-3 text-white rounded-2 text-center">
        Welcome to Library App
      </h1>
      <Filter
        search={search}
        searchHandler={searchHandler}
        status={status}
        totalBooks={totalBooks}
      />
      <ListBook bookList={bookList} search={search} status={status} />
    </div>
  );
}
