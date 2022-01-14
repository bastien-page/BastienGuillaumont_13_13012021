import React from "react";
import { useState } from "react";

function HeaderUser() {
  const [editName, setEditName] = useState(false);
  const [firstName, setFirstName] = useState("Tony");
  const [lastName, setLastName] = useState("Jarvis");

  const toggle = () => {
    setEditName(!editName);
  };

  const changeFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const changeLastName = (e) => {
    setLastName(e.target.value);
  };

  return (
    <div className="header">
      <h1>
        Welcome back
        <br />
        <span className={editName ? "sr-only" : " "}>
          {firstName + " " + lastName + " !"}
        </span>
      </h1>
      <button
        className={"edit-button " + (editName ? "sr-only" : " ")}
        onClick={() => toggle()}
      >
        Edit Name
      </button>
      <div className={"edit-profile" + (editName ? "" : " sr-only")}>
        <div className="edit-firstName">
          <input type="text" placeholder="Tony" onChange={changeFirstName} />
          <button className="edit-button" onClick={() => toggle()}>
            Valider
          </button>
        </div>
        <div className="edit-lastName">
          <input type="text" placeholder="Jarvis" onChange={changeLastName} />
          <button className="edit-button" onClick={() => toggle()}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeaderUser;
