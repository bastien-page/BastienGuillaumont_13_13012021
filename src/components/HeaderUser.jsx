import React from "react";
import { useState, useRef } from "react";

function HeaderUser() {
  const [editName, setEditName] = useState(false);
  const [firstName, setFirstName] = useState("tony");
  const [lastName, setLastName] = useState("jarvis");

  const inputFisrt = useRef(null);
  const inputLast = useRef(null);

  const toggle = () => {
    setEditName(!editName);
    inputFisrt.current.value = "";
    inputLast.current.value = "";
  };

  const cancel = () => {
    setEditName(!editName);
    setFirstName("tony");
    setLastName("jarvis");
    inputFisrt.current.value = "";
    inputLast.current.value = "";
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
          <input
            ref={inputFisrt}
            type="text"
            placeholder={firstName}
            onChange={(e) => setFirstName(e.target.value.toLowerCase())}
          />
          <button className="edit-button" onClick={() => toggle()}>
            Valider
          </button>
        </div>
        <div className="edit-lastName">
          <input
            ref={inputLast}
            type="text"
            placeholder={lastName}
            onChange={(e) => setLastName(e.target.value.toLowerCase())}
          />
          <button className="edit-button" onClick={() => cancel()}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeaderUser;
