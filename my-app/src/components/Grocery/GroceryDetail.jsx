import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import "./GroceryDetail.css";

export default function GroceryDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const groceries = [
    {
      id: 1,
      name: "Fresh Farm Rice (5kg)",
      price: 349,
      img: "https://pngimg.com/uploads/rice/rice_PNG17.png",
      description: "High-quality white basmati rice from premium farms",
      specs: [
        "5kg Pack",
        "Premium Basmati Grade",
        "Farm Fresh",
        "Long Grain",
        "No Pesticides",
        "Best Before: 12 months"
      ],
      details: "Pure, high-quality basmati rice perfect for everyday cooking. Sourced directly from premium farms for superior quality and freshness."
    },
    {
      id: 2,
      name: "Organic Vegetables Bundle",
      price: 299,
      img: "https://pngimg.com/uploads/rice/rice_PNG17.png",
      description: "Fresh organic vegetables basket",
      specs: [
        "Mixed Vegetables (3kg)",
        "100% Organic",
        "Farm Fresh Daily",
        "No Chemicals",
        "Multiple Varieties",
        "Freshness Guaranteed"
      ],
      details: "Fresh, organic vegetables delivered daily. Support local farmers while getting the healthiest vegetables for your family."
    },
    {
      id: 3,
      name: "Mixed Vegetables Combo Pack",
      price: 449,
      img: "https://rukminim2.flixcart.com/image/832/832/xif0q/edible-seed/v/m/z/500-combo-of-all-edible-seeds-pack-raw-chia-pumpkin-sunflower-original-imahg8znntzasheq.jpeg?q=70&crop=false",
      description: "Pure vegetable cooking oil",
      specs: [
        "2L Bottle",
        "Virgin Quality",
        "Cold-pressed",
        "No Trans-fat",
        "Rich in Antioxidants",
        "Perfect for Cooking & Frying"
      ],
      details: "Pure vegetable oil perfect for all your cooking needs. Cold-pressed for maximum nutrition and health benefits."
    },
    {
      id: 4,
      name: "Whole Wheat Flour (5kg)",
      price: 199,
      img: "https://pngimg.com/uploads/rice/rice_PNG17.png",
      description: "100% pure whole wheat flour",
      specs: [
        "5kg Pack",
        "Stone Ground",
        "High Fiber",
        "No Preservatives",
        "Fresh & Nutritious",
        "Ideal for Bread & Roti"
      ],
      details: "Nutritious whole wheat flour perfect for making breads, rotis, and other wheat-based products with added fiber."
    },
    {
      id: 5,
      name: "Potato Chips Family Pack",
      price: 49,
      img: "https://rukminim2.flixcart.com/image/832/832/xif0q/shopsy-chips/y/g/w/0-27-potato-crisps-on-the-go-adventure-indie-masala-chips-pack-original-imah3jangzjsgxna.jpeg?q=70&crop=false",
      description: "Pure white crystalline sugar",
      specs: [
        "1kg Pack",
        "Pure White Sugar",
        "Fine Crystals",
        "Refined Quality",
        "Perfect Sweetness",
        "Best for Cooking"
      ],
      details: "Fine quality refined sugar perfect for cooking, baking, and beverages. Pure crystalline form for consistent results."
    },
    {
      id: 6,
      name: "Organic Toor Dal (1kg)",
      price: 399,
      img: "https://rukminim2.flixcart.com/image/832/832/xif0q/pulses/k/9/5/1-organic-toor-dal-100-pure-premium-quality-1-toor-dal-green-original-imagqggunzh9tn4f.jpeg?q=70&crop=false",
      description: "Premium blend of Indian spices",
      specs: [
        "7 Essential Spices",
        "Premium Quality",
        "Freshly Collected",
        "No Artificial Additives",
        "Authentic Flavors",
        "250g Total"
      ],
      details: "Essential Indian spices perfectly blended for authentic flavor. Freshly collected and packaged for maximum freshness."
    }
  ];

  const grocery = groceries.find((g) => g.id === parseInt(id));

  if (!grocery) {
    return <div className="error">Product not found</div>;
  }

  const handleAddToCart = () => {
    addToCart(grocery);
    navigate("/cart");
  };

  return (
    <section className="detail-page">
      <button className="back-btn" onClick={() => navigate("/grocery")}>
        ← Back to Grocery
      </button>

      <div className="detail-container">
        <div className="detail-image">
          <img src={grocery.img} alt={grocery.name} />
        </div>

        <div className="detail-info">
          <h1>{grocery.name}</h1>
          <p className="description">{grocery.description}</p>

          <div className="price-section">
            <p className="price">₹{grocery.price.toLocaleString()}</p>
          </div>

          <p className="details-text">{grocery.details}</p>

          <div className="specs">
            <h3>Key Specifications:</h3>
            <ul>
              {grocery.specs.map((spec, index) => (
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
