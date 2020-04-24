import React from "react";
import styled from "styled-components";

export default function User(props) {
  const { id, name, email, password } = props.user;
  return (
    <UserCard className="User">
      <h2>{id}: {name}</h2>
      <h3>{email}</h3>
      <h4>{password}</h4>
    </UserCard>
  )
}

const UserCard = styled.div`
  padding: 20px;
  width: 40%;
  box-shadow: 0 0 7px 1px #000;
  border: 1px solid #000;
  margin: 15px;
  font-family: "Oswald", sans-serif;
  h2 {
    font-size: 1.2rem;
    border-bottom: 1px solid red;
  }
  h3, h4 {
    font-size: 1rem;
    font-weight: 500;
  }
`;