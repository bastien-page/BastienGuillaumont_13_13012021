import React from "react";
import Footer from "../components/Footer";
import HeaderUser from "../components/HeaderUser";
import Navbar from "../components/Navbar";
import Accounts from "../components/Accounts";

import { useState, useEffect } from "react";

function Profile() {
  const [data, setData] = useState({});

  const token = localStorage.getItem("jwt");

  console.log(token);

  // const getUserData = () => {
  //   fetch(`${process.env.REACT_APP_API_URL}/profile`, {
  //     method: "POST",
  //     headers: { Authorization: `Bearer ${token}` },
  //   })
  //     .then((response) => response.json())
  //     .then((result) => setData(result.body))
  //     .catch((error) => console.log("error", error));
  // };

  // useEffect(() => {
  //   getUserData();
  // }, [token]);

  document.title = "Argent Bank - Account";
  return (
    <div className="app">
      <Navbar page="profile" />
      <main className="main bg-dark">
        <HeaderUser data={data} />
        <Accounts />
      </main>
      <Footer />
    </div>
  );
}

export default Profile;
