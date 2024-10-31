import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./button";
import "./register.css";

interface RegisterProps {
  setActiveTab: (tab: string) => void;
}

function Register({ setActiveTab }: RegisterProps) {
  const navigate = useNavigate();

  const [ProfilePic, setProfilePic] = useState<string | null>(null);
  const [FullName, setFirstName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Register validation
    if (!FullName || !Email || !Password || !ConfirmPassword) {
      alert("All fields are required!");
      return;
    }

    if (Password !== ConfirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const EmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!EmailRegex.test(Email)) {
      alert("Invalid email format!");
      return;
    }

    // Simulate account creation and switch to login tab
    alert("Account created successfully!");
    setActiveTab("login"); // Switch to login tab
  };

  return (
    <div className="register-margin">
      <form onSubmit={handleSubmit}>
        <div className="inputs-register">
          <div className="header">
            <div className="register">Create Account on Engage</div>
          </div>

          <h4 className="input-titles">
            Full name <span className="lnfn">(Last name, First name)</span>
          </h4>
          <div className="input">
            <input
              type="text"
              required
              value={FullName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>

          <h4 className="input-titles">Email</h4>
          <div className="input">
            <input
              type="email"
              required
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <h4 className="input-titles">Password</h4>
          <div className="input password-container">
            <input
              type={showPassword ? "text" : "password"}
              required
              value={Password}
              onChange={handlePasswordChange}
            />
          </div>

          <h4 className="input-titles">Confirm Password</h4>
          <div className="input">
            <input
              type={showConfirmPassword ? "text" : "password"}
              required
              value={ConfirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          {/* Terms and Conditions Checkbox */}
          <div className="checkbox-container">
            <input type="checkbox" id="termsCheckbox" required />
            <label htmlFor="termsCheckbox" className="black-text">
              I have read and agree to the{" "}
              <span className="termsAndConditions">Terms and Conditions</span>
            </label>
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
