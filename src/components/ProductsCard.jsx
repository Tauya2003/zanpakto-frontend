import React from "react";
import { useNavigate } from "react-router-dom";
import shoe1 from "../assets/images/shoes1.jpg";
import placeholderImg from "../assets/images/product-placeholder.jpg";
import { Rating } from "@mui/material";

const ProductsCard = ({ productData }) => {
  const navigate = useNavigate();

  return (
    <div
      className="card-container"
      onClick={() => navigate(`/product-details/${productData._id}`)}
    >
      <div className="img-container">
        <img
          src={productData?.image ? productData?.image : placeholderImg}
          alt="shoe"
        />
      </div>

      <div className="info-container">
        <div className="info">
          <p id="product-name">
            {/* if the name is longer than 30 characters slice it to 30 characters only else display as is */}
            {productData.name.length > 30
              ? productData.name.slice(0, 30) + "..."
              : productData.name}
          </p>
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

        <button id="btnOrder">Buy Now</button>
      </div>
    </div>
  );
};

export default ProductsCard;
