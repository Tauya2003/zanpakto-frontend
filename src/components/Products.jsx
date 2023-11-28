import React from "react";
import ProductsCard from "./ProductsCard";
import { Box, CircularProgress } from "@mui/material";

const Products = ({ products }) => {
  if (products?.length === 0 || !products)
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50vh",
        }}
      >
        <CircularProgress sx={{ color: "#000" }} />
      </Box>
    );

  return (
    <section className="products-container">
      {products.map((item, id) => (
        <div key={id}>
          <ProductsCard productData={item} />
        </div>
      ))}
    </section>
  );
};

export default Products;
