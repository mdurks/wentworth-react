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

const Styled_CMScontent = styled.div`
  img {
    height: auto;
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
        productType
        createdAt
        detailedDescription {
          html
        }
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
          console.log("Details: ", product);

          document.title = `${product.name} - ${product.productType} - Wentworth Jewels`;
          document.description = product.description;

          function createMarkup() {
            return { __html: product.detailedDescription.html };
          }

          function RenderRichText() {
            return <div dangerouslySetInnerHTML={createMarkup()} />;
          }

          return (
            <>
              <Styled_SiteContainer>
                <Styled_Title>{product.name}</Styled_Title>
                <p>{product.description}</p>
                <Styled_Img>
                  <GraphImg
                    image={product.image[0]}
                    transforms={["quality=value:80"]}
                    maxWidth={500}
                  />
                </Styled_Img>
                <Styled_CMScontent>
                  {RenderRichText()}
                  <p>£{product.price}</p>
                </Styled_CMScontent>
              </Styled_SiteContainer>
            </>
          );
        }}
      </Query>
    </>
  );
};

export default Details;
