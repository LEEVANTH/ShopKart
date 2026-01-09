import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

export default function ForgotPassword() {
  const navigate = useNavigate();

  return (
    <div className="forgot-container">
      {/* Logo */}
      <div className="forgot-logo">
        🛒 <span>ShopKart</span>
      </div>

      {/* Card */}
      <div className="forgot-card">
        <h1>Forgot Password</h1>
        <p className="forgot-subtitle">
          Enter your registered email address and we'll send you a password
          reset link.
        </p>

        <input
          type="email"
          placeholder="Email address"
          className="forgot-input"
        />

        <button className="forgot-btn" onClick={() => navigate("/resetpassword")}>Send Reset Link</button>

        <p className="forgot-back" onClick={() => navigate("/signin")}>
          Back to Sign In
        </p>
      </div>
    </div>
  );
}
