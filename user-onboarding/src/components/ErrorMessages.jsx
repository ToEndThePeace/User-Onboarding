import React from "react";
import styled from "styled-components";

export default function ErrorMessages(props) {
  const { formErrors } = props;
  return (
  <StyledMessages className="ErrorMessages">
      <div>{formErrors.name}</div>
      <div>{formErrors.email}</div>
      <div>{formErrors.password}</div>
      <div>{formErrors.tos}</div>
    </StyledMessages>
  )
}

const StyledMessages = styled.div`
  color: red;
  display: flex;
  flex-flow: column;
`;