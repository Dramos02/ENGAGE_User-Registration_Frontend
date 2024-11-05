import React, { Component, useDebugValue } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "./button";
import "./login.css";

function LogIn() {
  const navigate = useNavigate();

  const [Email, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission

    // Basic validation
    if (!Email || !Password) {
      alert("All fields are required!");
      return;
    }

    // Check if the email has a valid format
    const EmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!EmailRegex.test(Email)) {
      alert("Invalid email format!");
      return;
    }

    navigate("/HomePage");
  };

  return (
    <div className="background">
      <form onSubmit={handleSubmit}>
        <div className="inputs">
          <div className="header">
            <div className="login">Login on Engage</div>
          </div>

          <h4 className="input-titles">Email</h4>
          <div className="input">
            <input
              type="text"
              placeholder=""
              required
              value={Email}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <h4 className="input-titles">Password</h4>
          <div className="input password-container">
            <input
              type={showPassword ? "text" : "password"}
              placeholder=""
              required
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="button-container">
            <Button
              className="LoginButton"
              label="LOGIN"
              onClick={handleSubmit}
            />
          </div>

          <div className="already-login">
            <p className="black-text">
              <span className="forgot-password"> Forgot Password?</span>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}

export default LogIn;
