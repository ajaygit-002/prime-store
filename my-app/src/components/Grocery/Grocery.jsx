import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import "./Grocery.css";

export default function Grocery() {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  /* =========================
     GROCERY PRODUCTS
  ========================= */
  const groceries = [
    {
      id: 1,
      name: "Fresh Farm Rice (5kg)",
      price: 349,
      img: "https://pngimg.com/uploads/rice/rice_PNG17.png",
    },
    {
      id: 2,
      name: "Sunflower Cooking Oil (1L)",
      price: 149,
      img: "https://pngimg.com/uploads/oil/oil_PNG9.png",
    },
    {
      id: 3,
      name: "Mixed Vegetables Combo Pack",
      price: 199,
      img: "https://rukminim2.flixcart.com/image/832/832/xif0q/edible-seed/v/m/z/500-combo-of-all-edible-seeds-pack-raw-chia-pumpkin-sunflower-original-imahg8znntzasheq.jpeg?q=70&crop=false",
    },
    {
      id: 4,
      name: "Premium Basmati Rice (10kg)",
      price: 899,
      img: "https://pngimg.com/uploads/rice/rice_PNG5.png",
    },
    {
      id: 5,
      name: "Potato Chips Family Pack",
      price: 99,
      img: "https://rukminim2.flixcart.com/image/832/832/xif0q/shopsy-chips/y/g/w/0-27-potato-crisps-on-the-go-adventure-indie-masala-chips-pack-original-imah3jangzjsgxna.jpeg?q=70&crop=false",
    },
    {
      id: 6,
      name: "Organic Toor Dal (1kg)",
      price: 159,
      img: "https://rukminim2.flixcart.com/image/832/832/xif0q/pulses/k/9/5/1-organic-toor-dal-100-pure-premium-quality-1-toor-dal-green-original-imagqggunzh9tn4f.jpeg?q=70&crop=false",
    },
  ];

  /* =========================
     FUNCTIONS
  ========================= */

  const viewDetails = (id) => {
    navigate(`/grocery/${id}`);
  };

  const handleAddToCart = (item) => {
    addToCart(item);
    navigate("/cart");
  };

  const formatPrice = (price) => {
    return `₹${price.toLocaleString()}`;
  };

  /* =========================
     UI
  ========================= */

  return (
    <section className="grocery">
      <h2 className="grocery-title">Grocery & Essentials</h2>

      <div className="grocery-grid">
        {groceries.map((item) => (
          <div key={item.id} className="grocery-card">

            <img
              src={item.img}
              alt={item.name}
              className="grocery-img"
              onClick={() => viewDetails(item.id)}
              style={{ cursor: "pointer" }}
            />

            <h3 onClick={() => viewDetails(item.id)} style={{ cursor: "pointer" }}>
              {item.name}
            </h3>

            <p className="grocery-price">{formatPrice(item.price)}</p>

            <div className="product-buttons">
              <button className="view-btn" onClick={() => viewDetails(item.id)}>
                View Details
              </button>
              <button className="cart-btn" onClick={() => handleAddToCart(item)}>
                Add to Cart
              </button>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
