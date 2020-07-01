import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

import MainNav from "./components/MainNav";
import MainFooter from "./components/MainFooter";
import Styled_SiteContainer from "./styles/commonStyles";

const CONTACT_QUERY = gql`
  query {
    contacts {
      heroHeading
      firstIntroMessage
    }
  }
`;

const Contact = () => (
  <>
    <MainNav />
    <Query query={CONTACT_QUERY}>
      {({ loading, error, data }) => {
        if (loading)
          return <Styled_SiteContainer>Loading...</Styled_SiteContainer>;
        if (error)
          return (
            <Styled_SiteContainer>Error loading welcome</Styled_SiteContainer>
          );

        const items = data.contacts[0];
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

export default Contact;
