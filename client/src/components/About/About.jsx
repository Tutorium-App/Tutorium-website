import React from "react";
import { bannerImg } from "../constants/img";
import { RiServiceFill } from "react-icons/ri";
import { PiShootingStarFill } from "react-icons/pi";
const About = () => {
  return (
    <section className="about-main" id="about">
      {/* INTRO HEADER */}
      <p className="header_arrow">
        <span>About Us</span>
        <span>
          <img
            src={bannerImg.arrow}
            alt="arrow"
            width={"inherit"}
            height={"inherit"}
          />
        </span>
      </p>
      {/* INTRO HEADER */}

      <div className="sub__content">
        <div className="about_info">
          <h2 className="about_title">Transformative Peer Education</h2>
          <p>
            Welcome to Tutorium, the innovative mobile platform transforming
            on-campus learning and teaching. We believe in peer-to-peer
            education, enabling students to share knowledge and skills,
            fostering a thriving academic community.
          </p>
        </div>
        <div className="about_img">
          <img
            src={bannerImg.aboutPointImage}
            alt="lady with book"
            width={"inherit"}
            height={"inherit"}
          />
        </div>

        {/* FEATURED IN */}
      </div>

      <div className="featured_in">
        {/* FEATURES ON ABOUT */}

        {/* LEFT */}
        <div className="left__featuredIn">
          <p className="header_arrow_short">
            <span>Featured In</span>
            <span>
              <img
                src={bannerImg.ShortArrow}
                alt="short Arrow"
                width={"inherit"}
                height={"inherit"}
              />
            </span>
          </p>

          <div className="featured_inHolder">
            <div>
              <span>
                <img
                  src={bannerImg.Umat}
                  alt="umat logo"
                  width={"inherit"}
                  height={"inherit"}
                />
              </span>
              <span>UMAT</span>
            </div>
            <div>
              <span>
                <img
                  src={bannerImg.Tech}
                  alt="Tech logo"
                  width={"inherit"}
                  height={"inherit"}
                />
              </span>
              <span>KNUST</span>
            </div>
          </div>
        </div>

        {/* LEFT */}

        {/* RIGHT */}
        <div className="right__featuredIn">
          <span className="arrowLine">
            <img src={bannerImg.Line} alt="Line" />
          </span>

          <div className="all_subFeature">
            <div className="sub_feature">
              <p>
                <span>
                  <RiServiceFill />
                </span>
                <span>Tutorial Services</span>
              </p>
              <p>
                We know the exact person to help you with that stressful course.
                And they're on Tutorium
              </p>
            </div>
            <div className="sub_feature">
              <p>
                <span>
                  <PiShootingStarFill />
                </span>
                <span>Skill Building</span>
              </p>
              <p>
                Don't leave school with just a certificate, let a Tutorium tutor
                teach you a useful skill
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT */}

        {/* FEATURES ON ABOUT */}
      </div>
    </section>
  );
};

export default About;
