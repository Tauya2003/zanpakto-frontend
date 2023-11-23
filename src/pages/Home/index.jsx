import React from "react";
import "./style.css";
import Products from "../../components/Products";
import { useNavigate } from "react-router-dom";
import SearchBar from "../../components/SearchBar";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      <section className="top-section"></section>

      <section className="container">
        <div>
          <h1>Shop with Convenience, Quality, and Style!</h1>

          <div className="btn-container">
            <button
              id="btnAbout"
              className="btn"
              onClick={() => navigate(`/about-us`)}
            >
              About
            </button>

            <button
              id="btnGet"
              className="btn"
              onClick={() => navigate("/login")}
            >
              Login as Supplier
            </button>
          </div>
        </div>

        <SearchBar />
      </section>

      <Products />
    </div>
  );
};

export default Home;
