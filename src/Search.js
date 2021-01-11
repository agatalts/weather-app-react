import React from "react";
import "./Search.css";
import "bootstrap/dist/css/bootstrap.css";

export default function Search() {
  return (
    <div>
      <form className="city-form">
        <input
          type="search"
          placeholder="Change location"
          className="change-location"
          autoComplete="off"
        />
        <input type="submit" value="Search" className="search-button" />
      </form>
    </div>
  );
}
