import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import "./mobile.css";

export default function Mobiles() {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const phones = [
    {
      id: 1,
      name: "iPhone 14",
      price: 69999,
      img: "https://pngimg.com/d/iphone_14_PNG21.png"
    },
    {
      id: 2,
      name: "Samsung Galaxy S23",
      price: 64999,
      img: "https://static.vecteezy.com/system/resources/previews/035/572/095/non_2x/samsung-galaxy-s23-ultra-black-transparent-image-free-png.png"
    },
    {
      id: 3,
      name: "OnePlus 12",
      price: 59999,
      img: "https://image01-in.oneplus.net/media/202407/04/ab90ed53736b391f7ce5b78c9b0ac456.png"
    },
    {
      id: 4,
      name: "Redmi Note 13",
      price: 15999,
      img: "https://i0.wp.com/mstore.ie/wp-content/uploads/2024/01/Redmi-Note-13-Pro-5G-Black-1.webp?fit=1600%2C1600&ssl=1"
    },
    {
      id: 5,
      name: "Realme Narzo",
      price: 12999,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyhhIsebclhvz-R2FwaEBaZvVE21Q9Z5QXEg&s"
    },
    {
      id: 6,
      name: "Moto G54",
      price: 14999,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLBoRL2U06p-yIWir7S3nVKW8DV7g10y37zA&s"
    }
  ];

  const viewDetails = (id) => {
    navigate(`/mobiles/${id}`);
  };

  const addToCartHandler = (item) => {
    addToCart(item);
    navigate("/cart");
  };

  return (
    <section className="mobiles">
      <h2 className="title">Mobile Phones</h2>

      <div className="mobile-grid">
        {phones.map((phone) => (
          <div key={phone.id} className="mobile-card">

            {/* IMAGE - Clickable */}
            <img
              src={phone.img}
              alt={phone.name}
              className="mobile-img"
              onClick={() => viewDetails(phone.id)}
              style={{ cursor: "pointer" }}
            />

            {/* NAME - Clickable */}
            <h3 onClick={() => viewDetails(phone.id)} style={{ cursor: "pointer" }}>
              {phone.name}
            </h3>

            <p className="price">₹{phone.price.toLocaleString()}</p>

            <div className="mobile-buttons">
              <button 
                className="view-btn"
                onClick={() => viewDetails(phone.id)}
              >
                View Details
              </button>
              <button 
                className="cart-btn"
                onClick={() => addToCartHandler(phone)}
              >
                Add to Cart
              </button>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
