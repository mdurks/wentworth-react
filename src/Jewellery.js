import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import Styled_SiteContainer from "./styles/commonStyles";

const StyledLink = styled(Link)`
  display: block;
  margin: 0 0 10px;
  padding: 15px;
  background-color: hsla(0, 0%, 98%, 1);

  :hover {
    text-decoration: none;
    background-color: hsla(0, 0%, 94%, 1);
  }
`;

const Jewellery = () => {
  document.title = "Jewellery Wentworth Jewels";
  document.description = "Description for jewellery with Wentworth Jewels";

  return (
    <>
      <Styled_SiteContainer>
        <StyledLink to="/jewellery/rings/">Rings</StyledLink>
        <StyledLink to="/jewellery/earrings/">Earrings</StyledLink>
        <StyledLink to="/jewellery/necklaces/">Necklaces</StyledLink>
        <StyledLink to="/jewellery/bracelets/">Bracelets</StyledLink>
        {/* <StyledLink to="/jewellery/others/">Other</StyledLink> */}
      </Styled_SiteContainer>
    </>
  );
};
export default Jewellery;
