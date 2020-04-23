import React from "react";
import styled from "styled-components";

import ErrorMessages from "./ErrorMessages";

export default function Form(props) {
  const { name, email, password, passwordConfirm, tosIsChecked } = props.formValues;
  const { formErrors, inputChange, checkboxChange, submitHandler, submitDisabled } = props;
  return (
    <StyledForm>
      <ErrorMessages formErrors={formErrors} />
      <form>
        <h2>My Form</h2>
        <label>Name:&nbsp;
          <input
            type="text"
            name="name"
            data-cy="name"
            value={name}
            onChange={inputChange}
          />
        </label>
        <label>Email:&nbsp;
          <input
            type="text"
            name="email"
            data-cy="email"
            value={email}
            onChange={inputChange}
          />
        </label>
        <label>Password:&nbsp;
          <input
            type="password"
            name="password"
            data-cy="password"
            value={password}
            onChange={inputChange}
          />
        </label>
        <label>I have read and accept the Terms of Service&nbsp;
          <input
            type="checkbox"
            name="tos"
            data-cy="tos"
            checked={tosIsChecked}
            onChange={checkboxChange}
          />
        </label>
        <input
          type="submit"
          name="submit"
          data-cy="submit"
          value="Submit"
          disabled={submitDisabled}
          onClick={submitHandler}
        />
      </form>
    </StyledForm>
  )
}

const StyledForm = styled.div`
  h2 {
    font-size: 3rem;
  }
`;
