import styled, { css } from "styled-components";

const Styled_SiteContainer = styled.section`
  display: block;
  width: calc(100% - 30px);
  max-width: 800px;
  margin: auto;
  padding: 15px;
  overflow: auto;
  background-color: cadetblue;

  ${(props) =>
    props.mainNav &&
    css`
      background-color: #48888a;
      padding-top: 15px;
      padding-bottom: 30px;
    `};

  ${(props) =>
    props.mainFooter &&
    css`
      padding-bottom: 100px;
      background-color: #355354;
    `};
`;

export default Styled_SiteContainer;
