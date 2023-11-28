import { useEffect, useState } from "react";
import "./style.css";
import Products from "../../components/Products";
import { useNavigate } from "react-router-dom";
import SearchBar from "../../components/SearchBar";
import { fetchFromAPI } from "../../utils/fetchFromAPI";
import { Box, CircularProgress } from "@mui/material";
import { Search } from "@mui/icons-material";

const Home = () => {
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const products = await fetchFromAPI("api/products");
      setProducts(products);
    };

    getProducts();
  }, []);

  // const getSearchResults = async () => {
  //   const results = await fetchFromAPI(`api/products/search/${searchTerm}`);
  //   setSearchResults(results);
  // };

  

  // create a function to handle that set products from products state with name like search term and set it to search results without having to make a new api call
  const getSearchResults = () => {
    const results = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }

  useEffect(() => {
    searchTerm && getSearchResults();
  }, [searchTerm]);

  const handleSubmit = (e) => {
    e.preventDefault();

    getSearchResults();
  };

  return (
    <div className="home">
      <section className="top-section"></section>

      <section className="container">
        <div>
          <h1>Shop with Convenience, Quality and Style!</h1>

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

        {/* <SearchBar /> */}
        <form className="searchBar" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search"
            id="searchInput"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <button type="submit" id="searchButton">
            <Search />
          </button>
        </form>
      </section>

      <Products products={!searchTerm ? products : searchResults} />
    </div>
  );
};

export default Home;
