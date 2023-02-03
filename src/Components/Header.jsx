import React from "react";

export default function Header(props) {
  return (
    <header>
      <h3>Where in the world?</h3>
      <div className="theme" onClick={props.switchTheme}>
        <i className="fa-solid fa-moon"></i>
        {props.theme === "light" ? "Dark" : "Light"} Mode
      </div>
    </header>
  );
}
