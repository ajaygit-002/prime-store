import { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        <section className="contact-hero">
          <h1>Contact Us</h1>
          <p>We'd love to hear from you. Get in touch with our team.</p>
        </section>

        <div className="contact-wrapper">
          <section className="contact-info">
            <div className="info-card">
              <h3>📍 Address</h3>
              <p>Prime Store Pvt Ltd</p>
              <p>2nd Floor, Tech Park Plaza,</p>
              <p>RS Puram Main Road,</p>
              <p>Coimbatore, Tamil Nadu – 641002</p>
              <p>India</p>
              
            </div>

            <div className="info-card">
              <h3>📞 Phone</h3>
              <p>+91 98765 43210</p>
              <p>Available 24/7</p>
            </div>

            <div className="info-card">
              <h3>📧 Email</h3>
              <p>support@primestore.com</p>
              <p>Response within 24 hours</p>
            </div>

            <div className="info-card">
              <h3>⏰ Business Hours</h3>
              <p>Monday - Friday: 9 AM - 6 PM</p>
              <p>Saturday - Sunday: 10 AM - 4 PM</p>
            </div>
          </section>

          <section className="contact-form-section">
            {submitted ? (
              <div className="success-message">
                <h3>✓ Thank You!</h3>
                <p>Your message has been sent successfully. We'll get back to you soon.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number "
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="How can we help?"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder="Your message here..."
                  ></textarea>
                </div>

                <button type="submit" className="submit-btn">
                  Send Message
                </button>
              </form>
            )}
          </section>
        </div>
      </div>
    </div>
  );
}

export default Contact;
