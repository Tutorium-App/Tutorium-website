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
    </div>
  );
};

export default NewsLetter;
