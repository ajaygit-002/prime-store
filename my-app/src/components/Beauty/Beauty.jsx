import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import "./Beauty.css";

export default function Beauty() {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  /* =========================
     BEAUTY PRODUCTS
  ========================= */
  const products = [
    {
      id: 1,
      name: "Matte Lipstick Set (5 Shades)",
      price: 799,
      img: "https://rukminim2.flixcart.com/image/832/832/xif0q/lipstick/y/f/a/40-beauty-5-in-1-forever-enrich-matte-lipstick-combo-set-of-10-original-imagvsj3r8huhega.jpeg?q=70&crop=false",
    },
    {
      id: 2,
      name: "Vitamin C Face Serum",
      price: 599,
      img: "https://rukminim2.flixcart.com/image/832/832/xif0q/body-skin-treatment/n/a/6/-original-imahezhjdszyg6wh.jpeg?q=70&crop=false",
    },
    {
      id: 3,
      name: "Mixed Vegetables Combo Pack",
      price: 2499,
      img: "https://rukminim2.flixcart.com/image/832/832/xif0q/edible-seed/v/m/z/500-combo-of-all-edible-seeds-pack-raw-chia-pumpkin-sunflower-original-imahg8znntzasheq.jpeg?q=70&crop=false",
    },
    {
      id: 4,
      name: "Hair Straightener Brush",
      price: 1399,
      img: "https://pngimg.com/uploads/hairbrush/hairbrush_PNG10.png",
    },
    {
      id: 5,
      name: "Luxury Perfume Spray",
      price: 1899,
      img: "https://pngimg.com/uploads/perfume/perfume_PNG10277.png",
    },
    {
      id: 6,
      name: "Face Wash & Cleanser Combo",
      price: 499,
      img: "https://pngimg.com/uploads/shampoo/shampoo_PNG26.png",
    },
  ];

  /* =========================
     FUNCTIONS
  ========================= */

  const viewDetails = (id) => {
    navigate(`/beauty/${id}`);
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
    <section className="beauty">
      <h2 className="beauty-title">Beauty & Personal Care</h2>

      <div className="beauty-grid">
        {products.map((item) => (
          <div key={item.id} className="beauty-card">

            <img
              src={item.img}
              alt={item.name}
              className="beauty-img"
              onClick={() => viewDetails(item.id)}
              style={{ cursor: "pointer" }}
            />

            <h3 onClick={() => viewDetails(item.id)} style={{ cursor: "pointer" }}>
              {item.name}
            </h3>

            <p className="beauty-price">{formatPrice(item.price)}</p>

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
