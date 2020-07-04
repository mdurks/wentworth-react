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

  ${(props) =>
    props.productFlexList &&
    css`
      display: flex;
      flex-flow: row wrap;

      @media (min-width: 768px) {
        > div {
          display: inline-block;
          width: calc(50% - 40px);
          padding: 10px 20px;
          margin: 20px;
          background-color: #f5f5f5;
        }
      }
    `};
`;

export default Styled_SiteContainer;
