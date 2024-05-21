import React from "react";
import { bannerImg, img } from "../constants/img";
import { DiVim } from "react-icons/di";

const HomeLand = () => {
  return (
    <div className="home-banner">
      <span className="person-img msk">
        <img
          src={bannerImg.leftMan}
          alt="student"
          width={"inherit"}
          height={"inherit"}
        />
      </span>

      <div className="imgBanner_hero">
        <span className="imgBanner">
          <img src={img.logo} alt="" />
        </span>
        <h1 className="hero-title__main">
          Empower Your Learning with Peer <br /> Tutors on{" "}
          <span className="highlight">Tutorium</span>
        </h1>
      </div>
      <div className="person-img flex-dsk">
        <img
          src={bannerImg.leftMan}
          alt="student"
          width={"inherit"}
          height={"inherit"}
          className="dsk-img"
        />
        <img
          src={bannerImg.rightMan}
          alt="student"
          width={"inherit"}
          height={"inherit"}
        />
      </div>
    </div>
  );
};

export default HomeLand;
