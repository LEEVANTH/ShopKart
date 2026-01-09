import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const Orders = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("all");

  const orders = JSON.parse(localStorage.getItem("orders")) || [];

  // Filter orders by tab
  const filteredOrders = orders.filter((order) => {
  if (activeTab === "all") return true;
  if (activeTab === "active") return order.status === "Shipped";
  if (activeTab === "delivered") return order.status === "Delivered";
  return true;
});


  return (
    <div className="orders-page">
      {/* HEADER */}
      <div className="orders-header">
        <h2>My Orders</h2>

        <div className="orders-tabs">
          <button
            className={activeTab === "all" ? "active" : ""}
            onClick={() => setActiveTab("all")}
          >
            All Orders
          </button>
          <button
            className={activeTab === "active" ? "active" : ""}
            onClick={() => setActiveTab("active")}
          >
            Active
          </button>
          <button
            className={activeTab === "delivered" ? "active" : ""}
            onClick={() => setActiveTab("delivered")}
          >
            Delivered
          </button>
        </div>
      </div>

      {/* ORDERS LIST */}
      <div className="orders-list">
        {filteredOrders.length === 0 && (
          <p className="empty-text">No orders found</p>
        )}

        {filteredOrders.map((order, index) => (
          <div key={index} className="order-item">
            <div className="order-left">
              <h4>{order.orderNumber}</h4>
              <p className="order-date">{order.date}</p>

              <div className="order-images">
                {order.items.slice(0, 3).map((item, i) => (
                  <img key={i} src={item.image} alt={item.name} />
                ))}
              </div>

              <p className="order-items">
                {order.items.length} item(s)
              </p>

              <p className="order-price">
                ${order.total.toFixed(2)}
              </p>
            </div>

            <div className="order-right">
              <span
                className={`order-status ${
                  order.status === "Delivered"
                    ? "delivered"
                    : "shipped"
                }`}
              >
                {order.status}
              </span>

              <button
                className="view-details"
                onClick={() =>
                  alert("Order details page coming next 😉")
                }
              >
                View Details →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
