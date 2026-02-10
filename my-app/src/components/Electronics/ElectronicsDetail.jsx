import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import "./ElectronicsDetail.css";

export default function ElectronicsDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const products = [
    {
      id: 1,
      name: "Apple MacBook Air",
      price: 28990000,
      img: "https://media.cnn.com/api/v1/images/stellar/prod/apple-macbook-pro-m4-lineup.png?c=16x9&q=h_720,w_1280,c_fill",
      description: "Powerful 15-inch laptop for professionals and creators",
      specs: [
        "13.6-inch FHD Display",
        "macOS Sequoia MC6T4HN/A",
        "16GB RAM",
        "512GB SSD",
        "M4 Chip with 8-core CPU & 10-core GPU",
        "18-hour Battery Life"
      ],
      details: "Apple MacBook M4 is a line of laptops powered by the Apple M4 series of ARM-based system on a chip (SoC), introduced in May 2024 as part of Apple’s Apple silicon lineup.  The M4 chip features a 10-core CPU (4 performance cores and 6 efficiency cores), a 10-core GPU with hardware-accelerated ray tracing, and a 16-core Neural Engine capable of up to 38 TOPS, making it ideal for creative workloads, AI tasks, and high-performance computing. It is available in the MacBook Pro (14-inch, 2024) and MacBook Air (2025) models, with configurations supporting up to 32GB of unified memory and 120GB/s memory bandwidth.  The chip is built on a 3 nm process (N3E) by TSMC and supports advanced features like AV1 decoding, ProRes RAW, and Apple Intelligence. "
    },
    {
      id: 2,
      name: "Samsung oLED TV 55-inch",
      price: 94990,
      img: "https://5.imimg.com/data5/SELLER/Default/2024/8/440407255/UY/TI/NS/120336811/55-google-smart-tv-500x500.png",
      description: "Crystal clear 55-inch 4K Smart TV",
      specs: [
        "55-inch 4K OLED Ultra HD ",
        "Smart TV with Android OS",
        "HDR10+ Support",
        "Dolby Atmos Sound",
        "Built-in WiFi & Streaming Apps",
        "Voice Control"
      ],
      details: "Discover next-level color and clarity with Samsung’s 4K OLED technology, Samsung Vision AI, 4K AI Upscaling, OLED HDR and PANTONE Validated for an unparalleled visual experience. Samsung Vision AI offers new experiences that are intuitive, convenient and make your everyday life more fulfilling. It knows what you want and easily provides the solutions."
    },
    {
      id: 3,
      name: "SONY WH-CH720N/LCIN Bluetooth (Blue, On the Ear)",
      price: 8477,
      img: "https://rukminim2.flixcart.com/image/832/832/xif0q/headphone/m/q/s/-original-imagz2d82zhzwpvy.jpeg?q=70&crop=false",
      description: "Premium wireless headphones with active noise cancellation",
      specs: [
        "Active Noise Cancellation",
        "40-hour Battery Life",
        "Bluetooth 5.3 Connectivity",
        "Premium Sound Quality",
        "Comfortable Over-ear Design",
        "Built-in Microphone"
      ],
      details: "Immerse yourself in crystal-clear audio with industry-leading noise cancellation. Perfect for music, calls, and productivity."
    },
    {
      id: 4,
      name: "Apple Watch Series 10 ",
      price: 35999,
      img: "https://static.vecteezy.com/system/resources/thumbnails/046/829/689/small/smart-watch-isolated-on-transparent-background-png.png",
      description: "Advanced smartwatch with health tracking features",
      specs: [
        "1.9-inch AMOLED Display",
        "Heart Rate Monitor",
        "Sleep Tracking",
        "5-day Battery Life",
        "Water Resistant (50m)",
        "Multiple Sport Modes"
      ],
      details: "Blood Oxygen app2 ECG app3 Cycle Tracking app with retrospective ovulation estimates4 Heart Rate app High and low heart rate notifications Irregular rhythm notifications Medications app Mindfulness app with state of mind tracking app Sleep app including sleep stages."
    },
    {
      id: 5,
      name: "Bluetooth Speaker",
      price: 3999,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0nLblGj2nn-7S47WQeKXRRET2pe4eodtpFA&s",
      description: "Portable Bluetooth speaker with 360-degree sound",
      specs: [
        "360-degree Sound Quality",
        "20-hour Battery Life",
        "IPX7 Water Resistance",
        "Bluetooth 5.0",
        "Compact & Portable Design",
        "Deep Bass Boost"
      ],
      details: "Carry your party wherever you go with this JBL Bluetooth speaker designed for powerful sound and total portability Enjoy up to 10 hours of playback time on a single charge a waterproof design that handles splashes and outdoor adventures and seamless Bluetooth connectivity for smooth wireless music streaming anytime anywhere."
    },
    {
      id: 6,
      name: "Gaming Mouse RGB",
      price: 11450,
      img: "https://png.pngtree.com/png-clipart/20250212/original/pngtree-sleek-white-gaming-mouse-with-rgb-lighting-png-image_20422023.png",
      description: "Professional gaming mouse with RGB lighting",
      specs: [
        "16,000 DPI Sensor",
        "RGB Lighting Customization",
        "8 Programmable Buttons",
        "Wired Connection",
        "Ergonomic Design",
        "10-hour Playtime"
      ],
      details: "The ROG Harpe Ace Mini is an ultralight 49 gram semi symmetrical gaming mouse with a shape approved by pro FPS players Equipped with 42000 dpi ROG AimPoint Pro optical sensor and ROG Optical Micro Switches the ROG Harpe Ace Mini displays industry leading wireless performance with SpeedNova wireless technology and supports up to 8000 Hz wireless polling rate compatible with the ROG Polling Rate Booster."
    }
  ];

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div className="error">Product not found</div>;
  }

  const handleAddToCart = () => {
    addToCart(product);
    navigate("/cart");
  };

  return (
    <section className="detail-page">
      <button className="back-btn" onClick={() => navigate("/electronics")}>
        ← Back to Electronics
      </button>

      <div className="detail-container">
        <div className="detail-image">
          <img src={product.img} alt={product.name} />
        </div>

        <div className="detail-info">
          <h1>{product.name}</h1>
          <p className="description">{product.description}</p>

          <div className="price-section">
            <p className="price">₹{product.price.toLocaleString()}</p>
          </div>

          <p className="details-text">{product.details}</p>

          <div className="specs">
            <h3>Key Specifications:</h3>
            <ul>
              {product.specs.map((spec, index) => (
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
