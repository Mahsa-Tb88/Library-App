import React from "react";
import "./book.scss";
import parser from "html-react-parser";
export default function Book({ book }) {
  return (
    <div className="book rounded-2 py-2 px-3 my-5">
      <h2>{book.title}</h2>
      <p className="py-3 text-justify">{parser(book.desc)}</p>
      <div className="d-flex justify-content-start align-items-center">
        <div className="d-flex justify-content-start align-items-center me-3">
          <h6 className="m-0">Author:</h6>
          <span className="mx-1">{book.author}</span>
        </div>
        <div className="d-flex justify-content-start align-items-center me-3">
          <h6 className="m-0">Pages:</h6>
          <span className="mx-1">{book.pages}</span>
        </div>
        <div className="d-flex justify-content-start align-items-center me-3">
          <h6 className="m-0">Year:</h6>
          <span className="mx-1">{book.year}</span>
        </div>
      </div>
    </div>
  );
}
