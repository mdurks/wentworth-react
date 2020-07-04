import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Product from "./components/Product";
import Styled_SiteContainer from "./styles/commonStyles";

class Jewellery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartitems: [],
    };
  }

  render() {
    const PRODUCTS_QUERY = gql`
      query {
        products(orderBy: updatedAt_DESC) {
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
        <Query query={PRODUCTS_QUERY}>
          {({ loading, error, data }) => {
            if (loading)
              return (
                <Styled_SiteContainer>
                  Fetching products...
                </Styled_SiteContainer>
              );
            if (error)
              return (
                <Styled_SiteContainer>
                  Error fetching products
                </Styled_SiteContainer>
              );

            const items = data.products;
            //   console.log(items);

            return (
              <Styled_SiteContainer productFlexList>
                {items.map((item) => (
                  <Product key={item.id} product={item} />
                ))}
              </Styled_SiteContainer>
            );
          }}
        </Query>
      </>
    );
  }
}
export default Jewellery;
