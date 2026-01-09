import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../App.css";

const Review = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { items, shippingDetails, paymentMethod } =
    location.state || {};

  if (!items || items.length === 0) {
    return (
      <div className="checkout-container empty">
        <h2>No order found</h2>
        <button onClick={() => navigate("/cart")}>
          Go Back to Cart
        </button>
      </div>
    );
  }

  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );
  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  // ✅ PLACE ORDER HERE (ONLY ONCE)
  const placeOrder = () => {
    const orderNumber = "ORD-" + Date.now();

    const newOrder = {
      orderNumber,
      date: new Date().toLocaleDateString(),
      items,
      total,
      status: "Shipped",
    };

    const existingOrders =
      JSON.parse(localStorage.getItem("orders")) || [];

    localStorage.setItem(
      "orders",
      JSON.stringify([...existingOrders, newOrder])
    );

    navigate("/confirm", {
      state: { orderNumber },
    });
  };

  return (
    <div className="checkout-container">
      {/* STEPS */}
      <div className="checkout-steps">
        <div className="step completed">Shipping</div>
        <div className="step completed">Payment</div>
        <div className="step active">Confirm</div>
      </div>

      <div className="checkout-content">
        {/* LEFT */}
        <div className="shipping-box">
          <h2>Review Your Order</h2>

          <h4>Shipping Address</h4>
          <p>
            {shippingDetails?.fullName}<br />
            {shippingDetails?.address}<br />
            {shippingDetails?.city}, {shippingDetails?.zip}<br />
            {shippingDetails?.phone}
          </p>

          <hr />

          <h4>Payment Method</h4>
          <p>
            {paymentMethod === "card"
              ? "Credit / Debit Card"
              : "Cash on Delivery"}
          </p>

          <hr />

          <h4>Items ({items.length})</h4>
          {items.map((item) => (
            <div key={item.id} className="review-row">
              <span>
                {item.name} x{item.qty}
              </span>
              <span>
                ${(item.price * item.qty).toFixed(2)}
              </span>
            </div>
          ))}

          <button className="payment-btn" onClick={placeOrder}>
            Place Order – ${total.toFixed(2)}
          </button>
        </div>

        {/* RIGHT */}
        <div className="summary-box">
          <h3>Order Summary</h3>

          {items.map((item) => (
            <div key={item.id} className="summary-item">
              <img src={item.image} alt={item.name} />
              <div>
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
            <span>FREE</span>
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

export default Review;
