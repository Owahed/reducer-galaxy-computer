import React, { createContext, useContext, useEffect, useState } from "react";
import Products from "../Data/products.json";

const PRODUCTS_CONTEXT = createContext();
const ProductsContext = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(Products);
  }, []);

  const value = {
    data,
  };
  return (
    <PRODUCTS_CONTEXT.Provider value={value}>
      {children}
    </PRODUCTS_CONTEXT.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(PRODUCTS_CONTEXT);
  return context;
};

export default ProductsContext;
