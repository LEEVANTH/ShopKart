import '../App.css'
import { useNavigate } from "react-router-dom";
import { useState } from 'react';   
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
    image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=800&q=80",
  },
  {
    id: 2,
    category: "Audio",
    brand: "BoomBox",
    name: "Portable Bluetooth Speaker",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800&q=80",
  },

  // COMPUTERS
  {
    id: 3,
    category: "Computer",
    brand: "TechPro",
    name: "Ultra Slim Laptop",
    price: 999.99,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&q=80",
  },
  {
    id: 4,
    category: "Computer",
    brand: "GameTech",
    name: "Gaming Laptop",
    price: 1299.99,
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=800&q=80",
  },

  // PHONES
  {
    id: 5,
    category: "Phone",
    brand: "MobileTech",
    name: "Smartphone X12",
    price: 799.99,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&q=80",
  },
  {
    id: 6,
    category: "Phone",
    brand: "FlexTech",
    name: "Foldable Phone",
    price: 1299.99,
    image: "https://images.unsplash.com/photo-1616348436168-de43ad0db179?w=800&q=80",
  },

  // WEARABLES
  {
    id: 7,
    category: "Wearable",
    brand: "FitTech",
    name: "Smart Watch Elite",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
  },
  {
    id: 8,
    category: "Wearable",
    brand: "HealthMax",
    name: "Fitness Band",
    price: 99.99,
    image: "https://images.unsplash.com/photo-1557935728-e6d1eaabe558?w=800&q=80",
  },

  // CAMERAS
  {
    id: 9,
    category: "Camera",
    brand: "PhotoPro",
    name: "DSLR Camera Pro",
    price: 899.99,
    image: "https://images.unsplash.com/photo-1519183071298-a2962eadcdb2?w=800&q=80",
  },
  {
    id: 10,
    category: "Camera",
    brand: "ActionX",
    name: "Action Camera",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1508898578281-774ac4893c0a?w=800&q=80",
  },

  // TABLETS
  {
    id: 11,
    category: "Tablet",
    brand: "TabWorld",
    name: "Tablet Pro 12",
    price: 799.99,
    image: "https://images.unsplash.com/photo-1486401899868-0e435ed85128?w=800&q=80",
  },
  {
    id: 12,
    category: "Tablet",
    brand: "MiniTab",
    name: "Mini Tablet",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800&q=80",
  },

  // GAMING
  {
    id: 13,
    category: "Gaming",
    brand: "GameX",
    name: "Gaming Console Pro",
    price: 499.99,
    image: "https://images.unsplash.com/photo-1616627988734-74a72b44f7f5?w=800&q=80",
  },
  {
    id: 14,
    category: "Gaming",
    brand: "ComfortPlay",
    name: "Gaming Chair",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=800&q=80",
  },
];


export default function HomeNew() {
    const navigate = useNavigate(); 
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
  onClick={() => navigate("/home")}
>
  Sign in / Sign up
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
                <button className="btn primary full">🛒 Add to Cart</button>
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
