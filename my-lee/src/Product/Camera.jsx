import "../App.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../Component/CartProvider";
const cameraProducts = [
  {
    id: 1,
    name: "DSLR Camera Pro",
    brand: "PhotoPro",
    price: 899.99,
    image: "https://images.unsplash.com/photo-1519183071298-a2962eadcdb2",
  },
  {
    id: 2,
    name: "Mirrorless Camera",
    brand: "LensMaster",
    price: 1099.99,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
  },
  {
    id: 3,
    name: "Compact Digital Camera",
    brand: "SnapShot",
    price: 399.99,
    image: "https://images.unsplash.com/photo-1510127034890-ba27508e9f1c",
  },
  {
    id: 4,
    name: "Professional DSLR",
    brand: "ProLens",
    price: 1499.99,
    image: "https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0",
  },
  {
    id: 5,
    name: "Action Camera",
    brand: "ActionX",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1508898578281-774ac4893c0a",
  },
  {
    id: 6,
    name: "Vlogging Camera",
    brand: "VlogPro",
    price: 649.99,
    image: "https://images.unsplash.com/photo-1519181245277-cffeb31da2fb",
  },
  {
    id: 7,
    name: "Bridge Camera",
    brand: "ZoomTech",
    price: 549.99,
    image: "https://images.unsplash.com/photo-1519183071298-a2962eadcdb2",
  },
  {
    id: 8,
    name: "360° Camera",
    brand: "Vision360",
    price: 479.99,
    image: "https://images.unsplash.com/photo-1519183071298-a2962eadcdb2",
  },
  {
    id: 9,
    name: "Security Camera",
    brand: "SafeCam",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc",
  },
  {
    id: 10,
    name: "Instant Camera",
    brand: "InstaPic",
    price: 249.99,
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",
  },
];

export default function Camera() {
  const navigate = useNavigate();
    const { addToCart } = useContext(CartContext);
  return (
    <div className="content">
      <h1>Camera Products</h1>
      <p>Explore our cameras and photography gear</p>
      <button className="back-btn" onClick={() => navigate("/profilehome")}>
          ← Back
        </button>
      <div className="grid">
        {cameraProducts.map((product) => (
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