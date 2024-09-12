import React, { useState } from "react";
import { services } from "../constants/data";
import { bannerImg } from "../constants/img";

const Services = () => {
  const [dataContainer, setDataContainer] = useState(services);
  return (
    <section className="services-main" id="services">
      <p className="header_arrow">
        <span>Our Services</span>
        <span>
          <img
            src={bannerImg.arrow}
            alt="arrow"
            width={"inherit"}
            height={"inherit"}
          />
        </span>
      </p>
      <div className="data__container">
        {dataContainer.map((item, index) => {
          return (
            <div key={index} className="service_container">
              <span>
                <img
                  src={item.img}
                  alt={item.name}
                  width={"inherit"}
                  height={"inherit"}
                />
              </span>
              <div className="content_service">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
