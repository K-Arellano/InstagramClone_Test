import React, { useState } from "react";
import InstagramSVG from "./svgComps/InstagramSVG";
import { FaFacebookSquare } from "react-icons/fa"; // Import Facebook icon

const LoginForm: React.FC = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [passwordVisible, setPasswordVisible] = useState(false); // State to toggle password visibility
  const [isPasswordTouched, setIsPasswordTouched] = useState(false); // State to track if user started typing password
  const [authError, setAuthError] = useState(""); // State for authentication error message

  const validateForm = () => {
    const newErrors = { email: "", password: "" };
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";
    setErrors(newErrors);
    return !newErrors.email && !newErrors.password;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Simulate password check (replace with actual authentication logic)
      if (formData.password === "correctpassword") {
        console.log("Logging in:", formData);
        setAuthError(""); // Clear any previous error
      } else {
        setAuthError("Sorry, your password was incorrect. Please double-check your password.");
      }
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev); // Toggle the password visibility
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, password: e.target.value });
    setIsPasswordTouched(true); // Mark password field as touched when user starts typing
  };

  return (
<div className="min-w-[370px] max-w-[370px] flex flex-col items-center border md:border-gray-300 border-transparent bg-white p-8">      
  {/* Adjusted Instagram logo size */}
      <div className="w-44 mb-6">
        <InstagramSVG disableDarkMode={true} white={false} />
      </div>

      <form className="w-full space-y-3" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Phone number, username, or email"
          className="w-full border border-gray-300 bg-[#fafafa] px-3 py-2 rounded-sm focus:outline-none"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}

        <div className="relative">
          <input
            type={passwordVisible ? "text" : "password"} // Toggle password visibility
            placeholder="Password"
            className="w-full border border-gray-300 bg-[#fafafa] px-3 py-2 rounded-sm focus:outline-none"
            value={formData.password}
            onChange={handlePasswordChange}
          />
          {isPasswordTouched && ( // Show/Hide button only if the user typed something in the password field
            <button
              type="button"
              onClick={togglePasswordVisibility} // Toggle the visibility
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-700 font-semibold"
            >
              {passwordVisible ? "Hide" : "Show"}
            </button>
          )}
        </div>
        {errors.password && <p className="text-sm text-red-500 mt-1">{errors.password}</p>}

        <button
          type="submit"
          className="w-full bg-[#4cb5f9] py-2 text-white font-semibold rounded-lg"
          disabled={!formData.email || !formData.password} // Disable if any field is empty
        >
          Log in
        </button>
      </form>

      <div className="flex items-center w-full my-3">
        <hr className="w-full border-stone-300" />
        <p className="mx-3 text-sm text-gray-600">OR</p>
        <hr className="w-full border-stone-300" />
      </div>

      <button className="mt-3 w-full flex items-center justify-center gap-2 py-2 text-blue-500 font-semibold rounded-lg">
        {/* Add the circular background with custom image */}
        <div className="w-5 h-5 rounded-full flex items-center justify-center overflow-hidden">
          <img src="/facebookLogo.png" alt="Facebook logo" className="w-full h-full object-cover" />
        </div>
        Log in with Facebook
      </button>

      {/* Show the authentication error message if there is one */}
      {authError && (
        <p className="text-sm text-red-500 mt-3 text-center">{authError}</p>
      )}

      <p className="text-sm mt-3 text-blue-900 cursor-pointer">Forgot password?</p>
    </div>
  );
};

export default LoginForm;
