import React from "react";
import styled from "styled-components";

export default function User(props) {
  const { id, name, email, password } = props.user;
  return (
    <UserCard>
      <h2>{id}: {name}</h2>
      <h3>{email}</h3>
      <h4>{password}</h4>
    </UserCard>
  )
}

const UserCard = styled.div`
  padding: 20px;
`;