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
import MobileDetail from "./components/mobile/MobileDetail";
import Electronics from "./components/Electronics/Electronics";
import ElectronicsDetail from "./components/Electronics/ElectronicsDetail";
import Fashion from "./components/Fashion/Fashion";
import FashionDetail from "./components/Fashion/FashionDetail";
import Monitor from "./components/Monitor/Monitor";
import MonitorDetail from "./components/Monitor/MonitorDetail";
import HairDryer from "./components/hair Dryer/hairdryer";
import HairDryerDetail from "./components/hair Dryer/HairDryerDetail";
import Beauty from "./components/Beauty/Beauty";
import BeautyDetail from "./components/Beauty/BeautyDetail";
import Grocery from "./components/Grocery/Grocery";
import GroceryDetail from "./components/Grocery/GroceryDetail";
import Toys from "./components/Toys/Toys";
import ToysDetail from "./components/Toys/ToysDetail";
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
          <Route path="/mobiles/:id" element={<MobileDetail />} />
          <Route path="/electronics" element={<Electronics />} />
          <Route path="/electronics/:id" element={<ElectronicsDetail />} />
          <Route path="/fashion" element={<Fashion />} />
          <Route path="/fashion/:id" element={<FashionDetail />} />
          <Route path="/monitor" element={<Monitor />} />
          <Route path="/monitor/:id" element={<MonitorDetail />} />
          <Route path="/hair-dryer" element={<HairDryer />} />
          <Route path="/hair-dryer/:id" element={<HairDryerDetail />} />
          <Route path="/beauty" element={<Beauty />} />
          <Route path="/beauty/:id" element={<BeautyDetail />} />
          <Route path="/grocery" element={<Grocery />} />
          <Route path="/grocery/:id" element={<GroceryDetail />} />
          <Route path="/toys" element={<Toys />} />
          <Route path="/toys/:id" element={<ToysDetail />} />
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
