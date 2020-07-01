import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Product from "./components/Product";

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
        products {
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
      <Query query={PRODUCTS_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching products.....</div>;
          if (error) return <div>Error fetching products</div>;

          const items = data.products;
          console.log(items);
          return (
            <div>
              {items.map((item) => (
                <Product key={item.id} product={item} />
              ))}
            </div>
          );
        }}
      </Query>
    );
  }
}
export default Jewellery;
