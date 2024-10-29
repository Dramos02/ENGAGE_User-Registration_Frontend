import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import Button from "./button";
import "./register.css";

function Register() {
  const navigate = useNavigate();

  const [ProfilePic, setProfilePic] = useState<string | null>(null);
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Username, setUsername] = useState("");
  const [Email, setEmail] = useState("");
  const [ConfirmEmail, setConfirmEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordError, setPasswordError] = useState("");

  const handleProfilePicUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      setProfilePic(URL.createObjectURL(file));
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  // Password validation function
  const validatePassword = (password: string) => {
    if (password.length <= 8) {
      return "Password must be more than 8 characters.";
    }
    if (/\s/.test(password)) {
      return "Password must not contain spaces.";
    }
    return "";
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    const errorMessage = validatePassword(newPassword);
    setPasswordError(errorMessage);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission

    // Register validation
    if (
      !FirstName ||
      !LastName ||
      !Username ||
      !Email ||
      !ConfirmEmail ||
      !Password ||
      !ConfirmPassword
    ) {
      alert("All fields are required!");
      return;
    }

    if (Email !== ConfirmEmail) {
      alert("Emails do not match!");
      return;
    }

    if (Password !== ConfirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Check if the email has a valid format
    const EmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!EmailRegex.test(Email)) {
      alert("Invalid email format!");
      return;
    }

    // Check password validation
    if (passwordError) {
      alert(passwordError);
      return;
    }

    navigate("/login");
  };

  return (
    <div className="register-margin">
      <form onSubmit={handleSubmit}>
        <div className="inputs">
          <div className="header">
            <div className="register">Create Account on Engage</div>
          </div>

          <h4 className="input-titles">
            Full name <span className="lnfn">(Last name, First name)</span>
          </h4>
          <div className="input">
            <input
              type="text"
              placeholder=""
              required
              value={FirstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>

          <h4 className="input-titles">Email</h4>
          <div className="input">
            <input
              type="email"
              placeholder=""
              required
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <h4 className="input-titles">Password</h4>
          <div className="input password-container">
            <input
              type={showPassword ? "text" : "password"}
              placeholder=""
              required
              value={Password}
              onChange={handlePasswordChange}
              className={passwordError ? "error" : ""}
            />
          </div>

          <h4 className="input-titles">Confirm Password</h4>
          <div className="input">
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder=""
              required
              value={ConfirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          {/* Display password error */}
          {passwordError && (
            <div className="error-message">{passwordError}</div>
          )}

          {/* CHECK BOX FOR TERMS AND CONDITIONS */}
          <div>
            <div className="checkbox-container">
              <input
                type="checkbox"
                id="termsCheckbox"
                className="terms-checkbox"
              />
              <label htmlFor="termsCheckbox" className="black-text">
                I have read and agree to the{" "}
                <span className="termsAndConditions">Terms and Conditions</span>
              </label>
            </div>
          </div>

          <div className="button-container">
            <Button
              className="RegisterButton"
              label="Create Account"
              onClick={handleSubmit}
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default Register;
