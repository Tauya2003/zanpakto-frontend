import React from "react";
import { useNavigate } from "react-router-dom";

const ProductsCard = ({ productData }) => {
  const navigate = useNavigate();

  return (
    <div
      className="card-container"
      onClick={() => navigate(`/product-details/${productData.id}`)}
    >
      <div className="img-container"></div>

      <div className="info-container">
        <div className="info">
          <p id="product-name">{productData.name}</p>
          <p id="product-price">{productData.price}</p>
        </div>

        <button id="btnOrder" className="btn">
          Order
        </button>
      </div>
    </div>
  );
};

export default ProductsCard;
