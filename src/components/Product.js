import React from "react";
import GraphImg from "graphcms-image";

const Product = (props) => {
  return (
    <div>
      {/* <img src={props.product.image[0].url} alt={props.product.name} /> */}
      <GraphImg
        image={props.product.image[0]}
        transforms={["quality=value:80"]}
        maxWidth={1200}
      />
      <div>
        <h5>{props.product.name}</h5>
        <p>£{props.product.price}</p>
        <p>{props.product.description}</p>
      </div>
    </div>
  );
};
export default Product;
