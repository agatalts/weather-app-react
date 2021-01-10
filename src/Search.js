import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div>
      <form id="city-form">
        <input
          type="search"
          id="city"
          placeholder="Change location"
          className="change-location"
          autoComplete="off"
        />
        <input type="submit" value="Search" className="search-button" />
      </form>
    </div>
  );
}
