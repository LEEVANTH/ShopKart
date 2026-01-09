import "../App.css";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../Component/CartProvider";
import { useContext } from "react";
const audioProducts = [
  {
    id: 1,
    name: "Wireless Headphones Pro",
    brand: "SoundMax",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1518441982176-0a9b87f0d3f0",
  },
  {
    id: 2,
    name: "Noise Cancelling Headphones",
    brand: "AudioPlus",
    price: 249.99,
    image: "https://images.unsplash.com/photo-1585386959984-a4155224a1b1",
  },
  {
    id: 3,
    name: "Bluetooth Earbuds",
    brand: "BeatX",
    price: 99.99,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df",
  },
  {
    id: 4,
    name: "Over-Ear Studio Headphones",
    brand: "StudioSound",
    price: 179.99,
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d",
  },
  {
    id: 5,
    name: "Portable Bluetooth Speaker",
    brand: "BoomBox",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1518441902117-f7a57087c9a9",
  },
  {
    id: 6,
    name: "Soundbar Speaker",
    brand: "HomeSound",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1592928302636-c83cf1e1c6a7",
  },
  {
    id: 7,
    name: "Gaming Headset",
    brand: "GameAudio",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1599669454699-248893623440",
  },
  {
    id: 8,
    name: "True Wireless Earbuds",
    brand: "AirBeats",
    price: 119.99,
    image: "https://images.unsplash.com/photo-1606220838315-056192d5e927",
  },
  {
    id: 9,
    name: "DJ Headphones",
    brand: "ProDJ",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
  },
  {
    id: 10,
    name: "Smart Home Speaker",
    brand: "VoiceSound",
    price: 159.99,
    image: "https://images.unsplash.com/photo-1585386959984-a4155224a1b1",
  },
];

export default function Audio() {
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  return (
    <div className="content">
      <h1>Audio Products</h1>
      <p>Explore our best audio devices</p>
       <button className="back-btn" onClick={() => navigate("/profilehome")}>
          ← Back
        </button>
      <div className="grid">
        {audioProducts.map((product) => (
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