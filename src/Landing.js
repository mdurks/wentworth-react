import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

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
    <Query query={WELCOME_QUERY}>
      {({ loading, error, data }) => {
        if (loading) return <div>Loading...</div>;
        if (error) return <div>Error loading welcome</div>;

        const items = data.welcomes[0];
        // console.log(items);
        return (
          <>
            <h1>{items.heroHeading}</h1>
            <p>{items.firstIntroMessage}</p>
          </>
        );
      }}
    </Query>
  );
};

export default Landing;
