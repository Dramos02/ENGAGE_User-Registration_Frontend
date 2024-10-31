import React, { useState } from "react";
import Register from "./register";
import LogIn from "./login";
import "./tab.css";
import FormImage from "../assets/formimage.png"; // Adjust the path to point to your image

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState("login");

  return (
    <div className="all-form">
      <div className="yellow-container">
        <div className="tab-container">
          <div className="yellow-line"></div>
          <div className="tab-buttons">
            <button
              className={`tab-button-login ${
                activeTab === "login" ? "active" : ""
              }`}
              onClick={() => setActiveTab("login")}
            >
              Log In
            </button>

            <button
              className={`tab-button-register ${
                activeTab === "register" ? "active" : ""
              }`}
              onClick={() => setActiveTab("register")}
            >
              Sign Up
            </button>
          </div>

          <div className="tab-content">
            {activeTab === "login" ? (
              <LogIn />
            ) : (
              <Register setActiveTab={setActiveTab} />
            )}
          </div>
        </div>
      </div>

      <div className="image-container">
        <img src={FormImage} alt="Background" />
      </div>
    </div>
  );
};

export default TabComponent;
