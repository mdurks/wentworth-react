import React from "react";
import GraphImg from "graphcms-image";
import styled from "styled-components";

const Styled_ProductItem = styled.div`
  margin-bottom: 80px;
`;

const Styled_Img = styled.div`
  margin-bottom: 25px;
`;

const Product = (props) => {
  return (
    <Styled_ProductItem>
      {/* <img src={props.product.image[0].url} alt={props.product.name} /> */}
      <h2>{props.product.name}</h2>
      <Styled_Img>
        <GraphImg
          image={props.product.image[0]}
          transforms={["quality=value:80"]}
          maxWidth={1200}
        />
      </Styled_Img>
      <div>
        <p>{props.product.description}</p>
        <p>£{props.product.price}</p>
      </div>
    </Styled_ProductItem>
  );
};
export default Product;
