import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Styled_SiteContainer from "../styles/commonStyles";

const MainNav = () => (
  <Styled_SiteContainer mainNav>
    <p>
      <strong>Wentworth Jewels</strong>
    </p>
    <Link to="/">Home</Link> | <Link to="/about">About</Link> |{" "}
    <Link to="/jewellery">Jewellery</Link> | <Link to="/contact">Contact</Link>
  </Styled_SiteContainer>
);

export default MainNav;
