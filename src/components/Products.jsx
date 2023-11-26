import React from "react";
import ProductsCard from "./ProductsCard";

const Products = ({ products }) => {
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
