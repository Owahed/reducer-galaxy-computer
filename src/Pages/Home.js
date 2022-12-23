import React from "react";
import { useProducts } from "../context/ProductsContext";

const Home = () => {
  const { data } = useProducts();

  return (
    <div>
      <h1>home page</h1>
    </div>
  );
};

export default Home;
