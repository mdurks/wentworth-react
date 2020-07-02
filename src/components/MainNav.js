import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Styled_SiteContainer from "../styles/commonStyles";

const Wentworth_Crest = require("../img/wentworth_symbol.png");

const Styled_WentworthSymbolImg = styled.div`
  width: 100px;
  margin: auto;
`;

const Styled_WentworthTitle = styled.span`
  display: inline-block;
  text-transform: uppercase;
  font-family: "Playfair Display", serif;
  font-size: 40px;
  line-height: 40px;

  :first-letter {
    font-size: 50px;
  }

  :first-of-type {
    margin-right: 11px;
  }
`;

const StyledLink = styled(Link)`
  display: inline-block;
  margin-top: 20px;
  padding: 0 10px;
  font-family: "Playfair Display", serif;
  text-transform: uppercase;
  font-weight: bold;

  @media (min-width: 768px) {
    padding: 0 5%;
  }
`;

const MainNav = () => (
  <Styled_SiteContainer mainNav>
    <Styled_WentworthSymbolImg>
      <img
        srcSet={Wentworth_Crest.srcSet}
        src={Wentworth_Crest.src}
        alt="Wentworths Crest"
      />
    </Styled_WentworthSymbolImg>
    <p>
      <Styled_WentworthTitle>Wentworth</Styled_WentworthTitle>
      <Styled_WentworthTitle>Jewels</Styled_WentworthTitle>
    </p>
    <StyledLink to="/">Home</StyledLink> |{" "}
    <StyledLink to="/about">About</StyledLink> |{" "}
    <StyledLink to="/jewellery">Jewellery</StyledLink> |{" "}
    <StyledLink to="/contact">Contact</StyledLink>
  </Styled_SiteContainer>
);

export default MainNav;
