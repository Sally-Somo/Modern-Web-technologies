import React, { useState } from "react";
import HeroBanner from "../Components/HeroBanner";
import ProductCard from "../Components/ProductCard";
import ProductModal from "../Components/ProductModal"; // <-- make sure this is imported

const HomePage = () => {
  const featured = [
    {
      name: "Spring Pink",
      price: 59.99,
      imageUrl: "/images/flower1.png",
      description: "A charming bouquet with soft pink blossoms perfect for spring days.",
    },
    {
      name: "Rose Romance",
      price: 74.99,
      imageUrl: "/images/flower2.jpg",
      description: "Classic red roses wrapped in elegance, made for romantic moments.",
    },
    {
      name: "Garden Charm",
      price: 65.50,
      imageUrl: "/images/flower3.jpg",
      description: "A natural mix of wild and graceful blooms for everyday charm.",
    },
    {
      name: "Bloom & Bash",
      price: 44.99,
      imageUrl: "/images/flower4.png",
      description: "A joyful bouquet bursting with party-ready colors.",
    },
    {
      name: "Spring Grace",
      price: 35.99,
      imageUrl: "/images/flower5.jpg",
      description: "Elegant pastels to celebrate Easter or any fresh beginning.",
    },
    {
      name: "Eternal Bloom",
      price: 40.00,
      imageUrl: "/images/flower6.jpg",
      description: "A gentle arrangement that honors and soothes the soul.",
    },
    {
      name: "Crimson Promise",
      price: 100.00,
      imageUrl: "/images/flower7.jpg",
      description: "A bold expression of love with deep red tones.",
    },
    {
      name: "Lace & Petals",
      price: 120.00,
      imageUrl: "/images/flower8.jpg",
      description: "A romantic and refined bridal bouquet of soft florals.",
    },
    {
      name: "Sunlit Wishes",
      price: 80.00,
      imageUrl: "/images/flower9.jpg",
      description: "Bright and hopeful, perfect for joyful birthday celebrations.",
    }
  ];

  // 🔥 MODAL STATE
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleView = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  return (
    <div>
      <HeroBanner />

      <section className="py-10 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-rose-600 mb-6">Featured Bouquets</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {featured.map((item, idx) => (
            <ProductCard key={idx} {...item} onView={() => handleView(item)} />
          ))}
        </div>

        <p className="text-center text-gray-700 mt-10 max-w-2xl mx-auto text-lg">
          Each bouquet is thoughtfully crafted with seasonal blooms, handpicked for every moment that matters — from joyful birthdays to heartfelt farewells, Easter brunches to wedding vows.
        </p>

        <footer className="text-center mt-16 text-sm text-gray-500">Contact us for custom orders & event floral design.</footer>
      </section>

      {/* 🌸 Product View Modal */}
      {showModal && selectedProduct && (
        <ProductModal product={selectedProduct} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default HomePage;
