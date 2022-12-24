import React from "react";
import "../App.css";

const ProductsCard = ({ product: { name, email } }) => {
  return (
    <div>
      <div className="card">
        <div className="container">
          <h4>
            <b>{name}</b>
          </h4>
          <p>{email}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
