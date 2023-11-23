import React from "react";
import "./style.css";
import { useParams } from "react-router-dom";
import Products from "../../components/Products";

const SearchFeed = () => {
  const { searchTerm } = useParams();

  return (
    <div className="search">
      <section className="top-section"></section>

      <div className="container">
        <h2>These are the results for: {searchTerm}</h2>
      </div>

      <Products />
    </div>
  );
};

export default SearchFeed;
