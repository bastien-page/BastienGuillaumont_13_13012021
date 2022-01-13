import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Profile() {
  document.title = "Argent Bank - Account";
  return (
    <div className="app">
      <Navbar page="profile" />
      <main className="main bg-dark">Profile</main>
      <Footer />
    </div>
  );
}

export default Profile;
