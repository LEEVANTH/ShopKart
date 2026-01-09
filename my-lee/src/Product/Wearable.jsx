import "../App.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../Component/CartProvider";
const wearableProducts = [
  {
    id: 1,
    name: "Smart Watch Pro",
    brand: "FitTech",
    price: 249.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
  },
  {
    id: 2,
    name: "Fitness Band Plus",
    brand: "HealthMax",
    price: 99.99,
    image: "https://images.unsplash.com/photo-1557935728-e6d1eaabe558",
  },
  {
    id: 3,
    name: "Smart Watch Lite",
    brand: "WearPro",
    price: 179.99,
    image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1",
  },
  {
    id: 4,
    name: "Advanced Fitness Tracker",
    brand: "FitLife",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a",
  },
  {
    id: 5,
    name: "Luxury Smart Watch",
    brand: "EliteWear",
    price: 399.99,
    image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b",
  },
  {
    id: 6,
    name: "Kids Smart Watch",
    brand: "SafeWatch",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1526045612212-70caf35c14df",
  },
  {
    id: 7,
    name: "Rugged Sports Watch",
    brand: "OutdoorX",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1544117519-31a4b719223d",
  },
  {
    id: 8,
    name: "Heart Rate Monitor Band",
    brand: "PulseFit",
    price: 109.99,
    image: "https://images.unsplash.com/photo-1510017803434-a899398421b3",
  },
  {
    id: 9,
    name: "Smart Glasses",
    brand: "VisionWear",
    price: 499.99,
    image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b",
  },
  {
    id: 10,
    name: "Sleep Tracker Ring",
    brand: "SleepWell",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1606312619070-d48b4c652a52",
  },
];

export default function Wearable() {
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  return (
    <div className="content">
      <h1>Wearable Products</h1>
      <p>Explore our smart wearables and fitness devices</p>
       <button className="back-btn" onClick={() => navigate("/profilehome")}>
          ← Back
        </button>
      <div className="grid">
        {wearableProducts.map((product) => (
           <div key={product.id} className="card">
            <img src={product.image} alt={product.name} />

            <div className="card-body">
              <small>{product.brand}</small>
              <h4>{product.name}</h4>
              <p className="price">${product.price}</p>

              <button
                className="btn primary full"
                onClick={() => {
                  addToCart(product);
                  navigate("/cart");
                }}
              >
                🛒 Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}