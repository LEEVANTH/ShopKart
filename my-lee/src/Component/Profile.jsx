import React, { useState, useEffect } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();

  // 🔹 Load profile from localStorage or default
  const [profile, setProfile] = useState({
    name: "Alex Johnson",
    email: "alex.johnson@email.com",
    phone: "+1 (555) 123-4567",
    password: "password",
  });

  const [isEditing, setIsEditing] = useState(false);

  // Load saved profile on page load
  useEffect(() => {
    const savedProfile = JSON.parse(localStorage.getItem("profile"));
    if (savedProfile) {
      setProfile(savedProfile);
    }
  }, []);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    localStorage.setItem("profile", JSON.stringify(profile));
    setIsEditing(false);
    alert("Profile updated successfully!");
  };

  return (
    <div className="sk-profile-page">
      {/* ===== NAVBAR ===== */}
      <header className="sk-profile-navbar">
        <div className="sk-profile-logo">
          🛒 <span>ShopKart</span>
        </div>

        <input
          className="sk-profile-search"
          placeholder="Search for products..."
        />

        <div className="sk-profile-nav-actions">
          <img
            src="https://i.pravatar.cc/40"
            alt="User"
            className="sk-profile-avatar-small"
          />
          <span
            className="sk-profile-logout"
            onClick={() => navigate("/home")}
          >
            Logout
          </span>
        </div>
      </header>

      {/* ===== CONTENT ===== */}
      <div className="sk-profile-content">
        <h2 className="sk-profile-heading">My Profile</h2>

        <div className="sk-profile-grid">
          {/* USER CARD */}
          <div className="sk-profile-card sk-profile-user-card">
            <img
              src="https://i.pravatar.cc/150"
              alt="User"
              className="sk-profile-avatar"
            />
            <h3 className="sk-profile-name">{profile.name}</h3>
            <p className="sk-profile-email">{profile.email}</p>
            <p className="sk-profile-phone">{profile.phone}</p>

            {!isEditing && (
              <button
                className="sk-profile-btn-primary"
                onClick={() => setIsEditing(true)}
              >
                Edit Profile
              </button>
            )}
          </div>

          {/* ACCOUNT DETAILS */}
          <div className="sk-profile-card">
            <h4 className="sk-profile-card-title">Account details</h4>

            <label className="sk-profile-label">Full Name</label>
            <input
              className="sk-profile-input"
              name="name"
              value={profile.name}
              onChange={handleChange}
              readOnly={!isEditing}
            />

            <label className="sk-profile-label">Email</label>
            <input
              className="sk-profile-input"
              name="email"
              value={profile.email}
              onChange={handleChange}
              readOnly={!isEditing}
            />

            <label className="sk-profile-label">Mobile Number</label>
            <input
              className="sk-profile-input"
              name="phone"
              value={profile.phone}
              onChange={handleChange}
              readOnly={!isEditing}
            />

            <label className="sk-profile-label">Password</label>
            <input
              type="password"
              className="sk-profile-input"
              name="password"
              value={profile.password}
              onChange={handleChange}
              readOnly={!isEditing}
            />

            {isEditing && (
              <button
                className="sk-profile-btn-primary sk-profile-btn-full"
                onClick={handleSave}
              >
                Save Changes
              </button>
            )}
          </div>

          {/* ADDRESS */}
          <div className="sk-profile-card">
            <h4 className="sk-profile-card-title">Address management</h4>

            <div className="sk-profile-address-box">
              <strong>Home Address</strong>
              <p>123 Anderson Street, Kanoshine, NJ 92000</p>
            </div>

            <div className="sk-profile-address-box">
              <strong>Office Address</strong>
              <p>456 Business Ave, Kanoshine, NJ 92000</p>
            </div>

            <button
              className="sk-profile-btn-primary sk-profile-btn-full"
              onClick={() => navigate("/profilehome")}
            >
              Add New Address
            </button>
          </div>

          {/* ORDERS */}
          <div className="sk-profile-card">
            <h4 className="sk-profile-card-title">Order & account info</h4>

            <div className="sk-profile-order-row">
              <span>Order #531</span>
              <span className="sk-profile-status sk-profile-delivered">
                Delivered
              </span>
              <span>$120.00</span>
            </div>

            <div className="sk-profile-order-row">
              <span>Order #521</span>
              <span className="sk-profile-status sk-profile-delivered">
                Delivered
              </span>
              <span>$120.00</span>
            </div>

            <div className="sk-profile-order-row">
              <span>Order #453</span>
              <span className="sk-profile-status sk-profile-processing">
                Processing
              </span>
              <span>$250.00</span>
            </div>

            <div className="sk-profile-account-status">
              <strong>Account Status</strong>
              <span className="sk-profile-active">Active</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
