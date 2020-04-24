import React from "react";

export default function ErrorMessages(props) {
  const { error } = props;
  return (
    <div className="Error">
      &nbsp;{error}
    </div>
  )
}