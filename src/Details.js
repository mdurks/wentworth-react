import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import GraphImg from "graphcms-image";

import styled from "styled-components";
import Styled_SiteContainer from "./styles/commonStyles";

const Styled_ProductItem = styled.div`
  margin-bottom: 40px;
  padding-bottom: 30px;
  border-bottom: 1px dashed #bdbdbd;

  @media (min-width: 768px) {
    border: none;
  }
`;

const Styled_Img = styled.div`
  @media (min-width: 768px) {
    width: 50%;
    margin: 0 auto 25px;
  }
`;

const Styled_Title = styled.h2`
  @media (min-width: 768px) {
    text-align: center;
  }
`;

const Details = (props) => {
  const SINGLE_PRODUCT_QUERY = gql`
  query {
    products(
      where: { slug_contains: "${props.match.params.id}" }
    ) {
      id
      name
      price
      description
      createdAt
      image {
        id
        url
        handle
        width
        height
      }
    }
  }
`;
  return (
    <>
      <Query query={SINGLE_PRODUCT_QUERY}>
        {({ loading, error, data }) => {
          if (loading)
            return <Styled_SiteContainer>Loading...</Styled_SiteContainer>;
          if (error)
            return (
              <Styled_SiteContainer>Error loading welcome</Styled_SiteContainer>
            );

          const product = data.products[0];
          console.log("Details data: ", product);

          return (
            <>
              <Styled_SiteContainer>
                <Styled_Title>{product.name}</Styled_Title>
                <Styled_Img>
                  <GraphImg
                    image={product.image[0]}
                    transforms={["quality=value:80"]}
                    maxWidth={500}
                  />
                </Styled_Img>
                <div>
                  <p>{product.description}</p>
                  <p>£{product.price}</p>
                </div>
              </Styled_SiteContainer>
            </>
          );
        }}
      </Query>
    </>
  );
};

export default Details;
