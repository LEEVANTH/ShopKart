import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../App.css";

const Payment = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const items = location.state?.items || [];
  const shippingDetails = location.state?.shippingDetails;

  const [paymentMethod, setPaymentMethod] = useState("cod");

  const [card, setCard] = useState({
    number: "",
    name: "",
    expiry: "",
    cvv: "",
  });

  const handleCardChange = (e) => {
    setCard({ ...card, [e.target.name]: e.target.value });
  };

  // Safety check
  if (items.length === 0) {
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

  // ✅ ONLY NAVIGATION (NO SAVE HERE)
  const reviewOrder = () => {
    if (paymentMethod === "card") {
      if (!card.number || !card.name || !card.expiry || !card.cvv) {
        alert("Please fill all card details");
        return;
      }
    }

    navigate("/review", {
      state: {
        items,
        shippingDetails,
        paymentMethod,
      },
    });
  };

  return (
    <div className="checkout-container">
      {/* HEADER */}
      <div className="checkout-header">
        <button className="back-btn" onClick={() => navigate("/checkout")}>
          ← Back
        </button>
        <h2>Payment</h2>
      </div>

      {/* STEPS */}
      <div className="checkout-steps">
        <div className="step completed">Shipping</div>
        <div className="step active">Payment</div>
        <div className="step">Confirm</div>
      </div>

      <div className="checkout-content">
        {/* PAYMENT METHOD */}
        <div className="shipping-box">
          <h3>Payment Method</h3>

          <label className="payment-option">
            <input
              type="radio"
              checked={paymentMethod === "card"}
              onChange={() => setPaymentMethod("card")}
            />
            💳 Credit / Debit Card
          </label>

          {paymentMethod === "card" && (
            <div className="card-form">
              <input
                type="text"
                name="number"
                placeholder="Card Number"
                value={card.number}
                onChange={handleCardChange}
              />
              <input
                type="text"
                name="name"
                placeholder="Name on card"
                value={card.name}
                onChange={handleCardChange}
              />
              <input
                type="text"
                name="expiry"
                placeholder="MM/YY"
                value={card.expiry}
                onChange={handleCardChange}
              />
              <input
                type="password"
                name="cvv"
                placeholder="CVV"
                value={card.cvv}
                onChange={handleCardChange}
              />
            </div>
          )}

          <label className="payment-option">
            <input
              type="radio"
              checked={paymentMethod === "cod"}
              onChange={() => setPaymentMethod("cod")}
            />
            🚚 Cash on Delivery
          </label>

          <button className="payment-btn" onClick={reviewOrder}>
            Review Order
          </button>
        </div>

        {/* ORDER SUMMARY */}
        <div className="summary-box">
          <h3>Order Summary</h3>

          {items.map((item) => (
            <div key={item.id} className="summary-item">
              <img src={item.image} alt={item.name} />
              <div>
                <p>{item.name}</p>
                <small>Qty: {item.qty}</small>
              </div>
              <span>${(item.price * item.qty).toFixed(2)}</span>
            </div>
          ))}

          <div className="summary-total">
            <strong>Total</strong>
            <strong>${total.toFixed(2)}</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
