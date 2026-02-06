import "./About.css";

export default function About() {
  return (
    <section className="about-page">

      {/* ===== HERO WITH IMAGE ===== */}
      <div className="about-hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>About Prime Store</h1>
            <p>Your trusted online shopping destination</p>
          </div>

          {/* IMAGE */}
          <img
            src="src/assets/mainimg.png"
            alt="shopping"
            className="hero-img"
          />
        </div>
      </div>


      {/* ===== CONTENT ===== */}
      <div className="about-container">

        <p className="about-description">
          Prime Store is your one-stop destination for quality products at the
          best prices. We focus on fast delivery, secure payments, and excellent
          customer service to give you a smooth online shopping experience.
        </p>


        {/* ===== FEATURES ===== */}
        <div className="features-grid">

          <div className="feature-card">
            <img
              src="https://png.pngtree.com/png-vector/20230507/ourmid/pngtree-fast-delivery-label-design-vector-png-image_7087605.png"
              alt="delivery"
            />
            <h3>Fast Delivery</h3>
            <p>Get your products delivered within 2–3 days anywhere in India.</p>
          </div>

          <div className="feature-card">
            <img
              src="https://png.pngtree.com/png-clipart/20230920/original/pngtree-vector-icon-for-secure-online-shopping-with-100-payment-protection-vector-png-image_12468844.png"
              alt="secure"
            />
            <h3>Secure Payments</h3>
            <p>100% safe payments with UPI, Cards, Net Banking & COD.</p>
          </div>

          <div className="feature-card">
            <img
              src="https://img.freepik.com/premium-vector/easy-returns-sign-label-delivery-service-vector-stock-illustration_100456-11336.jpg"
              alt="returns"
            />
            <h3>Easy Returns</h3>
            <p>Hassle-free 7 day return policy for customer satisfaction.</p>
          </div>

          <div className="feature-card">
            <img
              src="https://img.freepik.com/premium-vector/24-hour-service-iconheadphone-talk-support-phone-consult-customer-problems_68708-3344.jpg"
              alt="support"
            />
            <h3>24/7 Support</h3>
            <p>Our team is always ready to help you anytime.</p>
          </div>

        </div>

      </div>

    </section>
  );
}
