import React from "react";
import { dataImg } from "../constants/img";

const Perspective = () => {
  return (
    <section className="perspective">
      <h1 className="pers__header">The Tutorium Perspective</h1>

      <div className="content_per">
        <span className="pers_img">
          <img
            src={dataImg.accord}
            alt={"Phone and book"}
            width={"inherit"}
            height={"inherit"}
          />
        </span>
        <div className="info__content-p">
          <p className="sub">Why Tutorium</p>
          <h2>
            Learn On Your Own <br /> Accord
          </h2>
          <p className="sub">Watch Lessons from peer</p>
        </div>
      </div>

      <div className="content_per">
        <div className="info__content-p">
          <p className="sub">Benefits Of Tutorium</p>
          <h2>
            Monetize Your Teaching <br /> Skills
          </h2>
          <p className="sub_monitize">
            Tutorium provides an avenue for students to monetize their teaching
            skills.
          </p>
        </div>
        <span className="pers_img">
          <img
            src={dataImg.monitize}
            alt={"Phone and book"}
            width={"inherit"}
            height={"inherit"}
          />
        </span>
      </div>
    </section>
  );
};

export default Perspective;

/* 


      <div className="content_per">
        <div className="info__content-p">
          <p className="sub">Benefits Of Tutorium</p>
          <h2>
            Monetize Your Teaching <br /> Skills
          </h2>
          <p className="sub">
            Tutorium provides an avenue for students to monetize their teaching
            skills.
          </p>
        </div>
        <span className="pers_img">
          <img
            src={dataImg.monitize}
            alt={"lady laughing"}
            width={"inherit"}
            height={"inherit"}
          />
        </span>
      </div>


*/
