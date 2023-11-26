import React from "react";
import { useNavigate } from "react-router-dom";
import shoe1 from "../assets/images/shoes1.jpg";
import { Rating } from "@mui/material";

const ProductsCard = ({ productData }) => {
  const navigate = useNavigate();


  return (
    <div
      className="card-container"
      onClick={() => navigate(`/product-details/${productData._id}`)}
    >
      <div className="img-container">
        <img src={shoe1} alt="shoe" />
      </div>

      <div className="info-container">
        <div className="info">
          <p id="product-name">{productData.name}</p>
          <p id="product-price">${productData.price}</p>

          <div className="rating">
            <Rating
              name="read-only"
              value={productData.rating}
              precision={0.1}
              readOnly
              size="small"
            />
          </div>
        </div>

        <button id="btnOrder">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductsCard;
