import React from "react";
import "../styles/Home.css";
import HomeLand from "../../components/Landing/HomeLand";
import About from "../../components/About/About";
import Services from "../../components/Serv/Services";

const Home = () => {
  return (
    <main className="container-main ">
      <HomeLand />
      <About />
      <Services />
    </main>
  );
};

export default Home;
