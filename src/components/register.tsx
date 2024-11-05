import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./button";
import "./register.css";
import CustomCheckbox from "./CustomCheckbox";
import TermsModal from "./TermsModal";

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

<<<<<<< HEAD
  // Modal and Checkbox State
=======
  // MODAL
>>>>>>> 0aa0c0dff0efcd25e2183b63fb3ee1d9670f523c
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (checked: boolean) => {
    setIsChecked(checked);
  };

  const handleTermsClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
<<<<<<< HEAD
=======
  // MODAL END
>>>>>>> 0aa0c0dff0efcd25e2183b63fb3ee1d9670f523c

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

    // Validation
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
    navigate("signupstatus"); // Switch to login tab
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

          <div className="register-container">
            <div className="terms-container">
              <CustomCheckbox
                checked={isChecked}
                onChange={handleCheckboxChange}
<<<<<<< HEAD
              />
              {" "}I have read and agree to the{" "}
=======
              />{" "}
              I have read and agree to the{" "}
>>>>>>> 0aa0c0dff0efcd25e2183b63fb3ee1d9670f523c
              <span className="terms-link" onClick={handleTermsClick}>
                Terms and Conditions
              </span>
            </div>

            <TermsModal isOpen={isModalOpen} onClose={closeModal} />
          </div>

          <div className="button-container-register">
            <Button
              className="RegisterButton1"
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
