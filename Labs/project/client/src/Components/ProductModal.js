import React from "react";

const ProductModal = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center p-4">
      <div className="bg-white max-w-md w-full rounded-lg shadow-lg p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-red-600 text-xl"
        >
          &times;
        </button>

        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-64 object-cover rounded mb-4"
        />

        <h2 className="text-2xl font-bold text-rose-600 mb-2">{product.name}</h2>
        <p className="text-gray-600 text-sm mb-4">{product.description}</p>
        <p className="text-xl font-semibold text-gray-800 mb-4">${product.price.toFixed(2)}</p>

        <button className="bg-rose-500 hover:bg-rose-600 text-white py-2 px-4 rounded w-full">
          Book This Bouquet
        </button>
      </div>
    </div>
  );
};

export default ProductModal;
