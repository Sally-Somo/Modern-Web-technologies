const ProductCard = ({ name, price, imageUrl, onView }) => {
  return (
    <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
      <img src={imageUrl} alt={name} className="w-full h-48 object-cover rounded" />
      <h3 className="mt-3 text-lg font-semibold text-center">{name}</h3>
      <p className="text-rose-600 font-bold">${price.toFixed(2)}</p>
      <button
        onClick={onView}
        className="mt-3 bg-rose-500 text-white px-4 py-2 rounded hover:bg-rose-600 text-sm"
      >
        View
      </button>
    </div>
  );
};

export default ProductCard;
