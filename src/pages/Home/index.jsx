import { useEffect, useState } from "react";
import "./style.css";
import Products from "../../components/Products";
import { useNavigate } from "react-router-dom";
import SearchBar from "../../components/SearchBar";
import { fetchFromAPI } from "../../utils/fetchFromAPI";
import { Box, CircularProgress } from "@mui/material";

const Home = () => {
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const products = await fetchFromAPI("api/products");
      setProducts(products);
    };

    getProducts();
  }, []);



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

      <Products products={products} />
    </div>
  );
};

export default Home;
