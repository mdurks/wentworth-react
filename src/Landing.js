import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

import styled from "styled-components";
import MainNav from "./components/MainNav";
import MainFooter from "./components/MainFooter";
import Styled_SiteContainer from "./styles/commonStyles";

const WELCOME_QUERY = gql`
  query {
    welcomes {
      heroHeading
      firstIntroMessage
    }
  }
`;

const Landing = () => {
  return (
    <>
      <MainNav />
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
            <>
              <Styled_SiteContainer>
                <h1>{items.heroHeading}</h1>
                <p>{items.firstIntroMessage}</p>
              </Styled_SiteContainer>
            </>
          );
        }}
      </Query>
      <MainFooter />
    </>
  );
};

export default Landing;
