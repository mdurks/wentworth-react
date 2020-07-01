import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

import MainNav from "./components/MainNav";
import MainFooter from "./components/MainFooter";
import Styled_SiteContainer from "./styles/commonStyles";

const ABOUT_QUERY = gql`
  query {
    abouts {
      heroHeading
      firstIntroMessage
    }
  }
`;

const About = () => (
  <>
    <MainNav />
    <Query query={ABOUT_QUERY}>
      {({ loading, error, data }) => {
        if (loading)
          return <Styled_SiteContainer>Loading...</Styled_SiteContainer>;
        if (error)
          return (
            <Styled_SiteContainer>Error loading welcome</Styled_SiteContainer>
          );

        const items = data.abouts[0];
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

export default About;
