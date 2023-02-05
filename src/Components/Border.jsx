import React from "react";

export default function Border(props) {
  return (
    <button onClick={() => props.setClickedCountry(props.border)}>
      {props.border}
    </button>
  );
}
