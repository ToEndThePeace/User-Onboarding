import React from "react";
import styled from "styled-components";

import Error from "./Error";

export default function Form(props) {
  const { name, email, password, tosIsChecked } = props.formValues;
  const { formErrors, inputChange, checkboxChange, submitHandler, submitDisabled } = props;
  return (
    <StyledForm>
      <h2>My Form</h2>
      <form>
        <div>
          <label>
            Name:&nbsp;
            <input
              type="text"
              name="name"
              data-cy="name"
              value={name}
              onChange={inputChange}
              placeholder="Enter your name"
            />
          </label>
          <Error error={formErrors.name} />
        </div>
        <div>
          <label>Email:&nbsp;
            <input
              type="text"
              name="email"
              data-cy="email"
              value={email}
              onChange={inputChange}
              placeholder="Enter your email"
            />
          </label>
          <Error error={formErrors.email} />
        </div>
        <div>
          <label>Password:&nbsp;
            <input
              type="password"
              name="password"
              data-cy="password"
              value={password}
              onChange={inputChange}
              placeholder="Enter your password"
            />
          </label>
          <Error error={formErrors.password} />
        </div>
        <div>
          <label>
          <input
              type="checkbox"
              name="tos"
              data-cy="tos"
              checked={tosIsChecked}
              onChange={checkboxChange}
            />
            &nbsp;I have read and accept the Terms of Service
          </label>
          <Error error={formErrors.tosIsChecked} />
        </div>
        <label>
          <input
            type="submit"
            name="submit"
            data-cy="submit"
            value="Submit"
            disabled={submitDisabled}
            onClick={submitHandler}
          />
        </label>
      </form>
    </StyledForm>
  )
}

const StyledForm = styled.div`
  /* Layout */
  width: 35%;
  padding: 10% 20px;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  /* Design */
  background-color: #000;
  color: #FFF;
  box-shadow: 0 0 5px 2px #000;
  font-family: "Oswald", sans-serif;
  h2 {
    font-size: 3.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  form {
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    align-items: center;
    height: 65%;
    letter-spacing: .03rem;
    & > label {
      input {
        padding: 8px 20px;
        font-size: 1rem;
        font-family: "Oswald", sans-serif;
        font-weight: 700;
        letter-spacing: .05rem;
        border-radius: 5px;
        border: 1px solid red;
        background-color: #fff;
        color: #000;
        cursor: pointer;
        flex-shrink: 1;
        &:hover {
          background-color: #000;
          color: red;
        }
        &:disabled {
          background-color: #ccc;
          color: #333;
          border-color: #999;
          cursor: unset;
          &:hover {
            cursor: not-allowed;
          }
        }
      }
    }
    div {
      display: flex;
      flex-flow: column nowrap;
      align-self: stretch;
      label {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: center;
        font-size: 1.3rem;
        line-height: 1.3rem;
        font-weight: 700;

        input {
          padding: 5px 10px;
          border: none;
          border-radius: 5px;
          font-family: "Oswald", sans-serif;
        }
      }
      .Error {
        color: red;
        font-size: .6rem;
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
        margin-top: 3px;
      }
      &:last-of-type label {
        font-size: .7rem;
        font-weight: 400;
        margin-top: 25px;
      }
    }
  }
`;
