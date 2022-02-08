import React from "react";
import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { updateUser } from "../actions/user.actions";

function HeaderUser() {
  const first = useSelector((state) => state.userReducer.user.firstName);
  const last = useSelector((state) => state.userReducer.user.lastName);

  const [editName, setEditName] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const dispatch = useDispatch();

  const changeName = (e) => {
    e.preventDefault();
    dispatch(updateUser(firstName, lastName));
    setEditName(!editName);
  };

  const cancel = (e) => {
    e.preventDefault();
    setEditName(!editName);
  };

  return (
    <div className="header">
      <h1>
        Welcome back
        <br />
        <span className={editName ? "sr-only" : " "}>
          {first + " " + last + " !"}
        </span>
      </h1>
      <button
        className={"edit-button " + (editName ? "sr-only" : " ")}
        onClick={() => setEditName(!editName)}
      >
        Edit Name
      </button>
      <form className={"edit-profile" + (editName ? "" : " sr-only")}>
        <div className="edit-firstName">
          <input
            type="text"
            value={firstName}
            placeholder="First name"
            onChange={(e) => setFirstName(e.target.value.toLowerCase())}
          />
          <button className="edit-button" onClick={(e) => changeName(e)}>
            Save
          </button>
        </div>
        <div className="edit-lastName">
          <input
            type="text"
            placeholder="Last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value.toLowerCase())}
          />
          <button className="edit-button" onClick={(e) => cancel(e)}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default HeaderUser;
