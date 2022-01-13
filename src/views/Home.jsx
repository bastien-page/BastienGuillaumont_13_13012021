import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Hero from "../components/_Hero";

function Home() {
  return (
    <div className="app">
      <Navbar />
      <main className="main">
        <Hero />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
