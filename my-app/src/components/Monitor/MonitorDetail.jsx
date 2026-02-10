import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import "./MonitorDetail.css";

export default function MonitorDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const monitors = [
    {
      id: 1,
      name: "Dell 24\" Full HD IPS Monitor",
      price: 10999,
      img: "https://rukminim2.flixcart.com/image/832/832/xif0q/monitor/3/1/8/s2421hnm-full-hd-24-4knw7-dell-original-imaghmz3mt3pgyzy.jpeg?q=70&crop=false",
      description: "Professional-grade 24-inch Full HD IPS monitor",
      specs: [
        "24-inch FHD (1920x1200) Display",
        "IPS Panel Technology",
        "99% sRGB Color Gamut",
        "5ms Response Time",
        "USB-C Connectivity",
        "Height Adjustable Stand"
      ],
      details: "Professional IPS monitor perfect for content creators, designers, and office work. Accurate color reproduction and wide viewing angles."
    },
    {
      id: 2,
      name: "LG 27\" UltraWide Monitor",
      price: 17999,
      img: "https://rukminim2.flixcart.com/image/832/832/xif0q/monitor/c/z/7/27gs60f-bb-atrkmvn-full-hd-27-2024-27gs60f-bb-atrkmvn-lg-original-imah2ghnc6vfvsmh.jpeg?q=70&crop=false",
      description: "Ultra-wide 27-inch curved monitor for immersive experience",
      specs: [
        "27-inch UltraWide Display",
        "3440 x 1440 Resolution",
        "Curved Screen Design",
        "144Hz Refresh Rate",
        "Thunderbolt 3 Port",
        "Adaptive Sync"
      ],
      details: "Perfect for multitasking and gaming. The ultra-wide format gives you more screen real estate for increased productivity and immersion."
    },
    {
      id: 3,
      name: "Samsung 24\" Curved Monitor",
      price: 13999,
      img: "https://rukminim2.flixcart.com/image/832/832/xif0q/monitor/h/g/w/-original-imah5c9a6k7wvcnz.jpeg?q=70&crop=false",
      description: "Gaming-focused curved monitor with high refresh rate",
      specs: [
        "24-inch Curved VA Panel",
        "1920 x 1080 Resolution",
        "165Hz Refresh Rate",
        "1ms Response Time",
        "FreeSync Premium",
        "Eyesafe Certification"
      ],
      details: "Designed for competitive gaming with fast response time and high refresh rate. Curved design for immersive gaming experience."
    },
    {
      id: 4,
      name: "Acer Nitro Gaming 165Hz Monitor",
      price: 19999,
      img: "https://rukminim2.flixcart.com/image/832/832/kx9as280/monitor/d/o/d/vg270s-full-hd-27-um-hv0si-s01-acer-original-imag9ryu4ujcphzh.jpeg?q=70&crop=false",
      description: "High-performance gaming monitor with 165Hz refresh rate",
      specs: [
        "27-inch FHD Display",
        "165Hz Refresh Rate",
        "0.5ms Response Time",
        "G-Sync Compatible",
        "HDR Support",
        "RGB Backlit"
      ],
      details: "Extreme gaming performance with lightning-fast response times. Perfect for competitive gaming and fast-paced action games."
    },
    {
      id: 5,
      name: "HP 22\" Office Monitor",
      price: 8499,
      img: "https://rukminim2.flixcart.com/image/832/832/ksc46fk0/monitor/l/d/x/m22f-2e2y3aa-acj-hp-original-imag5x3zp6m7jphd.jpeg?q=70&crop=false",
      description: "Compact office monitor for productivity",
      specs: [
        "22-inch FHD Display",
        "1920 x 1080 Resolution",
        "LED Backlight",
        "60Hz Refresh Rate",
        "VGA & HDMI Inputs",
        "Energy Efficient"
      ],
      details: "Budget-friendly monitor for office and general use. Compact size saves desk space while providing clear image quality."
    },
    {
      id: 6,
      name: "Lenovo 27\" QHD Professional Monitor",
      price: 22999,
      img: "https://rukminim2.flixcart.com/image/832/832/xif0q/monitor/j/y/d/-original-imahjfpdsnujg39x.jpeg?q=70&crop=false",
      description: "Professional-grade QHD monitor for design work",
      specs: [
        "27-inch QHD (2560x1440) Display",
        "Factory Calibrated",
        "99% Adobe RGB",
        "Thunderbolt 3 Port",
        "USB-C Power Delivery",
        "Height & Tilt Adjustable"
      ],
      details: "Premium professional monitor with factory calibration. Ideal for photographers, video editors, and design professionals."
    }
  ];

  const monitor = monitors.find((m) => m.id === parseInt(id));

  if (!monitor) {
    return <div className="error">Product not found</div>;
  }

  const handleAddToCart = () => {
    addToCart(monitor);
    navigate("/cart");
  };

  return (
    <section className="detail-page">
      <button className="back-btn" onClick={() => navigate("/monitor")}>
        ← Back to Monitors
      </button>

      <div className="detail-container">
        <div className="detail-image">
          <img src={monitor.img} alt={monitor.name} />
        </div>

        <div className="detail-info">
          <h1>{monitor.name}</h1>
          <p className="description">{monitor.description}</p>

          <div className="price-section">
            <p className="price">₹{monitor.price.toLocaleString()}</p>
          </div>

          <p className="details-text">{monitor.details}</p>

          <div className="specs">
            <h3>Key Specifications:</h3>
            <ul>
              {monitor.specs.map((spec, index) => (
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
