import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";

/* ===== Components ===== */
import Header from "./components/Header";
import Categories from "./components/Categories";
import Banner from "./components/Banner";
import Products from "./components/Products";
import Footer from "./components/Footer";

/* ===== Pages ===== */
import Mobile from "./components/mobile/mobile";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Cart from "./pages/Cart";
import Login from "./components/Login";   // ✅ added correctly

/* =========================
   Home Layout
========================= */
function HomeLayout() {
  return (
    <>
      <Categories />
      <Banner />
      <Products />
    </>
  );
}

/* =========================
   App
========================= */
export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>

        {/* Header shown on all pages */}
        <Header />

        <Routes>
          <Route path="/" element={<HomeLayout />} />
          <Route path="/mobiles" element={<Mobile />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />

          {/* ✅ LOGIN ROUTE ADDED */}
          <Route path="/login" element={<Login />} />
        </Routes>

        {/* Footer shown on all pages */}
        <Footer />

      </BrowserRouter>
    </CartProvider>
  );
}
