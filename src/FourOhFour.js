import React from "react";
import { Link } from "react-router-dom";
import { Styled_SiteContainer } from "./styles/commonStyles";

const FourOhFour = () => (
  <>
    <Styled_SiteContainer>
      <div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <h1>Error, page not found</h1>
        <p>
          This page hasn't been created yet, or there is a mistake in the URL
        </p>
        <Link to="/">Return to Homepage</Link>
      </div>
    </Styled_SiteContainer>
  </>
);

export default FourOhFour;
