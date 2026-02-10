import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import "./Toys.css";

export default function Toys() {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  /* =========================
     TOY PRODUCTS
  ========================= */
  const toys = [
    {
      id: 1,
      name: "Soft Teddy Bear Plush Toy",
      price: 499,
      img: "https://pngimg.com/uploads/teddy_bear/teddy_bear_PNG45.png",
    },
    {
      id: 2,
      name: "Remote Control Racing Car",
      price: 1299,
      img: "https://rukminim2.flixcart.com/image/832/832/xif0q/remote-control-toy/f/e/g/f1-rc-car-high-speed-racing-remote-control-car-toy-for-kids-0-original-imahjgsr2kz3krsc.jpeg?q=70&crop=false",
    },
    {
      id: 3,
      name: "Building Blocks Set (100 pcs)",
      price: 899,
      img: "https://pngimg.com/uploads/lego/lego_PNG4.png",
    },
    {
      id: 4,
      name: "Kids Barbie Style Doll",
      price: 699,
      img: "https://rukminim2.flixcart.com/image/832/832/xif0q/stuffed-toy/p/o/f/3-feet-rd-resd-teddy-bear-vest-bear-best-teddy-bear-89-jst-soft-original-imah2wyhzzg4fwwc.jpeg?q=70&crop=false",
    },
    {
      id: 5,
      name: "Educational Puzzle Board",
      price: 399,
      img: "https://rukminim2.flixcart.com/image/832/832/xif0q/puzzle/4/b/i/1-wooden-puzzle-boards-123-numbers-decorpetal-original-imahjqnykgvvbkmk.jpeg?q=70&crop=false",
    },
    {
      id: 6,
      name: "Mini Basketball Toy Set",
      price: 599,
      img: "https://rukminim2.flixcart.com/image/832/832/xif0q/learning-toy/z/g/p/mini-basketball-hoop-set-with-cat-themed-backboard-indoor-original-imah7pfghxdzxynr.jpeg?q=70&crop=false",
    },
  ];

  /* =========================
     FUNCTIONS
  ========================= */

  const viewDetails = (id) => {
    navigate(`/toys/${id}`);
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
    <section className="toys">
      <h2 className="toys-title">Toys & Games</h2>

      <div className="toys-grid">
        {toys.map((item) => (
          <div key={item.id} className="toys-card">

            <img
              src={item.img}
              alt={item.name}
              className="toys-img"
              onClick={() => viewDetails(item.id)}
              style={{ cursor: "pointer" }}
            />

            <h3 onClick={() => viewDetails(item.id)} style={{ cursor: "pointer" }}>
              {item.name}
            </h3>

            <p className="toys-price">{formatPrice(item.price)}</p>

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
