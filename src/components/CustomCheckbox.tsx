import React, { useState } from "react";
import "./CustomCheckbox.css";

interface CustomCheckboxProps {
  label?: string;
  checked?: boolean;
  onChange: (checked: boolean) => void;
}

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({
  label,
  checked = false,
  onChange,
}) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    onChange(!isChecked);
  };

  return (
    <label className="custom-checkbox">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
        className="custom-checkbox-input"
      />
      <span className="custom-checkbox-box" />
      <span className="custom-checkbox-label">{label}</span>
    </label>
  );
};

<<<<<<< HEAD
export default CustomCheckbox;
=======
export default CustomCheckbox;
>>>>>>> 0aa0c0dff0efcd25e2183b63fb3ee1d9670f523c
