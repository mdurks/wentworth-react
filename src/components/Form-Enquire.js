import React from "react";
import styled from "styled-components";

const Styled_submitBtn = styled.button`
  padding: 10px 20px;
`;

const Form_Enquire = (props) => {
  return (
    <>
      <div
        style={{ border: "1px solid grey", padding: "10px", marginTop: "60px" }}
      >
        <h2>
          Enquire:
          <br />
          {props.product}
          <br />
        </h2>
        <form name="Enquire" method="post" action="/">
          <input type="hidden" name="form-name" value="Enquire" />
          <input type="hidden" name="Product" value={props.product} />
          <input
            type="hidden"
            name="product page"
            value={window.location.href}
          />
          <p>
            <label>
              Name: <br />
              <input type="text" name="name" />
            </label>
          </p>
          <p>
            <label>
              Email: <br />
              <input type="email" name="email" />
            </label>
          </p>
          <p>
            <label>
              Phone: <br />
              <input type="tel" name="phone" />
            </label>
          </p>
          <p>
            <label>
              Message: <br />
              <textarea name="message"></textarea>
            </label>
          </p>
          <p>Terms & Conditions notice goes here.</p>
          <p>
            <Styled_submitBtn type="submit">Send enquiry</Styled_submitBtn>
          </p>
        </form>
      </div>
    </>
  );
};

export default Form_Enquire;
