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
          width: calc(50% - 20px);
          margin-top: 20px;
          margin-bottom: 20px;
          padding: 10px 20px;
          background-color: hsla(0, 0%, 98%, 1);

          :nth-child(odd) {
            margin-right: 20px;
          }
          :nth-child(even) {
            margin-left: 20px;
          }
        }
      }
    `};
`;

export default Styled_SiteContainer;
