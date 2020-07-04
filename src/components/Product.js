import React from "react";
import GraphImg from "graphcms-image";
import styled from "styled-components";

const Styled_ProductItem = styled.div`
  margin-bottom: 40px;
  padding-bottom: 30px;
  border-bottom: 1px dashed #bdbdbd;

  @media (min-width: 768px) {
    border: none;
  }
`;

const Styled_Img = styled.div`
  margin-bottom: 25px;
`;

const Styled_Title = styled.h2`
  @media (min-width: 768px) {
    min-height: 80px;
    text-align: center;
  }
`;

const Product = (props) => {
  return (
    <Styled_ProductItem>
      {/* <img src={props.product.image[0].url} alt={props.product.name} /> */}
      <Styled_Title>{props.product.name}</Styled_Title>
      <Styled_Img>
        <GraphImg
          image={props.product.image[0]}
          transforms={["quality=value:80"]}
          maxWidth={500}
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
