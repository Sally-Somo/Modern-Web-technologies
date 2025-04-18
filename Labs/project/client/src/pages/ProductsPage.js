import React, { useState } from "react";
import ProductCard from "../Components/ProductCard";
// Import useCart

const ProductsPage = () => {
  const categories = [
    "All",
    "Festivals",
    "Birthdays",
    "Funerals",
    "Sale",
    "Weddings",
    "Valentines",
  ];
  const sortOptions = ["Default", "Price: Low to High", "Price: High to Low"];

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("Default");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const openModal = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setShowModal(false);
  };

  const products = [
    {
      name: "Spring Pink",
      price: 59.99,
      imageUrl: "/images/flower1.png",
      category: "Festivals",
    },
    {
      name: "Rose Romance",
      price: 74.99,
      imageUrl: "/images/flower2.jpg",
      category: "Valentines",
    },
    {
      name: "Garden Charm",
      price: 65.5,
      imageUrl: "/images/flower3.jpg",
      category: "Weddings",
    },
    {
      name: "Bloom & Bash",
      price: 44.99,
      imageUrl: "/images/flower4.png",
      category: "Birthdays",
    },
    {
      name: "Spring Grace",
      price: 35.99,
      imageUrl: "/images/flower5.jpg",
      category: "Festivals",
    },
    {
      name: "Eternal Bloom",
      price: 40.0,
      imageUrl: "/images/flower6.jpg",
      category: "Funerals",
    },
    {
      name: "Crimson Promise",
      price: 100.0,
      imageUrl: "/images/flower7.jpg",
      category: "Valentines",
    },
    {
      name: "Lace & Petals",
      price: 120.0,
      imageUrl: "/images/flower8.jpg",
      category: "Weddings",
    },
    {
      name: "Sunlit Wishes",
      price: 80.0,
      imageUrl: "/images/flower9.jpg",
      category: "Birthdays",
    },
    {
      name: "Confetti Petals",
      price: 50,
      imageUrl: "/images/Flower15.jpg",
      category: "Birthdays",
    },
    {
      name: "Joy in bloom",
      price: 60,
      imageUrl: "/images/flower16.jpg",
      category: "Birthdays",
    },
    {
      name: "Radiant cheers",
      price: 65,
      imageUrl: "/images/flower17.jpg",
      category: "Birthdays",
    },
    {
      name: "Birthday bliss",
      price: 75,
      imageUrl: "/images/flower18.jpg",
      category: "Birthdays",
    },
    {
      name: "Blossom blessings",
      price: 50,
      imageUrl: "/images/flower14.jpg",
      category: "Festivals",
    },
    {
      name: "Heavenly Hues",
      price: 90.0,
      imageUrl: "/images/flower13.jpg",
      category: "Festivals",
    },
    {
      name: "Pastel Praise",
      price: 100.0,
      imageUrl: "/images/flower12.jpg",
      category: "Festivals",
    },
    {
      name: "Autumn's embrace",
      price: 120.0,
      imageUrl: "/images/flower11.jpg",
      category: "Festivals",
    },
    {
      name: "Easter Bloomlight",
      price: 80.0,
      imageUrl: "/images/flower10.jpg",
      category: "Festivals",
    },
    {
      name: "Whispers of serenity",
      price: 59.99,
      imageUrl: "/images/flower19.jpg",
      category: "Funerals",
    },
    {
      name: "Silent Petals",
      price: 74.99,
      imageUrl: "/images/flower20.jpg",
      category: "Funerals",
    },
    {
      name: "Graceful Farewell",
      price: 65.5,
      imageUrl: "/images/flower21.jpg",
      category: "Funerals",
    },
    {
      name: "Tranquil Embrace",
      price: 44.99,
      imageUrl: "/images/flower22.jpg",
      category: "Funerals",
    },
    {
      name: "Peaceful Passage",
      price: 110.0,
      imageUrl: "/images/flower23.jpg",
      category: "Funerals",
    },
    {
      name: "Rose Reverie",
      price: 40.0,
      imageUrl: "/images/flower24.jpg",
      category: "Valentines",
    },
    {
      name: "Sweethearts stems",
      price: 100.0,
      imageUrl: "/images/flower25.jpg",
      category: "Valentines",
    },
    {
      name: "Love in bloom",
      price: 220.0,
      imageUrl: "/images/flower26.jpg",
      category: "Valentines",
    },
    {
      name: "Amour Petals",
      price: 180.0,
      imageUrl: "/images/flower27.jpg",
      category: "Valentines",
    },
    {
      name: "Cupid's Whisper",
      price: 150,
      imageUrl: "/images/flower28.jpg",
      category: "Valentines",
    },
    {
      name: "Forever in bloom",
      price: 260,
      imageUrl: "/images/flower29.jpg",
      category: "Weddings",
    },
    {
      name: "Bridal Grace",
      price: 65,
      imageUrl: "/images/flower30.jpg",
      category: "Weddings",
    },
    {
      name: "Promise Petals",
      price: 280,
      imageUrl: "/images/flower31.jpg",
      category: "Weddings",
    },
    {
      name: "Elegance Entwined",
      price: 250,
      imageUrl: "/images/flower32.jpg",
      category: "Weddings",
    },
    {
      name: "White & Whispers",
      price: 190.0,
      imageUrl: "/images/flower33.jpg",
      category: "Weddings",
    },
    {
      name: "Summer's around",
      price: 100.0,
      imageUrl: "/images/flower34.jpg",
      category: "Sale",
    },
    {
      name: "blooming Garden",
      price: 120.0,
      imageUrl: "/images/flower35.jpg",
      category: "Sale",
    },
    {
      name: "Fleurs Jasmine",
      price: 80.0,
      imageUrl: "/images/flower36.jpg",
      category: "Sale",
    },
  ];

  const filtered =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === "Price: Low to High") return a.price - b.price;
    if (sortBy === "Price: High to Low") return b.price - a.price;
    return 0;
  });

  return (
    <section className="w-full px-4 py-10">
      <h2 className="text-3xl font-bold text-center text-rose-600 mb-6">
        Our Bouquets
      </h2>

      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-3 mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm transition ${
              selectedCategory === cat
                ? "bg-rose-600 text-white"
                : "bg-rose-100 hover:bg-rose-200 text-rose-600"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Sort Dropdown */}
      <div className="flex justify-end mb-6 max-w-screen-xl mx-auto">
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="border px-3 py-2 rounded"
        >
          {sortOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      {/* Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-screen-xl mx-auto">
        {sorted.map((product, idx) => (
          <ProductCard
            key={idx}
            {...product}
            onView={() => openModal(product)}
            // Added the addToCart functionality
          />
        ))}
        {sorted.length === 0 && (
          <p className="text-center text-gray-500 col-span-full">
            No bouquets found in this category.
          </p>
        )}
      </div>

      {/* Modal */}
      {showModal && selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg max-w-md w-full relative">
            <button
              onClick={closeModal}
              className="absolute top-3 right-4 text-gray-600 text-xl font-bold hover:text-rose-600"
            >
              &times;
            </button>
            <img
              src={selectedProduct.imageUrl}
              alt={selectedProduct.name}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl font-semibold text-rose-600">
              {selectedProduct.name}
            </h2>
            <p className="mt-2 text-gray-700">
              Category: {selectedProduct.category}
            </p>
            <p className="text-lg mt-2 font-bold">
              ${selectedProduct.price.toFixed(2)}
            </p>
            <p className="mt-4 text-sm text-gray-600">
              This bouquet is perfect for{" "}
              {selectedProduct.category.toLowerCase()} occasions.
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductsPage;
