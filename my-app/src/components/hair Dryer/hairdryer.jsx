import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import "./HairDryer.css";

export default function HairDryer() {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  /* =========================
     HAIR DRYER PRODUCTS
  ========================= */
  const dryers = [
    {
      id: 1,
      name: "Pro 2200W Salon Hair Dryer",
      price: 2499,
      img: "https://pngimg.com/uploads/hair_dryer/hair_dryer_PNG34.png",
    },
    {
      id: 2,
      name: "Compact Travel Hair Dryer",
      price: 1299,
      img: "https://pngimg.com/uploads/hair_dryer/hair_dryer_PNG20.png",
    },
    {
      id: 3,
      name: "Ionic Fast Dry Hair Dryer",
      price: 1999,
      img: "https://pngimg.com/uploads/hair_dryer/hair_dryer_PNG18.png",
    },
    {
      id: 4,
      name: "Foldable Mini Hair Dryer",
      price: 999,
      img: "https://pngimg.com/uploads/hair_dryer/hair_dryer_PNG22.png",
    },
    {
      id: 5,
      name: "Luxury Ceramic Styling Dryer",
      price: 3499,
      img: "https://pngimg.com/uploads/hair_dryer/hair_dryer_PNG36.png",
    },
    {
      id: 6,
      name: "Professional Turbo Power Dryer",
      price: 2899,
      img: "https://pngimg.com/uploads/hair_dryer/hair_dryer_PNG40.png",
    },
  ];

  /* =========================
     FUNCTIONS
  ========================= */

  const viewDetails = (id) => {
    navigate(`/hair-dryer/${id}`);
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
    <section className="dryer">
      <h2 className="dryer-title">Hair Dryers</h2>

      <div className="dryer-grid">
        {dryers.map((item) => (
          <div key={item.id} className="dryer-card">

            <img
              src={item.img}
              alt={item.name}
              className="dryer-img"
              onClick={() => viewDetails(item.id)}
              style={{ cursor: "pointer" }}
            />

            <h3 onClick={() => viewDetails(item.id)} style={{ cursor: "pointer" }}>
              {item.name}
            </h3>

            <p className="dryer-price">{formatPrice(item.price)}</p>

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
