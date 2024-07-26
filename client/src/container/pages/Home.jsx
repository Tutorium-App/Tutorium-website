import React from "react";
import "../styles/Home.css";
import HomeLand from "../../components/Landing/HomeLand";
import About from "../../components/About/About";
import Services from "../../components/Serv/Services";
import Perspective from "../../components/Pers/Perspective";

const Home = () => {
  return (
    <main className="container-main" id="home">
      <HomeLand />
      <About />
      <Services />
    </main>
  );
};

export default Home;
