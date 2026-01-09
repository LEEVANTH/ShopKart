import React, { useContext, useState } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";
import { CartContext } from "./CartProvider";

export default function Shopping() {
  
  const navigate = useNavigate();
 const {
  cartItems,
  removeFromCart,
  increaseQty,
  decreaseQty,
} = useContext(CartContext);


  // ✅ Track selected items
  const [selectedItems, setSelectedItems] = useState([]);

  // ----- SELECT / DESELECT PRODUCT -----
  const toggleSelect = (item) => {
    setSelectedItems((prev) => {
      const exists = prev.find((i) => i.id === item.id);
      if (exists) {
        return prev.filter((i) => i.id !== item.id);
      } else {
        return [...prev, item];
      }
    });
  };

  // ----- CALCULATIONS (ONLY SELECTED ITEMS) -----
  const subtotal = selectedItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );
  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  // ----- CHECKOUT -----
  const proceedToCheckout = () => {
    if (selectedItems.length === 0) {
      alert("Please select at least one product");
      return;
    }
    navigate("/checkout", { state: { items: selectedItems } });
  };

  return (
    <div className="sk-cart-page">
      {/* ===== NAVBAR ===== */}
      <header className="sk-cart-navbar">
        <div className="sk-cart-logo">🛒 <span>ShopKart</span></div>
        <input className="sk-cart-search" placeholder="Search products..." />
        <button className="sk-cart-login-btn">Login</button>
      </header>

      {/* ===== CONTENT ===== */}
      <div className="sk-cart-content">
        <span className="sk-cart-back" onClick={() => navigate("/profilehome")}>
          ← Continue Shopping
        </span>

        <h2 className="sk-cart-title">Shopping Cart</h2>

        <div className="sk-cart-layout">
          {/* ===== CART ITEMS ===== */}
          <div className="sk-cart-items">
            {cartItems.length === 0 && <p>Your cart is empty</p>}

            {cartItems.map((item) => {
              const isSelected = selectedItems.some((i) => i.id === item.id);

              return (
                <div
                  key={item.id}
                  className={`sk-cart-item ${isSelected ? "selected" : ""}`}
                  onClick={() => toggleSelect(item)}
                >
                  <img src={item.image} alt={item.name} />

                  <div className="sk-cart-item-info">
                    <h4>{item.name}</h4>
                    <p>{item.brand}</p>
                    <strong>${item.price}</strong>
                  </div>

                 <div
  className="sk-cart-qty"
  onClick={(e) => e.stopPropagation()}
>
  <button
    className="qty-btn"
    onClick={() => decreaseQty(item.id)}
  >
    −
  </button>

  <span className="qty-value">{item.qty}</span>

  <button
    className="qty-btn"
    onClick={() => increaseQty(item.id)}
  >
    +
  </button>
</div>


                  <span
                    className="sk-cart-remove"
                    onClick={(e) => {
                      e.stopPropagation();
                      removeFromCart(item.id);
                      setSelectedItems((prev) =>
                        prev.filter((i) => i.id !== item.id)
                      );
                    }}
                  >
                    🗑
                  </span>
                </div>
              );
            })}
          </div>

          {/* ===== ORDER SUMMARY ===== */}
          <div className="sk-cart-summary">
            <h4>Order Summary</h4>

            {selectedItems.length === 0 && (
              <p className="sk-cart-empty">Select products to view summary</p>
            )}

            {selectedItems.map((item) => (
              <div key={item.id} className="sk-cart-row">
                <span>{item.name} (x{item.qty})</span>
                <span>${(item.price * item.qty).toFixed(2)}</span>
              </div>
            ))}

            <hr />

            <div className="sk-cart-row">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>

            <div className="sk-cart-row">
              <span>Tax (8%)</span>
              <span>${tax.toFixed(2)}</span>
            </div>

            <div className="sk-cart-row">
              <span>Shipping</span>
              <span>FREE</span>
            </div>

            <hr />

            <div className="sk-cart-total">
              <span>Total</span>
              <strong>${total.toFixed(2)}</strong>
            </div>

            <button
              className="sk-cart-checkout"
              onClick={proceedToCheckout}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
