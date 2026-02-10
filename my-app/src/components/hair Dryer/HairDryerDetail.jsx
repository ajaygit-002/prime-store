import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import "./HairDryerDetail.css";

export default function HairDryerDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const dryers = [
    {
      id: 1,
      name: "Pro 2200W Salon Hair Dryer",
      price: 2499,
      img: "https://pngimg.com/uploads/hair_dryer/hair_dryer_PNG34.png",
      description: "Professional-grade high-power hair dryer",
      specs: [
        "2200W Power",
        "3 Heat Settings",
        "2 Speed Settings",
        "Ionic Technology",
        "Cool Shot Function",
        "2.5m Cord Length"
      ],
      details: "Professional salon-quality hair dryer perfect for quick drying and styling. Ionic technology reduces frizz and adds shine to your hair."
    },
    {
      id: 2,
      name: "Compact Travel Hair Dryer",
      price: 1299,
      img: "https://pngimg.com/uploads/hair_dryer/hair_dryer_PNG20.png",
      description: "Portable travel-friendly hair dryer",
      specs: [
        "1200W Power",
        "Compact Design",
        "Lightweight (350g)",
        "Dual Voltage (110-240V)",
        "Folding Handle",
        "Travel Pouch Included"
      ],
      details: "Perfect for travel and on-the-go drying. Lightweight and portable without compromising on drying power."
    },
    {
      id: 3,
      name: "Ionic Fast Dry Hair Dryer",
      price: 1999,
      img: "https://pngimg.com/uploads/hair_dryer/hair_dryer_PNG18.png",
      description: "Fast-drying ionic hair dryer with advanced technology",
      specs: [
        "1800W Power",
        "Advanced Ionic Technology",
        "3 Temperature Settings",
        "2 Speed Settings",
        "Anti-Static",
        "Diffuser Attachment"
      ],
      details: "Advanced ionic technology for faster drying and smoother hair. Reduces frizz and static, leaving hair shiny and healthy."
    },
    {
      id: 4,
      name: "Foldable Mini Hair Dryer",
      price: 999,
      img: "https://pngimg.com/uploads/hair_dryer/hair_dryer_PNG22.png",
      description: "Ultra-compact foldable hair dryer",
      specs: [
        "800W Power",
        "Foldable Design",
        "Ultra-light (250g)",
        "USB Rechargeable",
        "Portable Size",
        "3-hour Battery Life"
      ],
      details: "Smallest and lightest hair dryer available. Perfect for backpacking, camping, and travel. USB rechargeable for convenience."
    },
    {
      id: 5,
      name: "Luxury Ceramic Styling Dryer",
      price: 3499,
      img: "https://pngimg.com/uploads/hair_dryer/hair_dryer_PNG36.png",
      description: "Premium ceramic-coated styling hair dryer",
      specs: [
        "2000W Power",
        "Ceramic Coated",
        "Turbo Boost Mode",
        "Temperature Control",
        "Concentrator Nozzle",
        "Professional Brush"
      ],
      details: "Premium hair dryer with ceramic coating for gentler drying. Perfect for styling and achieving professional results at home."
    },
    {
      id: 6,
      name: "Professional Turbo Power Dryer",
      price: 2899,
      img: "https://pngimg.com/uploads/hair_dryer/hair_dryer_PNG40.png",
      description: "High-power professional turbo hair dryer",
      specs: [
        "2400W Turbo Power",
        "Ultra-Fast Drying",
        "6 Speed & Heat Settings",
        "Ionic & Ceramic Coated",
        "Concentrator & Diffuser",
        "5-year Warranty"
      ],
      details: "Ultimate professional hair dryer with powerful motor. Combines ionic and ceramic technology for the best drying and styling results."
    }
  ];

  const dryer = dryers.find((d) => d.id === parseInt(id));

  if (!dryer) {
    return <div className="error">Product not found</div>;
  }

  const handleAddToCart = () => {
    addToCart(dryer);
    navigate("/cart");
  };

  return (
    <section className="detail-page">
      <button className="back-btn" onClick={() => navigate("/hair-dryer")}>
        ← Back to Hair Dryers
      </button>

      <div className="detail-container">
        <div className="detail-image">
          <img src={dryer.img} alt={dryer.name} />
        </div>

        <div className="detail-info">
          <h1>{dryer.name}</h1>
          <p className="description">{dryer.description}</p>

          <div className="price-section">
            <p className="price">₹{dryer.price.toLocaleString()}</p>
          </div>

          <p className="details-text">{dryer.details}</p>

          <div className="specs">
            <h3>Key Specifications:</h3>
            <ul>
              {dryer.specs.map((spec, index) => (
                <li key={index}>{spec}</li>
              ))}
            </ul>
          </div>

          <button className="add-to-cart-btn" onClick={handleAddToCart}>
            🛒 Add to Cart
          </button>
        </div>
      </div>
    </section>
  );
}
