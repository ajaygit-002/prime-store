import { useState } from 'react';
import './FAQ.css';

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      id: 1,
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards (Visa, MasterCard, American Express), debit cards, digital wallets (Apple Pay, Google Pay), and bank transfers. All transactions are secure and encrypted.',
    },
    {
      id: 2,
      question: 'What is your shipping policy?',
      answer: 'We offer free delivery on orders above ₹4,000, standard delivery takes 5–7 working days, express delivery arrives within 2–3 working days, and you can track your order anytime through your account dashboard.',
    },
    {
      id: 3,
      question: 'Do you accept returns and exchanges?',
      answer: 'Yes! We offer 30-day returns and exchanges for most items. Products must be unused and in original packaging. Just contact our support team to start the return process.',
    },
    {
      id: 4,
      question: 'How can I track my order?',
      answer: 'Once your order ships, you\'ll receive a tracking number via email. You can also log into your Prime Store account and check the order status in the "My Orders" section.',
    },
    {
      id: 5,
      question: 'Is my personal information secure?',
      answer: 'Absolutely! We use SSL encryption to protect all your personal and payment information. Your data is never shared with third parties without your consent.',
    },
    {
      id: 6,
      question: 'Do you offer customer support?',
      answer: 'Yes, we have 24/7 customer support available via email, phone, and live chat. Our average response time is less than 24 hours. You can contact us at support@primestore.com or call 1-800-123-4567.',
    },
    {
      id: 7,
      question: 'Can I cancel my order?',
      answer: 'If your order hasn\'t shipped yet, you can cancel it for a full refund. Once shipped, you\'ll need to initiate a return after receiving the product. Contact us immediately to request cancellation.',
    },
    {
      id: 8,
      question: 'Do you have a loyalty program?',
      answer: 'Yes! Sign up for Prime Store Plus to earn rewards on every purchase. Members get exclusive discounts, early access to sales, and free express shipping on all orders.',
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-page">
      <div className="faq-container">
        <section className="faq-hero">
          <h1>Frequently Asked Questions</h1>
          <p>Find answers to common questions about Prime Store</p>
        </section>

        <section className="faq-content">
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div
                key={faq.id}
                className={`faq-item ${activeIndex === index ? 'active' : ''}`}
              >
                <button
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
                >
                  <span>{faq.question}</span>
                  <span className="toggle-icon">
                    {activeIndex === index ? '▼' : '▶'}
                  </span>
                </button>
                {activeIndex === index && (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <section className="faq-support">
            <h2>Still have questions?</h2>
            <p>Can't find the answer you're looking for? Our team is here to help.</p>
            <a href="/contact" className="contact-link">
              Contact Support
            </a>
          </section>
        </section>
      </div>
    </div>
  );
}

export default FAQ;
