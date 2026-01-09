import "../App.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [role, setRole] = useState("shopper");
  const navigate = useNavigate();

  return (
    <div className="signup-wrapper">
      {/* Top Logo */}
      <div className="signup-logo">📦 ShopKart</div>

      {/* Card */}
      <div className="signup-card">
        <h2 className="signup-title">Welcome Back</h2>
        <p className="signup-subtitle">
          Sign in to your account to continue
        </p>

        <label className="signup-label">Email</label>
        <input
          type="email"
          className="signup-input"
          placeholder="you@example.com"
        />

        <label className="signup-label">Password</label>
        <input
          type="password"
          className="signup-input"
          placeholder="Enter your password"
        />

        <div className="signup-forgot" onClick={() => navigate("/forgotpassword")}>Forgot password?</div>

        <div className="signup-role">
          <span>I am a</span>

          <label>
            <input
              type="radio"
              checked={role === "shopper"}
              onChange={() => setRole("shopper")}
            />
            Shopper
          </label>

          <label>
            <input
              type="radio"
              checked={role === "seller"}
              onChange={() => setRole("seller")}
            />
            Seller
          </label>
        </div>

        <button className="signup-btn">Sign In</button>

        <p className="signup-link">
          Don&apos;t have an account?{" "}
          <span onClick={() => navigate("/signin")}>Sign up</span>
        </p>
      </div>
    </div>
  );
}

