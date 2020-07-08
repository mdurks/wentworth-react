import React from "react";
import styled from "styled-components";

const Styled_button = styled.button`
  margin: 0 5px 0 0;
  padding: 10px;
  cursor: pointer;
`;

const Jewellery_filter_checkbox = (props) => {
  let handleChange = () => {
    props.handleClick(props.filterCategory, props.idname);
    // console.log("Clicked: ", props.idname);
  };

  return (
    <>
      <Styled_button onClick={handleChange}>
        {props.name} ({props.total})
      </Styled_button>
    </>
  );
};

export default Jewellery_filter_checkbox;
