import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../Context/CartContext.js';// Import the CartContext

const CartPage = () => {
  // Use CartContext to get the cart data and actions
  const { cart, setCart } = useContext(CartContext); // Get cart state and setCart function
  const history = useNavigate();

  // Function to handle quantity change (increase or decrease)
  const handleQuantityChange = (index, action) => {
    const updatedCart = [...cart];
    if (action === 'increase') updatedCart[index].quantity += 1;
    if (action === 'decrease' && updatedCart[index].quantity > 1) updatedCart[index].quantity -= 1;
    setCart(updatedCart); // Update cart state through context
  };

  // Function to handle item removal from the cart
  const handleRemoveItem = (index) => {
    const updatedCart = cart.filter((item, idx) => idx !== index);
    setCart(updatedCart); // Update cart state through context
  };

  // Navigate to checkout page
  const handleCheckout = () => {
    history.push('/checkout');
  };

  // Calculate the total price of the cart
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <section className="max-w-4xl mx-auto mt-10 px-6 py-8 bg-white shadow-md rounded">
      <h2 className="text-3xl font-bold text-center text-rose-600 mb-6">Your Cart</h2>
      
      {/* Cart items */}
      <div>
        {cart.length === 0 ? (
          <p>Your cart is empty!</p>
        ) : (
          cart.map((item, index) => (
            <div key={index} className="flex justify-between items-center mb-4">
              <div>
                <p className="text-lg">{item.name}</p>
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
              </div>
              <div className="space-x-2">
                <button
                  onClick={() => handleQuantityChange(index, 'increase')}
                  className="bg-rose-500 hover:bg-rose-600 text-white py-1 px-3 rounded"
                >
                  Increase
                </button>
                <button
                  onClick={() => handleQuantityChange(index, 'decrease')}
                  className="bg-rose-500 hover:bg-rose-600 text-white py-1 px-3 rounded"
                >
                  Decrease
                </button>
                <button
                  onClick={() => handleRemoveItem(index)}
                  className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded"
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Total Price and Checkout Button */}
      {cart.length > 0 && (
        <>
          <div className="flex justify-between items-center mt-4">
            <p className="text-lg font-semibold">Total: ${totalPrice.toFixed(2)}</p>
            <button
              onClick={handleCheckout}
              className="bg-rose-600 hover:bg-rose-700 text-white py-2 px-6 rounded"
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </section>
  );
};

export default CartPage;
