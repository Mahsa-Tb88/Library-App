import React from "react";
import "./listbook.scss";
import Book from "../Book/Book";
export default function ListBook({ bookList, search, status }) {
  if (status == "result" && search.length != 0 && bookList.length == 0) {
    return <h2 className="text-center">Your Search Have Not Founded</h2>;
  }
  return (
    <div className="listbook rounded-2 py-5 px-3">
      {bookList.map((book) => (
        <Book key={book.id} book={book} />
      ))}
    </div>
  );
}
