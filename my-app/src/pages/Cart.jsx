import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./Cart.css";

function Cart() {
  const navigate = useNavigate();
  const { cartItems: items, addToCart, removeFromCart, updateQuantity, updateItem, clearCart } = useCart();
  const [newItem, setNewItem] = useState({ name: "", price: "", qty: "1" });
  const [editId, setEditId] = useState(null);
  const [editData, setEditData] = useState({ name: "", price: "" });

  const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0);
  const shipping = items.length === 0 ? 0 : subtotal > 8299 ? 0 : 99;
  const tax = subtotal * 0.18;
  const total = subtotal + shipping + tax;

  const handleNewChange = (e) => {
    const { name, value } = e.target;
    setNewItem((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddItem = (e) => {
    e.preventDefault();
    const name = newItem.name.trim();
    const price = parseFloat(newItem.price);
    const qty = Math.max(1, parseInt(newItem.qty, 10) || 1);

    if (!name || Number.isNaN(price) || price <= 0) {
      return;
    }

    const item = {
      id: Date.now(),
      name,
      price,
      qty,
    };

    addToCart(item);
    setNewItem({ name: "", price: "", qty: "1" });
  };

  const incrementQty = (id) => {
    const item = items.find((i) => i.id === id);
    if (item) {
      updateQuantity(id, item.qty + 1);
    }
  };

  const decrementQty = (id) => {
    const item = items.find((i) => i.id === id);
    if (item) {
      updateQuantity(id, Math.max(1, item.qty - 1));
    }
  };

  const removeItem = (id) => {
    removeFromCart(id);
  };

  const startEdit = (item) => {
    setEditId(item.id);
    setEditData({ name: item.name, price: String(item.price) });
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditData((prev) => ({ ...prev, [name]: value }));
  };

  const saveEdit = (id) => {
    const original = items.find((item) => item.id === id);
    if (!original) {
      return;
    }

    const nameInput = editData.name.trim();
    const priceInput = parseFloat(editData.price);
    const name = nameInput || original.name;
    const price = Number.isNaN(priceInput) || priceInput <= 0 ? original.price : priceInput;

    updateItem(id, { name, price });
    setEditId(null);
  };

  const cancelEdit = () => {
    setEditId(null);
    setEditData({ name: "", price: "" });
  };

  /* ===== CHECKOUT ===== */
  const handleCheckout = () => {
    if (items.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    
    console.log("your order is done");
    console.log("Order Details:", {
      items: items,
      subtotal: subtotal,
      shipping: shipping,
      tax: Math.round(tax),
      total: Math.round(total),
      timestamp: new Date().toISOString()
    });
    
    clearCart();
    alert("✅ Order placed successfully!");
    navigate("/");
  };

  return (
    <div className="cart-page">
      <div className="cart-container">
        <header className="cart-header">
          <h1>Your Cart</h1>
          <p>Review items, update quantities, and proceed to checkout.</p>
        </header>

        <section className="cart-dashboard">
          <div className="cart-items">
            <div className="section-title">
              <h2>Items</h2>
              <span className="item-count">{items.length} products</span>
            </div>

            <form className="add-item-form" onSubmit={handleAddItem}>
              <input
                type="text"
                name="name"
                placeholder="Product name"
                value={newItem.name}
                onChange={handleNewChange}
              />
              <input
                type="number"
                name="price"
                placeholder="Price (₹)"
                step="1"
                value={newItem.price}
                onChange={handleNewChange}
              />
              <input
                type="number"
                name="qty"
                min="1"
                placeholder="Qty"
                value={newItem.qty}
                onChange={handleNewChange}
              />
              <button type="submit" className="add-btn">Add Item</button>
            </form>

            <div className="items-list">
              {items.length === 0 ? (
                <div className="empty-state">
                  <h3>Your cart is empty</h3>
                  <p>Add items using the form above.</p>
                </div>
              ) : (
                items.map((item) => (
                  <div key={item.id} className="item-card">
                    <div className="item-info">
                      <div className="item-image">IMG</div>
                      <div className="item-details">
                        {editId === item.id ? (
                          <div className="edit-fields">
                            <input
                              type="text"
                              name="name"
                              value={editData.name}
                              onChange={handleEditChange}
                            />
                            <input
                              type="number"
                              name="price"
                              step="1"
                              value={editData.price}
                              onChange={handleEditChange}
                            />
                          </div>
                        ) : (
                          <>
                            <h3>{item.name}</h3>
                            <p className="item-price">₹{item.price.toLocaleString('en-IN')}</p>
                          </>
                        )}
                        <div className="item-meta">
                          <span className="item-tag">In Stock</span>
                          <span className="item-tag">Free Returns</span>
                        </div>
                      </div>
                    </div>

                    <div className="item-actions">
                      <div className="qty-control">
                        <button
                          className="qty-btn"
                          onClick={() => decrementQty(item.id)}
                          type="button"
                        >
                          -
                        </button>
                        <span className="qty-value">{item.qty}</span>
                        <button
                          className="qty-btn"
                          onClick={() => incrementQty(item.id)}
                          type="button"
                        >
                          +
                        </button>
                      </div>

                      <div className="item-buttons">
                        {editId === item.id ? (
                          <>
                            <button
                              className="save-btn"
                              onClick={() => saveEdit(item.id)}
                              type="button"
                            >
                              Save
                            </button>
                            <button
                              className="cancel-btn"
                              onClick={cancelEdit}
                              type="button"
                            >
                              Cancel
                            </button>
                          </>
                        ) : (
                          <>
                            <button
                              className="edit-btn"
                              onClick={() => startEdit(item)}
                              type="button"
                            >
                              Edit
                            </button>
                            <button
                              className="remove-btn"
                              onClick={() => removeItem(item.id)}
                              type="button"
                            >
                              Remove
                            </button>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          <aside className="cart-summary">
            <div className="section-title">
              <h2>Order Summary</h2>
            </div>

            <div className="summary-card">
              <div className="summary-row">
                <span>Subtotal</span>
                <span>₹{subtotal.toLocaleString('en-IN')}</span>
              </div>
              <div className="summary-row">
                <span>Shipping</span>
                <span>{shipping === 0 ? "Free" : `₹${shipping.toLocaleString('en-IN')}`}</span>
              </div>
              <div className="summary-row">
                <span>Tax (GST 18%)</span>
                <span>₹{Math.round(tax).toLocaleString('en-IN')}</span>
              </div>
              <div className="summary-row total">
                <span>Total</span>
                <span>₹{Math.round(total).toLocaleString('en-IN')}</span>
              </div>

              <button 
                className="checkout-btn"
                onClick={handleCheckout}
                disabled={items.length === 0}
              >
                {items.length === 0 ? "Add Items to Checkout" : "Proceed to Checkout"}
              </button>
              <button className="continue-btn" onClick={() => navigate("/")}>
                Continue Shopping
              </button>
              {items.length > 0 && (
                <button 
                  className="clear-cart-btn" 
                  onClick={() => {
                    if (window.confirm("Are you sure you want to clear your cart?")) {
                      clearCart();
                    }
                  }}
                >
                  Clear Cart
                </button>
              )}
            </div>

            <div className="summary-card stats">
              <h3>Cart Insights</h3>
              <div className="stats-grid">
                <div className="stat-box">
                  <span className="stat-value">{items.length}</span>
                  <span className="stat-label">Items</span>
                </div>
                <div className="stat-box">
                  <span className="stat-value">{items.reduce((sum, i) => sum + i.qty, 0)}</span>
                  <span className="stat-label">Quantity</span>
                </div>
                <div className="stat-box">
                  <span className="stat-value">₹{Math.round(subtotal).toLocaleString('en-IN')}</span>
                  <span className="stat-label">Subtotal</span>
                </div>
                <div className="stat-box">
                  <span className="stat-value">18%</span>
                  <span className="stat-label">GST Rate</span>
                </div>
              </div>
            </div>
          </aside>
        </section>
      </div>
    </div>
  );
}

export default Cart;
