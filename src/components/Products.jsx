import React from "react";
import ProductsCard from "./ProductsCard";

const products = [
  {
    id: "rtyui",
    name: "sugar",
    price: "12",
  },
  {
    id: "fgh",
    name: "rice",
    price: "20",
  },
  {
    id: "rtyui",
    name: "bread",
    price: "85",
  },
  {
    id: "sdfgh",
    name: "milk",
    price: "564",
  },
  {
    id: "rtyui",
    name: "salt",
    price: "87",
  },
];



const Products = () => {
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
