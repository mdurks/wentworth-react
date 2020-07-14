import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { Styled_SiteContainer } from "../styles/commonStyles";

// const Wentworth_Crest = require("../img/wentworth_symbol.png");

const Styled_HeaderNav = styled.div`
  text-align: left;
`;

const StyledLink = styled(NavLink)`
  display: inline-block;
  text-align: center;
`;

const Styled_WentworthSymbolImg = styled.div`
  display: block;
  margin: 10px auto;
  width: 60px;
  height: 68px;
  background-image: url("../img/wentworth_symbol_small.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;

  @media only screen and (min-width: 767px) {
    background-image: url("../img/wentworth_symbol_large.png");
    margin: 20px auto;
    width: 100px;
    height: 115px;
  }
`;

const Styled_WentworthTitle = styled.span`
  display: inline-block;
  text-transform: uppercase;
  font-family: "Playfair Display", serif;
  font-size: 25px;
  line-height: 25px;
  text-align: center;

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

const MainNav = () => (
  <header>
    <Styled_SiteContainer>
      <Link to="/contact/">Contact</Link> | <Link to="/contact/">Services</Link>{" "}
      | <Link to="/contact/">Blog</Link>
      <button className="snipcart-checkout">
        Cart (<span className="snipcart-items-count"></span>)
      </button>
    </Styled_SiteContainer>
    <Styled_SiteContainer textCenter>
      <StyledLink exact={true} to="/">
        <Styled_WentworthSymbolImg />
        <Styled_WentworthTitle>Wentworth</Styled_WentworthTitle>
        <Styled_WentworthTitle>Jewels</Styled_WentworthTitle>
      </StyledLink>
    </Styled_SiteContainer>
  </header>
);

export default MainNav;
