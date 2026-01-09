import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

export default function ResetPassword() {
  const navigate = useNavigate();

  return (
    <div className="reset-container">
      {/* Logo */}
      <div className="reset-logo">ShopKart</div>

      {/* Card */}
      <div className="reset-card">
        <h1>Reset Password</h1>
        <p className="reset-subtitle">
          Create a new password for your account.
        </p>

        <input
          type="password"
          placeholder="New Password"
          className="reset-input"
        />

        <input
          type="password"
          placeholder="Confirm New Password"
          className="reset-input"
        />

        <p className="reset-hint">Password must be at least 8 characters.</p>

        <button className="reset-btn">Save Password</button>

        <p className="reset-back" onClick={() => navigate("/signin")}>
          Back to Sign In
        </p>
      </div>
    </div>
  );
}
