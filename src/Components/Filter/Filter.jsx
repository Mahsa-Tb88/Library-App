import React, { useState } from "react";
import "./filter.scss";
export default function Filter({ search, setSearch, status }) {
  let message = "";
  if (status == "searching") {
    message = "Show result after ending type";
  } else if (status == "result") {
    message = `${status} have founded`;
  } else {
    message = "Enter Text to Search";
  }
  return (
    <div className="filter d-flex flex-column justify-content-center align-items-center my-5">
      <div>
        <div className="form-check form-check-inline mx-4">
          <input
            type="checkbox"
            name="filter"
            className="form-check-input"
            id="title"
          />
          <label className="form-check-label" htmlFor="title">
            Title | Content
          </label>
        </div>
        <div className="form-check form-check-inline mx-4">
          <input
            type="checkbox"
            name="filter"
            className="form-check-input"
            id="title"
          />
          <label className="form-check-label" htmlFor="title">
            Year
          </label>
        </div>
        <div className="form-check form-check-inline mx-4">
          <input
            type="checkbox"
            name="filter"
            className="form-check-input"
            id="title"
          />
          <label className="form-check-label" htmlFor="title">
            Author
          </label>
        </div>
      </div>
      <div>
        <input
          type="text"
          className="my-4 search rounded-1"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="message text-white py-2   px-2 rounded-1 ">
        <p className="mb-0">{message}</p>
      </div>
    </div>
  );
}
