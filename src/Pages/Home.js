import React from "react";
import ProductsCard from "../components/ProductsCard";
import { useProducts } from "../context/ProductsContext";

const Home = () => {
  const {
    state: { products, loading, error },
  } = useProducts();

  let content;
  if (loading) {
    content = <p>loading...</p>;
  }
  if (error) {
    content = <p>Something was wrong</p>;
  }
  if (!loading && !error && products.length === 0) {
    content = <p>Nothing show here</p>;
  }
  if (!loading && !error && products.length) {
    content = products.map((product) => (
      <ProductsCard key={product.id} product={product} />
    ));
  }

  return <div>{content}</div>;
};

export default Home;
