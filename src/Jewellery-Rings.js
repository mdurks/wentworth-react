import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Product from "./components/Product";
import FilterOption from "./components/Jewellery_filter_checkbox";
import { Styled_SiteContainer } from "./styles/commonStyles";

const PRODUCTS_QUERY = gql`
  query {
    products(orderBy: updatedAt_DESC, where: { productType: Ring }) {
      id
      slug
      name
      productType
      price
      gemstone
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

class Jewellery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gemstone_Morganite: false,
      gemstone_Diamond: false,
      gemstone_Aquamarine: false,
    };

    // ["display name", "idname"]  Define the jewellery filter types for mapping over later and creating the filter buttons
    this.filter_options_gemstone = [
      ["Aquamarine", "Aquamarine"],
      ["Diamond", "Diamond"],
      ["Morganite", "Morganite"],
    ];
    this.filter_options_metal = [
      ["Platinum", "Platinum"],
      ["Rose Gold", "Rose_Gold"],
      ["White Gold", "White_Gold"],
    ];
    this.filter_options_shape = [
      ["Emerald", "Emerald"],
      ["Oval", "Oval"],
      ["Princess", "Princess"],
      ["Round", "Round"],
    ];
  }

  componentDidMount() {
    document.title = "Jewellery Wentworth Jewels";
    document.description = "Description for jewellery with Wentworth Jewels";
  }

  clicked_filterOption = (filterCategory, idname) => {
    let stateKey = `${filterCategory}_${idname}`;
    console.log("clicked_filterOption: ", filterCategory, idname);
    this.setState({
      [stateKey]: !this.state[stateKey],
    });
  };

  render() {
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

            const productData = data.products;
            console.log("productData: ", productData);

            return (
              <>
                {/* Render out the jewellery filter types from the arrays above */}
                <Styled_SiteContainer>
                  <fieldset>
                    <legend>Gemstones:</legend>
                    {this.filter_options_gemstone.map((item) => (
                      <FilterOption
                        key={item[0]}
                        handleClick={this.clicked_filterOption}
                        filterCategory="gemstone"
                        name={item[0]}
                        idname={item[1]}
                        total={
                          productData.filter(
                            (pitem) => pitem.gemstone == item[0]
                          ).length
                        }
                      />
                    ))}
                  </fieldset>
                </Styled_SiteContainer>

                <Styled_SiteContainer productFlexList>
                  {productData.map((item) => (
                    <Product
                      key={item.id}
                      category="jewellery/rings" // this forms part of the URL
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
  }
}
export default Jewellery;
