import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "../src/Context/CartContext"; // Corrected the import to match the actual file name
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import AboutPage from "./pages/AboutPage";
import BookingPage from "./pages/BookingPage";
import ProductsPage from "./pages/ProductsPage";
import ContactPage from "./pages/ContactPage";
import CartPage from "./pages/Cartpage";
import CheckoutPage from "./pages/CheckoutPage";

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="flex flex-col min-h-screen bg-[#fffaf7] text-[#222] font-sans">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/booking" element={<BookingPage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
