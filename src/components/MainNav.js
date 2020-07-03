import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Styled_SiteContainer from "../styles/commonStyles";

const Wentworth_Crest = require("../img/wentworth_symbol.png");

const Styled_WentworthSymbolImg = styled.div`
  margin: 20px auto 0;
  width: 60px;

  @media only screen and (min-width: 767px) {
    margin: 20px auto 20px;
    width: 100px;
  }
`;

const Styled_WentworthTitle = styled.span`
  display: inline-block;
  text-transform: uppercase;
  font-family: "Playfair Display", serif;
  font-size: 30px;
  line-height: 20px;

  :first-letter {
    font-size: 40px;
  }

  :first-of-type {
    margin-right: 11px;
  }

  @media only screen and (min-width: 767px) {
    font-size: 40px;
    line-height: 40px;

    :first-letter {
      font-size: 50px;
    }
  }
`;

const StyledLink = styled(Link)`
  display: inline-block;
  margin-top: 20px;
  padding: 0 3px;
  font-size: 15px;
  font-family: "Playfair Display", serif;
  text-transform: uppercase;
  font-weight: bold;

  @media (min-width: 768px) {
    padding: 0 5%;
    font-size: 18px;
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
