import React from "react";
import "./card-style.css";
import { ProductContext } from "./ProductContext";
const ProductIdContext = React.createContext("1");

const Card = props => {
  return (
    <div
      onClick={() => props.handleId(props.productData)}
      className="container product_slider"
    >
      <div className="card text-center shadow">
        <div className="overflow">
          <img
            src={props.productData.imageUrl}
            alt=""
            className="card-img-top"
          />
        </div>
        <div className="card-body text-dark">
          <h5 className="card-title">{props.productData.category}</h5>
        </div>
      </div>
    </div>
  );
};
export default Card;
