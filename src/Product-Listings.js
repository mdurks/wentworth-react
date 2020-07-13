import React, { useState } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Product from "./components/Product";
import Styled_SiteContainer from "./styles/commonStyles";

const Product_Listing = (props) => {
  let categoryType = props.match.url.split("/")[1];
  let productType = props.match.params.id;

  console.log("categoryType: ", categoryType);
  console.log("productType: ", productType);

  const PRODUCTS_QUERY = gql`
    query {
      products(orderBy: updatedAt_DESC, where: {productType: ${productType}, AND: {categoryType_contains_some: ${categoryType}}}) {
        id
        slug
        name
        categoryType
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

  document.title = `${categoryType} - ${productType} - Wentworth Jewels`;
  document.description = "Description for jewellery with Wentworth Jewels";
  document.documentElement.classList.remove("showEnquire", "showViewing");

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
          console.log("Product Listing: ", items, "length: ", items.length);

          let noContentMessage;
          if (!items.length) {
            noContentMessage = "There are no items found.";
          }

          return (
            <>
              <Styled_SiteContainer productFlexList>
                {items.map((item) => (
                  <Product
                    key={item.id}
                    category={`${categoryType}/${productType}`} // this forms part of the URL
                    product={item}
                  />
                ))}
                {noContentMessage}
              </Styled_SiteContainer>
            </>
          );
        }}
      </Query>
    </>
  );
};

export default Product_Listing;
