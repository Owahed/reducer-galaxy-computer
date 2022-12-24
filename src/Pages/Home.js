import React from "react";
import ProductsCard from "../components/ProductsCard";
import { useProducts } from "../context/ProductsContext";

const Home = () => {
  const {
    state: { products },
  } = useProducts();
  console.log(products);
  return (
    <div>
      {products.map((product) => (
        <ProductsCard product={product} />
      ))}
    </div>
  );
};

export default Home;
