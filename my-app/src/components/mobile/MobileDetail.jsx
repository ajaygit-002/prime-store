import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import "./MobileDetail.css";

export default function MobileDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const phones = [
    {
      id: 1,
      name: "iPhone 14",
      price: 69999,
      img: "https://pngimg.com/d/iphone_14_PNG21.png",
      description: "Experience the power of Apple technology with iPhone 14",
      specs: [
        "6.1-inch Super Retina XDR display",
        "A15 Bionic chip",
        "12MP Dual Camera System",
        "Night mode for stunning low-light photos",
        "Action mode for stable video",
        "All-day battery life"
      ],
      details: "The iPhone 14 represents the pinnacle of mobile technology. With its advanced camera system, powerful processor, and stunning display, it's perfect for both professionals and everyday users."
    },
    {
      id: 2,
      name: "Samsung Galaxy S23",
      price: 64999,
      img: "https://static.vecteezy.com/system/resources/previews/035/572/095/non_2x/samsung-galaxy-s23-ultra-black-transparent-image-free-png.png",
      description: "Samsung's flagship smartphone with exceptional camera quality",
      specs: [
        "6.1-inch FHD+ AMOLED display",
        "Snapdragon 8 Gen 2 processor",
        "50MP Main camera with AI enhancement",
        "120Hz refresh rate",
        "5000mAh battery",
        "IP68 water and dust resistance"
      ],
      details: "The Galaxy S23 delivers premium performance with Samsung's signature display technology. Capture stunning photos with advanced AI processing and experience smooth gameplay with the ultra-fast processor."
    },
    {
      id: 3,
      name: "OnePlus 12",
      price: 59999,
      img: "https://image01-in.oneplus.net/media/202407/04/ab90ed53736b391f7ce5b78c9b0ac456.png",
      description: "Fast and smooth performance with OnePlus excellence",
      specs: [
        "6.7-inch AMOLED display",
        "Snapdragon 8 Gen 3",
        "48MP main camera",
        "100W SuperVOOC charging",
        "5400mAh battery",
        "OxygenOS 14"
      ],
      details: "OnePlus 12 combines speed, performance, and style. With 100W fast charging, you can get a full day's battery in just 20 minutes. The smooth 120Hz display makes everything feel responsive."
    },
    {
      id: 4,
      name: "Redmi Note 13",
      price: 15999,
      img: "https://i0.wp.com/mstore.ie/wp-content/uploads/2024/01/Redmi-Note-13-Pro-5G-Black-1.webp?fit=1600%2C1600&ssl=1",
      description: "Budget smartphone with great features and performance",
      specs: [
        "6.67-inch AMOLED display",
        "Snapdragon 685",
        "50MP main camera",
        "5000mAh battery",
        "33W fast charging",
        "90Hz refresh rate"
      ],
      details: "Redmi Note 13 offers excellent value for money. With a large display, decent camera, and reliable battery life, it's perfect for those looking for a budget-friendly smartphone without compromising on features."
    },
    {
      id: 5,
      name: "Realme Narzo",
      price: 12999,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyhhIsebclhvz-R2FwaEBaZvVE21Q9Z5QXEg&s",
      description: "Gaming-focused smartphone for mobile gamers",
      specs: [
        "6.5-inch FHD+ LCD display",
        "MediaTek Helio G99",
        "50MP main camera",
        "5000mAh battery",
        "90Hz refresh rate",
        "Gaming mode support"
      ],
      details: "Realme Narzo is optimized for mobile gaming. With a 90Hz display and powerful GPU, you can enjoy smooth gameplay. The massive battery ensures you can play all day without worrying about battery life."
    },
    {
      id: 6,
      name: "Moto G54",
      price: 14999,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLBoRL2U06p-yIWir7S3nVKW8DV7g10y37zA&s",
      description: "Reliable everyday smartphone with clean interface",
      specs: [
        "6.5-inch FHD+ IPS display",
        "MediaTek Helio G91",
        "50MP main camera",
        "5000mAh battery",
        "90Hz refresh rate",
        "Pure Android experience"
      ],
      details: "Moto G54 offers a clean, bloat-free Android experience. With near-stock Android and reliable performance, it's perfect for users who want simplicity and reliability in their everyday smartphone."
    }
  ];

  const phone = phones.find((p) => p.id === parseInt(id));

  if (!phone) {
    return <div className="error">Product not found</div>;
  }

  const handleAddToCart = () => {
    addToCart(phone);
    navigate("/cart");
  };

  return (
    <section className="mobile-detail">
      <button className="back-btn" onClick={() => navigate("/mobiles")}>
        ← Back to Mobiles
      </button>

      <div className="detail-container">
        {/* Product Image */}
        <div className="detail-image">
          <img src={phone.img} alt={phone.name} />
        </div>

        {/* Product Info */}
        <div className="detail-info">
          <h1>{phone.name}</h1>
          <p className="description">{phone.description}</p>

          <div className="price-section">
            <p className="price">₹{phone.price.toLocaleString()}</p>
          </div>

          <p className="details-text">{phone.details}</p>

          <div className="specs">
            <h3>Key Specifications:</h3>
            <ul>
              {phone.specs.map((spec, index) => (
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
