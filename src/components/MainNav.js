import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { Styled_SiteContainer } from "../styles/commonStyles";

const Wentworth_Crest = require("../img/wentworth_symbol.png");

const Styled_WentworthSymbolImg = styled.div`
  margin: 20px auto 0;
  width: 60px;

  @media only screen and (min-width: 767px) {
    width: 100px;
  }

  img {
    width: 100%;
  }
`;

const Styled_WentworthTitle = styled.span`
  display: inline-block;
  text-transform: uppercase;
  font-family: "Playfair Display", serif;
  font-size: 25px;
  line-height: 25px;

  :first-letter {
    font-size: 32px;
  }

  :first-of-type {
    margin-right: 7px;
  }

  @media only screen and (min-width: 767px) {
    font-size: 40px;
    line-height: 40px;

    :first-letter {
      font-size: 50px;
    }
  }
`;

const StyledLink = styled(NavLink)`
  display: inline-block;
  margin-top: 10px;
  padding: 0 3px;
  font-size: 15px;
  font-family: "Playfair Display", serif;
  text-transform: uppercase;
  font-weight: bold;

  @media (min-width: 768px) {
    margin-top: 20px;
    padding: 0 5%;
    font-size: 18px;
  }

  :hover {
    text-decoration: none;
  }

  &.is-active:after {
    content: "";
    display: block;
    position: relative;
    left: 0;
    bottom: -4px;
    width: 100%;
    height: 2px;
    background-color: #000;
  }
`;

const MainNav = () => (
  <header>
    <Styled_SiteContainer mainNav>
      <NavLink exact={true} to="/">
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
      </NavLink>
      <StyledLink activeClassName="is-active" exact={true} to="/">
        Home
      </StyledLink>{" "}
      |{" "}
      <StyledLink activeClassName="is-active" to="/about">
        About
      </StyledLink>{" "}
      |{" "}
      <StyledLink activeClassName="is-active" to="/jewellery">
        Jewellery
      </StyledLink>{" "}
      |{" "}
      <StyledLink activeClassName="is-active" to="/contact">
        Contact
      </StyledLink>
    </Styled_SiteContainer>
  </header>
);

export default MainNav;
