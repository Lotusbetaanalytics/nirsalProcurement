import React from "react";
import "./landingPage.css";
import logo from "../../assets/logo.png";

const LandingPage = () => {
  return (
    <div className="landingPageContainer">
      <div className="landingLogo">
        <img src={logo} alt="logo" />
      </div>
      <div className="landingContent">
        <span>Welcome to</span>
        <h1>
          The Procurement <br />
          Portal
        </h1>
        <div></div>
      </div>
    </div>
  );
};

export default LandingPage;
