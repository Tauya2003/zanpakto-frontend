import { useEffect, useState } from "react";
import "./style.css";
import { fetchFromAPI } from "../../utils/fetchFromAPI";
import { useParams } from "react-router-dom";
import { Box, CircularProgress, Rating } from "@mui/material";
import { Add, Remove } from "@mui/icons-material";
import shoes from "../../assets/images/shoes1.jpg";

const Product = () => {
  const { productId } = useParams();

  const [productData, setProductData] = useState({});
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const getProductData = async () => {
      const data = await fetchFromAPI(`api/products/65633907d0fa9231d8a135fb`);
      if (data) setProductData(data);

      setLoading(false);
    };

    getProductData();
  }, [productId]);

  if (loading)
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress sx={{ color: "#000" }} />
      </Box>
    );

  if (!productData.name)
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        Something went wrong. Please try again later.
      </Box>
    );

  return (
    <div className="product">
      <section className="top-section"></section>

      <section className="container">
        <div className="left-column">
          <img
            src={productData.image ? productData.image : shoes}
            alt={productData.name}
            className="product-img"
          />
        </div>

        <div className="right-column">
          <div className="product-description">
            <Rating
              name="product rating"
              value={productData.rating}
              precision={0.1}
              readOnly
            />
            <h1>{productData.name}</h1>
            <p className="description">{productData.description}</p>
          </div>

          <div className="product-price">
            <span>${productData.price}</span>
          </div>

          <div className="product-qauntity">
            <div className="quantity">
              <button
                className="sub"
                onClick={() => setQuantity(quantity - 1)}
                disabled={quantity === 1}
              >
                <Remove />
              </button>
              <span>{quantity}</span>
              <button className="add" onClick={() => setQuantity(quantity + 1)}>
                <Add />
              </button>
            </div>

            <div className="add-to-cart-btn">
              <button className="cart-btn">
                <Add />
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Product;
