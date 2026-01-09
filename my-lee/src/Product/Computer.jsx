import "../App.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../Component/CartProvider";
const computerProducts = [
  {
    id: 1,
    name: "Ultra Slim Laptop",
    brand: "TechPro",
    price: 999.99,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
  },
  {
    id: 2,
    name: "Gaming Laptop",
    brand: "GameTech",
    price: 1299.99,
    image: "https://images.unsplash.com/photo-1602080858428-57174f9431cf",
  },
  {
    id: 3,
    name: "All-in-One PC",
    brand: "OfficeMax",
    price: 899.99,
    image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04",
  },
  {
    id: 4,
    name: "Desktop Computer",
    brand: "PowerPC",
    price: 799.99,
    image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7",
  },
  {
    id: 5,
    name: "Business Laptop",
    brand: "ThinkCore",
    price: 1099.99,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
  },
  {
    id: 6,
    name: "Mini PC",
    brand: "CompactTech",
    price: 499.99,
    image: "https://images.unsplash.com/photo-1593642533144-3d62aa4783ec",
  },
  {
    id: 7,
    name: "Workstation PC",
    brand: "ProStation",
    price: 1599.99,
    image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2",
  },
  {
    id: 8,
    name: "Chromebook Laptop",
    brand: "ChromePlus",
    price: 399.99,
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
  },
  {
    id: 9,
    name: "Student Laptop",
    brand: "EduTech",
    price: 649.99,
    image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f",
  },
  {
    id: 10,
    name: "High-End Gaming PC",
    brand: "UltraGame",
    price: 1899.99,
    image: "https://images.unsplash.com/photo-1587831990711-23ca6441447b",
  },
];

export default function Computer() {
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  return (
    <div className="content">
      <h1>Computer Products</h1>
       <button className="back-btn" onClick={() => navigate("/profilehome")}>
          ← Back
        </button>
      <div className="grid">
        {computerProducts.map((product) => (
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