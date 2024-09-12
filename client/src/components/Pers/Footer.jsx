import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import "../../container/styles/Footer.css";

const Footer = () => {
  return (
    <footer>
      <h2 className="title_footer">
        Join <span className="highlight">Tutorium</span> Today.
        <br />
        Discover the power of peer tutoring.
      </h2>
      <hr />
      <div className="addressInfo">
        <div className="address_header">
          <p>
            <span className="title_address">Address</span>
            <span className="address_info">Sekondi-Takoradi</span>
          </p>
          <p>
            <span className="title_address">Contact</span>
            <a href="tel:+233256772900">
              <span className="address_info">+233 256 772 900</span>
            </a>
          </p>
          <p>
            <span className="title_address">Email</span>
            <a href="mailto:app.tutorium@gmail.com">
              <span className="address_info">app.tutorium@gmail.com</span>
            </a>
          </p>
        </div>
        <div className="social_icons">
          <h3>Follow us on</h3>
          <div className="social_icons_container">
            <a href="https://www.facebook.com/417094934822259" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/tutorium24?igsh=MXNzOTFucmphM3ZnMA%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/company/tutoriumapp/" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>
            <a href="https://x.com/tutorium24?s=21" target="_blank" rel="noopener noreferrer">
              <BsTwitterX />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
