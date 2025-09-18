// src/components/LoginForm.jsx
import React from "react";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";

const Login = () => {
  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg p-10 w-96 text-white">
      {/* User Icon */}
      <div className="flex justify-center mb-6">
        <div className="bg-white/20 p-4 rounded-full">
          <FaUser size={40} />
        </div>
      </div>

      {/* Title */}
      <h2 className="text-center text-lg tracking-widest mb-8">
        CUSTOMER LOGIN
      </h2>

      {/* Email Field */}
      <div className="flex items-center border-b border-gray-300 mb-6">
        <FaEnvelope className="mr-3" />
        <input
          type="email"
          placeholder="Email ID"
          className="bg-transparent focus:outline-none w-full py-2"
        />
      </div>

      {/* Password Field */}
      <div className="flex items-center border-b border-gray-300 mb-6">
        <FaLock className="mr-3" />
        <input
          type="password"
          placeholder="Password"
          className="bg-transparent focus:outline-none w-full py-2"
        />
      </div>

      {/* Options */}
      <div className="flex justify-between items-center text-sm mb-6">
        <label className="flex items-center gap-2">
          <input type="checkbox" className="accent-blue-500" />
          Remember me
        </label>
        <a href="#" className="hover:underline">
          Forgot Password?
        </a>
      </div>

      {/* Login Button */}
      <button className="w-full bg-blue-800 py-3 rounded-lg hover:bg-blue-900 transition">
        LOGIN
      </button>
    </div>
  );
};

export default Login;
