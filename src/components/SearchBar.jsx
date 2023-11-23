import React, { useState } from "react";
import searchIcon from "../assets/images/searchIcon.svg";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm === "") {
      alert("Please enter a search term");
    } else {
      navigate(`/search/${searchTerm}`);
    }
  };

  return (
    <form className="searchBar" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search"
        id="searchInput"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <button type="submit" id="searchButton">
        <img src={searchIcon} alt="search" id="searchIcon" />
      </button>
    </form>
  );
};

export default SearchBar;
