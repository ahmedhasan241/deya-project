"use client";
import React, { useState } from "react";
import { IoEye, IoEyeOff, IoKey } from "react-icons/io5";

interface PasswordInputProps extends React.HTMLProps<HTMLInputElement> {
  label: string;
}

const PasswordInput = ({ label, ...props }: PasswordInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="form-control w-full mb-3">
      <div className="label">
        <span className="label-text ">{label}</span>
      </div>

      <label
        className="input input-bordered flex items-center gap-2"
        htmlFor="email"
      >
        <IoKey size={18} />
        <input type={showPassword ? "text" : "password"} {...props} />
        <span onClick={togglePasswordVisibility} className="cursor-pointer">
          {showPassword ? <IoEyeOff size={18} /> : <IoEye size={18} />}
        </span>
      </label>
    </div>
  );
};

export default PasswordInput;
