import React from "react";
import { Link } from "react-router-dom";
import "../../container/styles/error.css";

const ErrorPage = () => {
  return (
    <div className="notFound">
      <div className="content__error">
        <h1>Oops! Page Not Found</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
        <div className="error-btn">
          <button>
            <Link to={"/"}>Return Home</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
