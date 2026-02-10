import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import "./Fashion.css";

export default function Fashion() {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  /* ==============================
     Product Data (Static / Mock)
     Later you can fetch from API
  ============================== */
  const products = [
    {
      id: 1,
      name: "Men Printed Round Neck Pure Cotton Black T-Shirt",
      price: 600,
      img: "https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/e/1/n/xl-anime-tshirt-for-men-zen1fashion-original-imahfasryqdswhjf.jpeg?q=70&crop=false",
    },
    {
      id: 2,
      name: 'Men Slim Fit Black Cotton Blend Trousers',
      price: 52999,
      img: "https://rukminim2.flixcart.com/image/832/832/xif0q/track-pant/3/c/q/xl-nasa-black-06-the-savira-fashion-trend-original-imahfz3d6f6vapqb.jpeg?q=70&crop=false",
    },
    {
      id: 3,
      name: "Men Regular Fit Solid Button Down Collar Formal Shirt",
      price: 2999,
      img: "https://rukminim2.flixcart.com/image/832/832/xif0q/shirt/i/2/r/s-satin14-deemoon-original-imahckprq6td5kgm.jpeg?q=70&crop=false",
    },
    {
      id: 4,
      name: "Men Oversized Fit Printed Spread Collar Casual Shirt",
      price: 4999,
      img: "https://rukminim2.flixcart.com/image/832/832/xif0q/shirt/n/t/j/xl-3-4-sleeves-shirt-green-lovingvibe-creation-original-imahahxwhhsvzkp4.jpeg?q=70&crop=false",
    },
    {
      id: 5,
      name: "Men Oversized Fit Solid Casual Shirt",
      price: 1999,
      img: "https://rukminim2.flixcart.com/image/832/832/xif0q/shirt/g/n/m/l-sidvgy-104-shabib-original-imahfjqkhnj3d7bj.jpeg?q=70&crop=false",
    },
    {
      id: 6,
      name: "Men Relaxed White Lycra Blend Trousers",
      price: 1499,
      img: "https://rukminim2.flixcart.com/image/832/832/xif0q/trouser/q/t/x/32-582-2-ftx-original-imahjn6ahr22ffcf.jpeg?q=70&crop=false",
    },
  ];

  /* ==============================
     FUNCTIONS
  ============================== */

  const viewDetails = (id) => {
    navigate(`/fashion/${id}`);
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    navigate("/cart");
  };

  /* ==============================
     UI
  ============================== */
  return (
    <section className="electronics">
      <h2 className="title">Fashion</h2>

      <div className="electronics-grid">
        {products.map((item) => (
          <div key={item.id} className="electronics-card">

            {/* Product Image */}
            <img
              src={item.img}
              alt={item.name}
              className="electronics-img"
              onClick={() => viewDetails(item.id)}
              style={{ cursor: "pointer" }}
            />

            {/* Product Name */}
            <h3 onClick={() => viewDetails(item.id)} style={{ cursor: "pointer" }}>
              {item.name}
            </h3>

            {/* Price */}
            <p className="price">₹{item.price.toLocaleString()}</p>

            {/* Buttons */}
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
