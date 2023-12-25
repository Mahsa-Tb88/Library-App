import React from "react";
import "./book.scss";
import parser from "html-react-parser";
export default function Book({ book }) {
  return (
    <div className="book rounded-2 py-2 px-3 my-5">
      <h2>{book.title}</h2>
      <div className="py-3 text-justify">{parser(book.desc)}</div>
      <div className="d-flex justify-content-start align-items-center">
        <div className="d-flex justify-content-start align-items-center me-3">
          <h6 className="m-0">Author:</h6>
          <p className="mx-1 mb-0">{book.author}</p>
        </div>
        <div className="d-flex justify-content-start align-items-center me-3">
          <h6 className="m-0">Pages:</h6>
          <p className="mx-1 mb-0">{book.pages}</p>
        </div>
        <div className="d-flex justify-content-start align-items-center me-3">
          <h6 className="m-0">Year:</h6>
          <p className="mx-1 mb-0">{book.year}</p>
        </div>
      </div>
    </div>
  );
}
