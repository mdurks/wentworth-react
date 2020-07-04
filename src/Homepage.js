import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import GraphImg from "graphcms-image";

import styled from "styled-components";
import Styled_SiteContainer from "./styles/commonStyles";

const WELCOME_QUERY = gql`
  query {
    welcomes {
      heroHeading
      firstIntroMessage {
        html
      }
      heroImage {
        id
        url
        handle
        width
        height
      }
    }
  }
`;

const Styled_HeroImg = styled.div`
  position: relative;
  height: 200px;
  overflow: hidden;

  > div {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }

  > div > div {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @media (min-width: 600px) {
    height: 400px;
  }
  @media (min-width: 950px) {
    height: 600px;
  }
`;

const Styled_CMScontent = styled.div`
  img {
    height: auto;
  }
`;

const Homepage = () => {
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

          function createMarkup() {
            return { __html: items.firstIntroMessage.html };
          }

          function RenderRichText() {
            return <div dangerouslySetInnerHTML={createMarkup()} />;
          }

          return (
            <>
              <Styled_HeroImg>
                <div>
                  <GraphImg
                    image={items.heroImage}
                    transforms={["quality=value:80"]}
                    maxWidth={1200}
                  />
                </div>
              </Styled_HeroImg>

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
};

export default Homepage;
