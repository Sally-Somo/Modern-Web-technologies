import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-rose-600">Des Fleurs Blooms</Link>
        <div className="space-x-4">
          <Link to="/" className="hover:text-rose-600">Home</Link>
          <Link to="/about" className="hover:text-rose-600">About</Link>
          <Link to="/products" className="hover:text-rose-600">Products</Link>
          <Link to="/booking" className="hover:text-rose-600">Booking</Link>
          <Link to="/contact" className="hover:text-rose-600">Contact</Link>
          <Link to="/login" className="text-white bg-rose-500 hover:bg-rose-600 px-3 py-1 rounded">Login</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;