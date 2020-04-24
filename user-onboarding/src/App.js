import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { v4 as uuid } from "uuid";
import * as yup from "yup";

import Form from "./components/Form";
import UserList from "./components/UserList";

const url = "https://reqres.in/api/users";

const initialFormData = {
  name: "",
  email: "",
  password: "",
  tosIsChecked: false
};
const initialUsers = [
  {
    id: uuid().slice(0, 3),
    name: "Brandon Ramirez",
    email: "bran@don.abc",
    password: "chives"
  },
  {
    id: uuid().slice(0, 3),
    name: "Krista Swasey",
    email: "kri@sta.abc",
    password: "potato"
  }
];
const initialFormErrors = {
  name: "",
  email: "",
  password: "",
  tosIsChecked: ""
};
const formSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, "Name requires 2 characters")
    .required("Name is required"),
  email: yup
    .string()
    .email("Invalid email entered")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password requires 6 characters")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]/,
      "Password must contain at least one letter and number"
    )
    .required("Password is required"),
  tosIsChecked: yup
    .boolean()
    .required("Accepting Terms of Service is required")
});

function App() {
  // User State and Handlers
  const [users, setUsers] = useState([]);

  // Form State and Handlers
  const [formValues, setFormValues] = useState({});
  const [submitDisabled, setSubmitDisabled] = useState(false);
  const inputChange = (event) => {
    const { name, value } = event.target;

    yup
      .reach(formSchema, name)
      .validate(value)
      .then((valid) => {
        setFormErrors({
          ...formErrors,
          [name]: ""
        });
      })
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0]
        });
      });

    setFormValues({
      ...formValues,
      [name]: value
    });
  };
  const checkboxChange = (event) => {
    setFormValues({
      ...formValues,
      [`${event.target.name}IsChecked`]: event.target.checked
    });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const curValues = formValues;
    axios
      .post(url, curValues)
      .then((res) => {
        const { id, name, email, password } = res.data;
        setUsers([
          ...users,
          {
            id: id,
            name: name,
            email: email,
            password: password
          }
        ]);
        setFormValues(initialFormData);
      })
      .catch((err) => {
        debugger;
      });
  };
  // Form Error Handling
  const [formErrors, setFormErrors] = useState({});

  // API Calls

  // Effect Hooks
  useEffect(() => {
    setSubmitDisabled(true);
    setUsers(initialUsers);
    setFormValues(initialFormData);
    setFormErrors(initialFormErrors);
  }, []);
  useEffect(() => {
    formSchema.isValid(formValues).then((valid) => {
      setSubmitDisabled(!valid);
    });
  }, [formValues]);

  return (
    <StyledApp>
      <Form
        formValues={formValues}
        formErrors={formErrors}
        inputChange={inputChange}
        checkboxChange={checkboxChange}
        submitHandler={submitHandler}
        submitDisabled={submitDisabled}
      />
      <UserList users={users} />
    </StyledApp>
  );
}

const StyledApp = styled.div`
  width: 100%;
  height: 100%;
`;

export default App;
