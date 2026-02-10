import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import "./ToysDetail.css";

export default function ToysDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const toys = [
    {
      id: 1,
      name: "Soft Teddy Bear Plush Toy",
      price: 499,
      img: "https://pngimg.com/uploads/teddy_bear/teddy_bear_PNG45.png",
      description: "Adorable soft plush teddy bear for kids",
      specs: [
        "30cm Height",
        "100% Polyester Fiber",
        "Machine Washable",
        "Hypoallergenic Material",
        "Button Eyes",
        "Cuddly & Soft"
      ],
      details: "Perfect cuddle companion for kids and adults. Made from soft, hypoallergenic material that's safe and durable."
    },
    {
      id: 2,
      name: "Remote Control Racing Car",
      price: 1299,
      img: "https://rukminim2.flixcart.com/image/832/832/xif0q/remote-control-toy/f/e/g/f1-rc-car-high-speed-racing-remote-control-car-toy-for-kids-0-original-imahjgsr2kz3krsc.jpeg?q=70&crop=false",
      description: "Fast-speed RC racing car with 2.4GHz remote",
      specs: [
        "2.4GHz Digital Control",
        "25km/h Speed",
        "100m Range",
        "Rechargeable Battery",
        "Durable Chassis",
        "30-minute Play Time"
      ],
      details: "Fast-paced racing action with advanced 2.4GHz technology. Perfect for kids and adults who love speed and racing."
    },
    {
      id: 3,
      name: "Building Blocks Set (100 pcs)",
      price: 899,
      img: "https://pngimg.com/uploads/lego/lego_PNG4.png",
      description: "Creative building blocks set for construction play",
      specs: [
        "100 Colorful Blocks",
        "Compatible with Major Brands",
        "Safe Plastic Material",
        "Age 3+",
        "Develop Creativity",
        "Storage Box Included"
      ],
      details: "Encourage creativity and imagination with quality building blocks. Compatible with most major building block brands."
    },
    {
      id: 4,
      name: "Kids Barbie Style Doll",
      price: 699,
      img: "https://rukminim2.flixcart.com/image/832/832/xif0q/stuffed-toy/p/o/f/3-feet-rd-resd-teddy-bear-vest-bear-best-teddy-bear-89-jst-soft-original-imah2wyhzzg4fwwc.jpeg?q=70&crop=false",
      description: "Fashion doll with stylish outfit and accessories",
      specs: [
        "30cm Height",
        "Articulated Joints",
        "Fashionable Outfit",
        "Hair Accessories",
        "Poseable Body",
        "Perfect Gift"
      ],
      details: "Beautiful fashion doll with realistic features and stylish outfit. Perfect gift for kids who love fashion and dolls."
    },
    {
      id: 5,
      name: "Educational Puzzle Board",
      price: 399,
      img: "https://rukminim2.flixcart.com/image/832/832/xif0q/puzzle/4/b/i/1-wooden-puzzle-boards-123-numbers-decorpetal-original-imahjqnykgvvbkmk.jpeg?q=70&crop=false",
      description: "Interactive educational puzzle game board",
      specs: [
        "Learning & Entertainment",
        "Multiple Puzzle Games",
        "Develop Problem Solving",
        "Colorful Design",
        "Age Appropriate",
        "Portable Size"
      ],
      details: "Fun and educational puzzle board that helps develop problem-solving and cognitive skills while entertaining."
    },
    {
      id: 6,
      name: "Marvel Action Figure Set",
      price: 799,
      img: "https://rukminim2.flixcart.com/image/832/832/xif0q/learning-toy/z/g/p/mini-basketball-hoop-set-with-cat-themed-backboard-indoor-original-imah7pfghxdzxynr.jpeg?q=70&crop=false",
      description: "Set of 6 popular Marvel superhero action figures",
      specs: [
        "6 Different Heroes",
        "Articulated Joints",
        "10cm Height",
        "Collectible Items",
        "Marvel Licensed",
        "Display Stand Included"
      ],
      details: "Collect your favorite Marvel superheroes. Highly detailed action figures perfect for play and display."
    }
  ];

  const toy = toys.find((t) => t.id === parseInt(id));

  if (!toy) {
    return <div className="error">Product not found</div>;
  }

  const handleAddToCart = () => {
    addToCart(toy);
    navigate("/cart");
  };

  return (
    <section className="detail-page">
      <button className="back-btn" onClick={() => navigate("/toys")}>
        ← Back to Toys
      </button>

      <div className="detail-container">
        <div className="detail-image">
          <img src={toy.img} alt={toy.name} />
        </div>

        <div className="detail-info">
          <h1>{toy.name}</h1>
          <p className="description">{toy.description}</p>

          <div className="price-section">
            <p className="price">₹{toy.price.toLocaleString()}</p>
          </div>

          <p className="details-text">{toy.details}</p>

          <div className="specs">
            <h3>Key Specifications:</h3>
            <ul>
              {toy.specs.map((spec, index) => (
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
