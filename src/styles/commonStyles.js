import styled, { css } from "styled-components";

export const Styled_SiteContainer = styled.section`
  display: block;
  width: calc(100% - 30px);
  max-width: 1060px;
  margin: auto;
  padding: 15px;
  overflow: auto;

  ${(props) =>
    props.mainNav &&
    css`
      padding: 15px 0 30px;
      text-align: center;
    `};

  ${(props) =>
    props.mainFooter &&
    css`
      margin-bottom: 10px;
      padding-bottom: 100px;
    `};
`;

export default Styled_SiteContainer;
