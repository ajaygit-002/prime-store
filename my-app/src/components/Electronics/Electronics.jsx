import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import "./Electronics.css";

export default function Electronics() {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const products = [
    {
      id: 1,
      name: "Apple MacBook Air",
      price: 28990000 ,
      img: "https://media.cnn.com/api/v1/images/stellar/prod/apple-macbook-pro-m4-lineup.png?c=16x9&q=h_720,w_1280,c_fill"
    },
    {
      id: 2,
      name: "Samsung oLED TV 55-inch",
      price: 94990,
      img: "https://5.imimg.com/data5/SELLER/Default/2024/8/440407255/UY/TI/NS/120336811/55-google-smart-tv-500x500.png"
    },
    {
      id: 3,
      name: "SONY WH-CH720N/LCIN Bluetooth (Blue, On the Ear)",
      price: 8477,
      img: "https://rukminim2.flixcart.com/image/832/832/xif0q/headphone/m/q/s/-original-imagz2d82zhzwpvy.jpeg?q=70&crop=false"
    },
    {
      id: 4,
      name: " Apple Watch Series 10 ",
      price: 35999,
      img: "https://static.vecteezy.com/system/resources/thumbnails/046/829/689/small/smart-watch-isolated-on-transparent-background-png.png"
    },
    {
      id: 5,
      name: "Bluetooth Speaker",
      price: 3999,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0nLblGj2nn-7S47WQeKXRRET2pe4eodtpFA&s"
    },
    {
      id: 6,
      name: "Gaming Mouse RGB",
      price: 11450,
      img: "https://png.pngtree.com/png-clipart/20250212/original/pngtree-sleek-white-gaming-mouse-with-rgb-lighting-png-image_20422023.png"
    }
  ];

  const addToCartHandler = (item) => {
    addToCart(item);
    navigate("/cart");
  };

  const viewDetails = (id) => {
    navigate(`/electronics/${id}`);
  };

  return (
    <section className="electronics">
      <h2 className="title">Electronics</h2>

      <div className="electronics-grid">
        {products.map((item) => (
          <div key={item.id} className="electronics-card">

            <img
              src={item.img}
              alt={item.name}
              className="electronics-img"
              onClick={() => viewDetails(item.id)}
              style={{ cursor: "pointer" }}
            />

            <h3 onClick={() => viewDetails(item.id)} style={{ cursor: "pointer" }}>
              {item.name}
            </h3>

            <p className="price">₹{item.price.toLocaleString()}</p>

            <div className="product-buttons">
              <button className="view-btn" onClick={() => viewDetails(item.id)}>
                View Details
              </button>
              <button className="cart-btn" onClick={() => addToCartHandler(item)}>
                Add to Cart
              </button>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
