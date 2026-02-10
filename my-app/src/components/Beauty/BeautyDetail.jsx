import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import "./BeautyDetail.css";

export default function BeautyDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const products = [
    {
      id: 1,
      name: "Matte Lipstick Set (5 Shades)",
      price: 799,
      img: "https://rukminim2.flixcart.com/image/832/832/xif0q/lipstick/y/f/a/40-beauty-5-in-1-forever-enrich-matte-lipstick-combo-set-of-10-original-imagvsj3r8huhega.jpeg?q=70&crop=false",
      description: "Premium matte lipstick collection with 5 trendy shades",
      specs: [
        "5 Different Matte Shades",
        "Long-lasting Formula",
        "Waterproof & Smudge-proof",
        "Creamy Texture",
        "Vegan & Cruelty-free",
        "SPF 15 Protection"
      ],
      details: "Perfect lipstick set for any occasion. Matte finish provides a sophisticated look that lasts all day without touch-ups."
    },
    {
      id: 2,
      name: "Vitamin C Face Serum",
      price: 599,
      img: "https://rukminim2.flixcart.com/image/832/832/xif0q/body-skin-treatment/n/a/6/-original-imahezhjdszyg6wh.jpeg?q=70&crop=false",
      description: "Brightening vitamin C facial serum",
      specs: [
        "20% Vitamin C Concentration",
        "Brightens & Rejuvenates",
        "Anti-aging Formula",
        "Suitable for All Skin Types",
        "30ml Bottle",
        "Dermatologist Tested"
      ],
      details: "Powerful vitamin C serum for bright, youthful skin. Reduces dark spots and improves skin texture with regular use."
    },
    {
      id: 3,
      name: "Mixed Vegetables Combo Pack",
      price: 2499,
      img: "https://rukminim2.flixcart.com/image/832/832/xif0q/edible-seed/v/m/z/500-combo-of-all-edible-seeds-pack-raw-chia-pumpkin-sunflower-original-imahg8znntzasheq.jpeg?q=70&crop=false",
      description: "Complete professional makeup kit for all makeup needs",
      specs: [
        "120+ Color Palette",
        "Foundation Shades",
        "Brushes Set Included",
        "Setting Powders",
        "Blush & Contour",
        "Professional Quality"
      ],
      details: "All-in-one makeup kit for professionals and makeup enthusiasts. Contains everything you need to create any makeup look."
    },
    {
      id: 4,
      name: "Hair Straightener Brush",
      price: 1399,
      img: "https://pngimg.com/uploads/hairbrush/hairbrush_PNG10.png",
      description: "Ionic hair straightening brush",
      specs: [
        "Ceramic Plates",
        "Ionic Technology",
        "5 Temperature Settings",
        "Cordless Design",
        "USB Rechargeable",
        "3-hour Battery"
      ],
      details: "Modern straightening brush for smooth, frizz-free hair. Ionic technology protects hair while styling."
    },
    {
      id: 5,
      name: "Luxury Perfume Spray",
      price: 1899,
      img: "https://pngimg.com/uploads/perfume/perfume_PNG10277.png",
      description: "Premium long-lasting fragrance spray",
      specs: [
        "100ml Bottle",
        "12-hour Lasting Formula",
        "Premium Fragrance Notes",
        "Elegant Packaging",
        "EDP Concentration",
        "Suitable for All"
      ],
      details: "Luxurious fragrance that lasts throughout the day. Perfect for daily wear or special occasions."
    },
    {
      id: 6,
      name: "Face Wash & Cleanser Combo",
      price: 499,
      img: "https://pngimg.com/uploads/shampoo/shampoo_PNG26.png",
      description: "Gentle face wash and cleanser combination",
      specs: [
        "2 Products in 1",
        "Gentle Formula",
        "All Skin Types",
        "Removes Makeup",
        "Natural Ingredients",
        "200ml Total"
      ],
      details: "Complete cleansing solution for daily facial care. Removes impurities and makeup while being gentle on skin."
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
      <button className="back-btn" onClick={() => navigate("/beauty")}>
        ← Back to Beauty
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
