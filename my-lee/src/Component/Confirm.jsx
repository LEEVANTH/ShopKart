import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../App.css";

const Confirm = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // ✅ Get orderNumber from navigation
  const { orderNumber } = location.state || {};

  // ✅ Read saved orders
  const orders = JSON.parse(localStorage.getItem("orders")) || [];

  // ✅ Find matching order
  const order = orders.find(
    (o) => o.orderNumber === orderNumber
  );

  // ❌ Safety check
  if (!order) {
    return (
      <div className="checkout-container empty">
        <h2>No order found</h2>
        <button onClick={() => navigate("/cart")}>
          Go Back to Cart
        </button>
      </div>
    );
  }

  return (
    <div className="confirm-container">
      <div className="confirm-card">
        <div className="success-icon">✓</div>

        <h2>Order Placed Successfully!</h2>
        <p>
          Thank you for your purchase. Your order has been confirmed.
        </p>

        <div className="order-box">
          <span>Order Number</span>
          <strong>{order.orderNumber}</strong>
        </div>

        <p className="delivery-text">
          📦 Estimated delivery: 3–5 business days
        </p>

        <div className="confirm-actions">
          <button
            className="primary-btn"
            onClick={() => navigate("/orders")}
          >
            View My Orders →
          </button>

          <button
            className="secondary-btn"
            onClick={() => navigate("/profilehome")}
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default Confirm;
