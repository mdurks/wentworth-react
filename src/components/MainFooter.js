import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Styled_SiteContainer } from "../styles/commonStyles";

const Styled_MainFooter = styled.footer`
  border: 4px solid white;
  background: #fffad6;
  background: linear-gradient(
    0deg,
    rgba(255, 250, 214, 1) 0%,
    rgba(255, 255, 255, 1) 100%
  );
`;

const MainFooter = () => (
  <Styled_MainFooter>
    <Styled_SiteContainer mainFooter>
      <p>Footer</p>
    </Styled_SiteContainer>
  </Styled_MainFooter>
);

export default MainFooter;
