import "../App.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../Component/CartProvider";
const gamingProducts = [
  {
    id: 1,
    name: "Gaming Console Pro",
    brand: "GameX",
    price: 499.99,
    image: "https://images.unsplash.com/photo-1606813909355-d3c7c1db45d3",
  },
  {
    id: 2,
    name: "Next-Gen Gaming Console",
    brand: "NextPlay",
    price: 599.99,
    image: "https://images.unsplash.com/photo-1606813909355-d3c7c1db45d3",
  },
  {
    id: 3,
    name: "Gaming Controller",
    brand: "ControlPro",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1605902711622-cfb43c44367f",
  },
  {
    id: 4,
    name: "Mechanical Gaming Keyboard",
    brand: "KeyMaster",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1593642634367-d91a135587b5",
  },
  {
    id: 5,
    name: "RGB Gaming Mouse",
    brand: "SpeedX",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae",
  },
  {
    id: 6,
    name: "Gaming Headset",
    brand: "SoundStrike",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1599669454699-248893623440",
  },
  {
    id: 7,
    name: "VR Headset",
    brand: "VirtualPlay",
    price: 399.99,
    image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620",
  },
  {
    id: 8,
    name: "Racing Wheel Controller",
    brand: "DriveX",
    price: 249.99,
    image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7",
  },
  {
    id: 9,
    name: "Gaming Chair",
    brand: "ComfortPlay",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1598550476439-6847785fcea6",
  },
  {
    id: 10,
    name: "Handheld Gaming Console",
    brand: "PocketPlay",
    price: 349.99,
    image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04",
  },
];

export default function Gaming() {
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  return (
    <div className="content">
      <h1>Gaming Products</h1>
      <p>Explore our gaming consoles, accessories, and gear</p>
      <button className="back-btn" onClick={() => navigate("/profilehome")}>
          ← Back
        </button>
      <div className="grid">
        {gamingProducts.map((product) => (
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