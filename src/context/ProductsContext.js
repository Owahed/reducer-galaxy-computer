import React, { createContext, useContext, useEffect, useReducer } from "react";
import Products from "../Data/products.json";
import { productActionType } from "../state/actionType";
import { initialState, productReducer } from "../state/ProductReducer";

const PRODUCTS_CONTEXT = createContext();
const ProductsContext = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);
  console.log(state);

  useEffect(() => {
    dispatch({ type: productActionType.FETCHING_START });

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) =>
        dispatch({ type: productActionType.FETCHING_SUCCESS, payload: data })
      )
      .catch(() => {
        dispatch({ type: productActionType.FETCHING_ERROR });
        // dispatch({ type: productActionType.FETCHING_START });
      });
  }, []);

  const value = {
    state,
    dispatch,
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
