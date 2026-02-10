import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import "./Monitor.css";

export default function Monitor() {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  /* =========================
     MONITOR PRODUCTS
  ========================= */
  const monitors = [
    {
      id: 1,
      name: "Dell 24” Full HD IPS Monitor",
      price: 10999,
      img: "https://rukminim2.flixcart.com/image/832/832/xif0q/monitor/3/1/8/s2421hnm-full-hd-24-4knw7-dell-original-imaghmz3mt3pgyzy.jpeg?q=70&crop=false",
    },
    {
      id: 2,
      name: "LG 27” UltraWide Monitor",
      price: 17999,
      img: "https://rukminim2.flixcart.com/image/832/832/xif0q/monitor/c/z/7/27gs60f-bb-atrkmvn-full-hd-27-2024-27gs60f-bb-atrkmvn-lg-original-imah2ghnc6vfvsmh.jpeg?q=70&crop=false",
    },
    {
      id: 3,
      name: "Samsung 24” Curved Monitor",
      price: 13999,
      img: "https://rukminim2.flixcart.com/image/832/832/xif0q/monitor/h/g/w/-original-imah5c9a6k7wvcnz.jpeg?q=70&crop=false",
    },
    {
      id: 4,
      name: "Acer Nitro Gaming 165Hz Monitor",
      price: 19999,
      img: "https://rukminim2.flixcart.com/image/832/832/kx9as280/monitor/d/o/d/vg270s-full-hd-27-um-hv0si-s01-acer-original-imag9ryu4ujcphzh.jpeg?q=70&crop=false",
    },
    {
      id: 5,
      name: "HP 22” Office Monitor",
      price: 8499,
      img: "https://rukminim2.flixcart.com/image/832/832/ksc46fk0/monitor/l/d/x/m22f-2e2y3aa-acj-hp-original-imag5x3zp6m7jphd.jpeg?q=70&crop=false",
    },
    {
      id: 6,
      name: "Lenovo 27” QHD Professional Monitor",
      price: 22999,
      img: "https://rukminim2.flixcart.com/image/832/832/xif0q/monitor/j/y/d/-original-imahjfpdsnujg39x.jpeg?q=70&crop=false",
    },
  ];

  /* =========================
     FUNCTIONS
  ========================= */

  const viewDetails = (id) => {
    navigate(`/monitor/${id}`);
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
    <section className="monitor">
      <h2 className="monitor-title">Monitors</h2>

      <div className="monitor-grid">
        {monitors.map((item) => (
          <div key={item.id} className="monitor-card">

            <img
              src={item.img}
              alt={item.name}
              className="monitor-img"
              onClick={() => viewDetails(item.id)}
              style={{ cursor: "pointer" }}
            />

            <h3 onClick={() => viewDetails(item.id)} style={{ cursor: "pointer" }}>
              {item.name}
            </h3>

            <p className="monitor-price">
              {formatPrice(item.price)}
            </p>

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
