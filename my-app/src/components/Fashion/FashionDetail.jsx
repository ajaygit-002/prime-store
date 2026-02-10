import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import "./FashionDetail.css";

export default function FashionDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const products = [
    {
      id: 1,
      name: "Men's Premium Jeans",
      price: 1999,
      img: "https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/e/1/n/xl-anime-tshirt-for-men-zen1fashion-original-imahfasryqdswhjf.jpeg?q=70&crop=false",
      description: "Stylish and comfortable premium denim jeans",
      specs: [
        "100% Cotton Denim",
        "Slim Fit Design",
        "Multiple Pockets",
        "Fade-resistant Color",
        "Comfortable Stretch Fabric",
        "Available Sizes: 28-40"
      ],
      details: "Made from premium quality denim, these jeans offer a perfect fit and exceptional comfort for everyday wear or casual outings."
    },
    {
      id: 2,
      name: "Men Slim Fit Black Cotton Blend Trousers",
      price: 499,
      img: "https://rukminim2.flixcart.com/image/832/832/xif0q/track-pant/3/c/q/xl-nasa-black-06-the-savira-fashion-trend-original-imahfz3d6f6vapqb.jpeg?q=70&crop=false",
      description: "Comfortable casual t-shirt for everyday wear",
      specs: [
        "100% Cotton Material",
        "Crew Neck",
        "Machine Washable",
        "Available Colors: 5+",
        "Sizes: XS-XXL",
        "Breathable Fabric"
      ],
      details: "Perfect for casual everyday wear, this t-shirt combines comfort and style. Made from premium cotton for breathability and durability."
    },
    {
      id: 3,
      name: "Men Regular Fit Solid Button Down Collar Formal Shirt",
      price: 1299,
      img: "https://rukminim2.flixcart.com/image/832/832/xif0q/shirt/i/2/r/s-satin14-deemoon-original-imahckprq6td5kgm.jpeg?q=70&crop=false",
      description: "Professional formal shirt for office and formal events",
      specs: [
        "60% Cotton, 40% Polyester Blend",
        "Collar with Buttons",
        "Long Sleeves",
        "Iron-friendly Design",
        "Multiple Colors Available",
        "Comfortable Fit"
      ],
      details: "Elevate your professional look with this premium formal shirt. Perfect for office, meetings, and formal occasions."
    },
    {
      id: 4,
      name: "Men Oversized Fit Printed Spread Collar Casual Shirt",
      price: 799,
      img: "https://rukminim2.flixcart.com/image/832/832/xif0q/shirt/n/t/j/xl-3-4-sleeves-shirt-green-lovingvibe-creation-original-imahahxwhhsvzkp4.jpeg?q=70&crop=false",
      description: "Lightweight summer shorts for hot weather",
      specs: [
        "100% Cotton",
        "Quick-dry Technology",
        "Side Pockets",
        "Elastic Waist",
        "Available Colors: 8+",
        "Sizes: 28-38"
      ],
      details: "Stay cool and comfortable in these lightweight summer shorts. Perfect for beach trips, casual outings, and warm weather activities."
    },
    {
      id: 5,
      name: "Men Oversized Fit Solid Casual Shirt",
      price: 3999,
      img: "https://rukminim2.flixcart.com/image/832/832/xif0q/shirt/g/n/m/l-sidvgy-104-shabib-original-imahfjqkhnj3d7bj.jpeg?q=70&crop=false",
      description: "Warm and stylish winter jacket",
      specs: [
        "Polyester Outer Shell",
        "Thermal Lining",
        "Water Resistant",
        "Multiple Pockets",
        "Adjustable Hood",
        "Available Colors: 4"
      ],
      details: "Stay warm and stylish during winter with this premium jacket. Water-resistant and well-insulated for maximum comfort."
    },
    {
      id: 6,
      name: "Men Relaxed White Lycra Blend Trousers",
      price: 1499,
      img: "https://rukminim2.flixcart.com/image/832/832/xif0q/trouser/q/t/x/32-582-2-ftx-original-imahjn6ahr22ffcf.jpeg?q=70&crop=false",
      description: "Comfortable sports hoodie for active lifestyle",
      specs: [
        "80% Cotton, 20% Polyester",
        "Kangaroo Front Pocket",
        "Adjustable Hood",
        "Machine Washable",
        "Available Colors: 6+",
        "Sizes: 28-38"
      ],
      details: "Perfect for gym sessions, running, or casual wear. Made from breathable fabric that keeps you comfortable during physical activities."
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
      <button className="back-btn" onClick={() => navigate("/fashion")}>
        ← Back to Fashion
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
