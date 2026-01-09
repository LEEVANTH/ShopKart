import "../App.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../Component/CartProvider";
const tabletProducts = [
  {
    id: 1,
    name: "Tablet Pro 12",
    brand: "TabWorld",
    price: 799.99,
    image: "https://images.unsplash.com/photo-1542751110-97427bbecf20",
  },
  {
    id: 2,
    name: "Tablet Air",
    brand: "TabWorld",
    price: 599.99,
    image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04",
  },
  {
    id: 3,
    name: "Android Tablet Plus",
    brand: "DroidTab",
    price: 499.99,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
  },
  {
    id: 4,
    name: "Kids Learning Tablet",
    brand: "EduTab",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc",
  },
  {
    id: 5,
    name: "Business Tablet",
    brand: "OfficeTab",
    price: 649.99,
    image: "https://images.unsplash.com/photo-1512499617640-c2f999098c01",
  },
  {
    id: 6,
    name: "Gaming Tablet",
    brand: "GameTab",
    price: 699.99,
    image: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7",
  },
  {
    id: 7,
    name: "Student Tablet",
    brand: "StudyTab",
    price: 349.99,
    image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f",
  },
  {
    id: 8,
    name: "Drawing Tablet",
    brand: "ArtPad",
    price: 449.99,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
  },
  {
    id: 9,
    name: "Convertible Tablet",
    brand: "FlexiTab",
    price: 749.99,
    image: "https://images.unsplash.com/photo-1593642533144-3d62aa4783ec",
  },
  {
    id: 10,
    name: "Mini Tablet",
    brand: "MiniTab",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
  },
];

export default function Tablet() {
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  return (
    <div className="content">
      <h1>Tablet Products</h1>
      <p>Explore our latest tablets for work, play, and learning</p>
       <button className="back-btn" onClick={() => navigate("/profilehome")}>
          ← Back
        </button>
      <div className="grid">
        {tabletProducts.map((product) => (
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
