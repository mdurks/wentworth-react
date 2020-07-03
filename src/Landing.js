import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

import styled from "styled-components";
import Styled_SiteContainer from "./styles/commonStyles";

const WELCOME_QUERY = gql`
  query {
    welcomes {
      heroHeading
      firstIntroMessage
    }
  }
`;

const Styled_HeroImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  overflow: hidden;
  height: 200px;
  padding-bottom: 20px;

  @media (min-width: 768px) {
    height: 700px;

    padding-bottom: 160px;
  }
`;

const responsiveImage = require("./img/serkan-turk-unsplash.jpg");

const Landing = () => {
  return (
    <>
      <Query query={WELCOME_QUERY}>
        {({ loading, error, data }) => {
          if (loading)
            return <Styled_SiteContainer>Loading...</Styled_SiteContainer>;
          if (error)
            return (
              <Styled_SiteContainer>Error loading welcome</Styled_SiteContainer>
            );

          const items = data.welcomes[0];
          // console.log(items);
          return (
            <div>
              <Styled_HeroImg>
                <img
                  srcSet={responsiveImage.srcSet}
                  src={responsiveImage.src}
                />
              </Styled_HeroImg>

              <Styled_SiteContainer>
                <h1>{items.heroHeading}</h1>
                <p>{items.firstIntroMessage}</p>
              </Styled_SiteContainer>
            </div>
          );
        }}
      </Query>
    </>
  );
};

export default Landing;
