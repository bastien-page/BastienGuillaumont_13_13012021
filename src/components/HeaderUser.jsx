import React from "react";
import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { updateUser } from "../actions/user.actions";

function HeaderUser() {
  const first = useSelector((state) => state.userReducer.firstName);
  const last = useSelector((state) => state.userReducer.lastName);

  const [editName, setEditName] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const dispatch = useDispatch();

  const inputFisrt = useRef(null);
  const inputLast = useRef(null);

  const changeName = () => {
    dispatch(updateUser(firstName, lastName));
    setEditName(!editName);
  };

  const cancel = () => {
    setEditName(!editName);
    setFirstName(first);
    setLastName(last);
    inputFisrt.current.value = "";
    inputLast.current.value = "";
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
            ref={inputFisrt}
            type="text"
            value={firstName}
            placeholder={first}
            onChange={(e) => setFirstName(e.target.value.toLowerCase())}
          />
          <button className="edit-button" onClick={changeName}>
            Update profile
          </button>
        </div>
        <div className="edit-lastName">
          <input
            ref={inputLast}
            type="text"
            placeholder={last}
            value={lastName}
            onChange={(e) => {
              console.log(e.target.value);
              if (e.target.value !== "") {
                setLastName(e.target.value.toLowerCase());
              } else {
                return last;
              }
            }}
          />
          <button className="edit-button" onClick={() => cancel()}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default HeaderUser;
