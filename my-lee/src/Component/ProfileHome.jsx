import '../App.css'
import { useNavigate } from "react-router-dom";
import { CartContext } from './CartProvider';
import { useState } from 'react';  
import { useContext } from 'react'; 
const categories = [
  "All",
  "Audio",
  "Computer",
  "Phone",
  "Wearable",
  "Camera",
  "Tablet",
  "Gaming",
];

const products = [
  // AUDIO
  {
    id: 1,
    category: "Audio",
    brand: "SoundMax",
    name: "Wireless Headphones Pro",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1518441982176-0a9b87f0d3f0",
  },
  {
    id: 2,
    category: "Audio",
    brand: "BoomBox",
    name: "Portable Bluetooth Speaker",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1518441902117-f7a57087c9a9",
  },

  // COMPUTERS
  {
    id: 3,
    category: "Computer",
    brand: "TechPro",
    name: "Ultra Slim Laptop",
    price: 999.99,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
  },
  {
    id: 4,
    category: "Computer",
    brand: "GameTech",
    name: "Gaming Laptop",
    price: 1299.99,
    image: "https://images.unsplash.com/photo-1602080858428-57174f9431cf",
  },

  // PHONES
  {
    id: 5,
    category: "Phone",
    brand: "MobileTech",
    name: "Smartphone X12",
    price: 799.99,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
  },
  {
    id: 6,
    category: "Phone",
    brand: "FlexTech",
    name: "Foldable Phone",
    price: 1299.99,
    image: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7",
  },

  // WEARABLES
  {
    id: 7,
    category: "Wearable",
    brand: "FitTech",
    name: "Smart Watch Elite",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
  },
  {
    id: 8,
    category: "Wearable",
    brand: "HealthMax",
    name: "Fitness Band",
    price: 99.99,
    image: "https://images.unsplash.com/photo-1557935728-e6d1eaabe558",
  },

  // CAMERAS
  {
    id: 9,
    category: "Camera",
    brand: "PhotoPro",
    name: "DSLR Camera Pro",
    price: 899.99,
    image: "https://images.unsplash.com/photo-1519183071298-a2962eadcdb2",
  },
  {
    id: 10,
    category: "Camera",
    brand: "ActionX",
    name: "Action Camera",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1508898578281-774ac4893c0a",
  },

  // TABLETS
  {
    id: 11,
    category: "Tablet",
    brand: "TabWorld",
    name: "Tablet Pro 12",
    price: 799.99,
    image: "https://images.unsplash.com/photo-1542751110-97427bbecf20",
  },
  {
    id: 12,
    category: "Tablet",
    brand: "MiniTab",
    name: "Mini Tablet",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
  },

  // GAMING
  {
    id: 13,
    category: "Gaming",
    brand: "GameX",
    name: "Gaming Console Pro",
    price: 499.99,
    image: "https://images.unsplash.com/photo-1606813909355-d3c7c1db45d3",
  },
  {
    id: 14,
    category: "Gaming",
    brand: "ComfortPlay",
    name: "Gaming Chair",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1598550476439-6847785fcea6",
  },
];

export default function ProfileHome() {
    const navigate = useNavigate();
    const { addToCart } = useContext(CartContext); 
    const categoryRoutes = {
    All: "/",
    Audio: "/audio",
    Computer: "/computer",
    Phone: "/phone",
    Wearable: "/wearable",
    Camera: "/camera",
    Tablet: "/tablet",
    Gaming: "/gaming",
  };

  return (
    <div className="home-page">
      {/* NAVBAR */}
      <header className="navbar">
        <div className="logo">📦 ShopKart</div>
        <input className="search" placeholder="Search products..." />
        <button
  className="btn primary"
  onClick={() => navigate("/profile")}
>
  UserProfile
</button>

      </header>

      {/* HERO */}
      <section className="hero">
        <h1>Welcome to ShopKart</h1>
        <p>Discover amazing products at great prices</p>
      </section>

       {/* CATEGORIES */}
      <section className="categories">
        {categories.map((cat) => (
          <button
            key={cat}
            className="chip"
            onClick={() => navigate(categoryRoutes[cat])}
          >
            {cat}
          </button>
        ))}
      </section>

      {/* PRODUCTS */}
      <section className="products">
        <h2>All Products</h2>

        <div className="grid">
          {products.map((p) => (
            <div key={p.id} className="card">
              <img src={p.image} alt={p.name} />
              <div className="card-body">
                <small>{p.brand}</small>
                <h4>{p.name}</h4>
                <p className="price">${p.price}</p>
                <button
  className="btn primary full"
  onClick={() => {
    addToCart(p);      // ✅ add clicked product
    navigate("/cart"); // ✅ go to Shopping.jsx
  }}
>
  🛒 Add to Cart
</button>


              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        © 2026 ShopKart. All rights reserved.
      </footer>
    </div>
  );
}
