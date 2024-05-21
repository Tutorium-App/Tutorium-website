import React from "react";
import "../styles/Home.css";
import HomeLand from "../../components/Landing/HomeLand";
import About from "../../components/About/About";

const Home = () => {
  return (
    <main className="container-main">
      <HomeLand />
      <About />
    </main>
  );
};

export default Home;
