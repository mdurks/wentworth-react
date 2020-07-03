import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import styled from "styled-components";

import { Styled_SiteContainer } from "./styles/commonStyles";

const ABOUT_QUERY = gql`
  query {
    abouts {
      heroHeading
      firstIntroMessage {
        html
      }
    }
  }
`;

const Styled_CMScontent = styled.div`
  img {
    height: auto;
  }
`;

const About = () => (
  <>
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

        function createMarkup() {
          return { __html: items.firstIntroMessage.html };
        }

        function RenderRichText() {
          return <div dangerouslySetInnerHTML={createMarkup()} />;
        }

        return (
          <>
            <Styled_SiteContainer>
              <h1>{items.heroHeading}</h1>
              <Styled_CMScontent>{RenderRichText()}</Styled_CMScontent>
            </Styled_SiteContainer>
          </>
        );
      }}
    </Query>
  </>
);

export default About;
