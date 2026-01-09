import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [role, setRole] = useState("buyer");
  const navigate = useNavigate();

  return (
    <div className="container1">
      {/* LOGO */}
      <div className="logo1">🛒 Shop Kart</div>

      <h2>Welcome to ShopKart</h2>
      <p>Your one-stop shop for everything. Get started now.</p>

      <button
        className="btn1 primary1"
        onClick={() => navigate("/signin", { state: { role } })}
      >
        Sign Up
      </button>

      <button className="btn1 outline1"
      onClick={() => navigate("/signup", { state: { role } })}>
        Sign In
      </button>

      <div className="or1">OR</div>

      <button className="btn1 google1">
        <img
          src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
          alt="Google"
        />
        Continue with Google
      </button>

      {/* BUYER / SELLER */}
      <div className="role1">
        <span>I am a</span>

        <label>
          <input
            type="radio"
            checked={role === "buyer"}
            onChange={() => setRole("buyer")}
          />
          Buyer
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
    </div>
  );
}
