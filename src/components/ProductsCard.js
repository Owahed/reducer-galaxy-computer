import React from "react";
import "../App.css";
import { useProducts } from "../context/ProductsContext";
import { productActionType } from "../state/actionType";

const ProductsCard = ({ product }) => {
  const { dispatch, state } = useProducts();
  return (
    <div>
      <div className="card">
        <img
          src="https://cdn.pixabay.com/photo/2016/02/23/00/05/pizza-1216737_960_720.png"
          alt="Card image"
          className="card-image"
        />
        <div className="card-content">
          <h3 className="card-title">
            {product.name}- {product.id}
          </h3>
          <p className="card-text">
            Pizza is a popular Italian meal that consists of a dough base topped
            with tomato sauce, cheese, and various ingredients such as
            vegetables, meat, and seafood. It is usually baked in an oven and
            served hot. There are many different types of pizza, and the
            ingredients used can vary widely depending on the region or personal
            preference.
          </p>
          <button
            className="btn"
            onClick={() =>
              dispatch({
                type: productActionType.ADD_TO_CARD,
                payload: product,
              })
            }
          >
            {product.email}- Add to card
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
