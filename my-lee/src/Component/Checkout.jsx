import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../App.css";

const Checkout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // ✅ Products coming from cart
  const items = location.state?.items || [];

  // ✅ Shipping form
  const [form, setForm] = useState({
    fullName: "Madhan P",
    phone: "9345455252",
    address: "myleripalayam",
    city: "coimbatore",
    zip: "641032",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ✅ Calculations
  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );
  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  // ❗ If user refreshes page
  if (items.length === 0) {
    return (
      <div className="checkout-container empty">
        <h2>No products selected</h2>
        <button onClick={() => navigate("/cart")}>
          Go Back to Cart
        </button>
      </div>
    );
  }

  return (
    <div className="checkout-container">
      {/* ===== HEADER ===== */}
      <div className="checkout-header">
        <button className="back-btn" onClick={() => navigate("/cart")}>
          ← Back
        </button>
        <h2>Checkout</h2>
      </div>

      {/* ===== STEPS ===== */}
      <div className="checkout-steps">
        <div className="step active">Shipping</div>
        <div className="step">Payment</div>
        <div className="step">Confirm</div>
      </div>

      <div className="checkout-content">
        {/* ===== SHIPPING ===== */}
        <div className="shipping-box">
          <h3>Shipping Address</h3>

          <div className="form-row">
            <div className="form-group">
              <label>Full Name</label>
              <input
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Phone Number</label>
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-group">
            <label>Street Address</label>
            <input
              name="address"
              value={form.address}
              onChange={handleChange}
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>City</label>
              <input
                name="city"
                value={form.city}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>ZIP Code</label>
              <input
                name="zip"
                value={form.zip}
                onChange={handleChange}
              />
            </div>
          </div>

          <button
  className="payment-btn"
  onClick={() =>
    navigate("/payment", {
      state: {
        items,
        shippingDetails: form
      }
    })
  }
>
  Continue to Payment
</button>

        </div>

        {/* ===== ORDER SUMMARY ===== */}
        <div className="summary-box">
          <h3>Order Summary</h3>

          {items.map((item) => (
            <div key={item.id} className="summary-item">
              <img src={item.image} alt={item.name} />
              <div className="summary-info">
                <p>{item.name}</p>
                <small>Qty: {item.qty}</small>
              </div>
              <span>
                ${(item.price * item.qty).toFixed(2)}
              </span>
            </div>
          ))}

          <hr />

          <div className="summary-row">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>

          <div className="summary-row">
            <span>Tax (8%)</span>
            <span>${tax.toFixed(2)}</span>
          </div>

          <div className="summary-row">
            <span>Shipping</span>
            <span className="free">FREE</span>
          </div>

          <hr />

          <div className="summary-total">
            <strong>Total</strong>
            <strong>${total.toFixed(2)}</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
