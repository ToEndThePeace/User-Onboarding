import React from "react";
import styled from "styled-components";

import User from "./User";

export default function UserList(props) {
  const { users } = props;
  return (
    <StyledList>
      {
        users.map(user => {
          return (<User key={user.id} user={user} />);
        })
      }
    </StyledList>
  )
}

const StyledList = styled.div`

`;