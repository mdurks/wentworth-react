import React, { useState } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Product from "./components/Product";
import Styled_SiteContainer from "./styles/commonStyles";

const Product_Listing = (props) => {
  console.log("productType: ", props.match.params.id);
  const PRODUCTS_QUERY = gql`
    query {
      products(orderBy: updatedAt_DESC, where: { productType: ${props.match.params.id} }) {
        id
        slug
        name
        productType
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

  document.title = `Jewellery - ${props.match.params.id} - Wentworth Jewels`;
  document.description = "Description for jewellery with Wentworth Jewels";

  return (
    <>
      <Query query={PRODUCTS_QUERY}>
        {({ loading, error, data }) => {
          if (loading)
            return (
              <Styled_SiteContainer>Fetching products...</Styled_SiteContainer>
            );
          if (error)
            return (
              <Styled_SiteContainer>
                Error fetching products
              </Styled_SiteContainer>
            );

          const items = data.products;
          console.log("items: ", items);

          return (
            <>
              <Styled_SiteContainer productFlexList>
                {items.map((item) => (
                  <Product
                    key={item.id}
                    category={`jewellery/${props.match.params.id}`} // this forms part of the URL
                    product={item}
                  />
                ))}
              </Styled_SiteContainer>
            </>
          );
        }}
      </Query>
    </>
  );
};

export default Product_Listing;
