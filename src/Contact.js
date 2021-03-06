import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

import Styled_SiteContainer from "./styles/commonStyles";

const CONTACT_QUERY = gql`
  query {
    contacts {
      heroHeading
      firstIntroMessage
    }
  }
`;

const Contact = () => {
  document.title = "Contact Wentworth Jewels";
  return (
    <>
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

                <form name="Contact" method="post" action="/">
                  <input type="hidden" name="form-name" value="Contact" />
                  <p>
                    <label>
                      Your Name: <input type="text" name="name" />
                    </label>
                  </p>
                  <p>
                    <label>
                      Your Email: <input type="email" name="email" />
                    </label>
                  </p>
                  <p>
                    <label>
                      Message: <textarea name="message"></textarea>
                    </label>
                  </p>
                  <p>
                    <button type="submit">Send</button>
                  </p>
                </form>
              </Styled_SiteContainer>
            </>
          );
        }}
      </Query>
    </>
  );
};

export default Contact;
