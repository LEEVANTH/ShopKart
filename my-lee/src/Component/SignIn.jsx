import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function SignIn() {
  const navigate = useNavigate();
  const location = useLocation();
  const defaultRole = location.state?.role || "buyer";

  const [role, setRole] = useState(defaultRole);

  return (
    <div className="auth-container2">
      <div className="auth-card2">
        <h2>Create Account</h2>
        <p className="subtitle2">Join ShopKart and start shopping</p>

        <label>Full Name</label>
        <input type="text" />

        <label>Email</label>
        <input type="email" />

        <label>Password</label>
        <input type="password" />

        <label>Confirm Password</label>
        <input type="password" />

        {/* ROLE SELECTION */}
        <div className="role2 horizontal2">
          <span>I want to</span>

          <label>
            <input
              type="radio"
              checked={role === "buyer"}
              onChange={() => setRole("buyer")}
            />
            Shop Products
          </label>

          <label>
            <input
              type="radio"
              checked={role === "seller"}
              onChange={() => setRole("seller")}
            />
            Sell Products
          </label>
        </div>

        {/* SELLER EXTRA FIELDS */}
        {role === "seller" && (
  <div className="seller-section">
    {/* EXISTING FIELDS */}
    <label>Company Name</label>
    <input type="text" placeholder="Enter company name" />

    <label>Business Location</label>
    <input type="text" placeholder="City, State" />

    <label>GST Number</label>
    <input type="text" placeholder="GSTIN (optional)" />

    <label>Product Category</label>
    <input type="text" placeholder="Electronics, Fashion, etc." />

    {/* 🔹 NEW 5 FIELDS */}
    <label>Business Type</label>
    <input type="text" placeholder="Manufacturer / Distributor / Retailer" />

    <label>Years of Experience</label>
    <input type="number" placeholder="Number of years" />

    <label>Contact Number</label>
    <input type="tel" placeholder="Business contact number" />

    <label>Product Description</label>
    <textarea
      rows="3"
      placeholder="Brief description of your products"
    ></textarea>

    <label>Warehouse Address</label>
    <input type="text" placeholder="Warehouse / Storage address" />
  </div>
)}


        <label className="checkbox2">
          <input type="checkbox" /> I agree to the Terms of Service and Privacy Policy
        </label>

        <button className="btn2 primary2" onClick={() => navigate("/profile")}>
          Create {role === "seller" ? "Seller" : "Buyer"} Account
        </button>

        <p className="link-text2">
          Already have an account?{" "}
          <span onClick={() => navigate("/signup")}>Sign in</span>
        </p>
      </div>
    </div>
  );
}
