import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#f9f0f2] text-center text-sm py-4 text-gray-600">
      <p>&copy; {new Date().getFullYear()} Des Fleurs Blooms. All rights reserved.</p>
    </footer>
  );
};

export default Footer;