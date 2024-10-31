import React from "react";
import { Link } from "react-router-dom";

const NewsLetter = () => {
  return (
    <div className="newsLetter_container">
      <div className="newsLetter">
        <h2>Sign up for our newsletter</h2>
        <p>
          Be the first to know about releases and industry news and insights
        </p>
        <form action="">
          <div className="input__container">
            <input
              type="email"
              required
              aria-required
              placeholder="Enter your email address"
            />
            <button>Subscribe</button>
          </div>
        </form>
        <span className="link_policy">
          We care about your data in our <Link>privacy policy</Link>
        </span>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3974.9321368755764!2d-1.722707126033384!3d4.950942439439499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sgh!4v1721996688068!5m2!1sen!2sgh"
        allowFullScreen=""
        height={230}
        loading="lazy"
        title="Google Map"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default NewsLetter;
