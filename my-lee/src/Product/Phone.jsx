import "../App.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../Component/CartProvider";
const phoneProducts = [
  {
    id: 1,
    name: "Smartphone X Pro",
    brand: "MobileTech",
    price: 899.99,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
  },
  {
    id: 2,
    name: "Smartphone X Lite",
    brand: "MobileTech",
    price: 599.99,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
  },
  {
    id: 3,
    name: "Android One Plus",
    brand: "DroidMax",
    price: 699.99,
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97",
  },
  {
    id: 4,
    name: "iOS Flagship Phone",
    brand: "AppleX",
    price: 999.99,
    image: "https://images.unsplash.com/photo-1512499617640-c2f999098c01",
  },
  {
    id: 5,
    name: "Budget Android Phone",
    brand: "SmartDeal",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1556656793-08538906a9f8",
  },
  {
    id: 6,
    name: "Foldable Smartphone",
    brand: "FlexTech",
    price: 1299.99,
    image: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7",
  },
  {
    id: 7,
    name: "Gaming Smartphone",
    brand: "GameMobile",
    price: 899.99,
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97",
  },
  {
    id: 8,
    name: "Camera Phone Pro",
    brand: "PhotoMobile",
    price: 749.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
  },
  {
    id: 9,
    name: "5G Smartphone",
    brand: "NextGen",
    price: 699.99,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
  },
  {
    id: 10,
    name: "Compact Smartphone",
    brand: "MiniTech",
    price: 499.99,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
  },
];

export default function Phone() {
  const navigate = useNavigate();
    const { addToCart } = useContext(CartContext);
  
  return (
    <div className="content">
      <h1>Phone Products</h1>
      <p>Explore our latest smartphones</p>
      <button className="back-btn" onClick={() => navigate("/profilehome")}>
          ← Back
        </button>
       <div className="grid">
        {phoneProducts.map((product) => (
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