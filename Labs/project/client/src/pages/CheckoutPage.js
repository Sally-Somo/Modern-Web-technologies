import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CheckoutPage = () => {
  const [shippingInfo, setShippingInfo] = useState({ name: '', address: '', email: '' });
  const [paymentInfo, setPaymentInfo] = useState({ cardNumber: '', expiry: '', cvv: '' });
  const [isOrderComplete, setIsOrderComplete] = useState(false);
  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle order processing here (e.g., save to backend, process payment)
    setIsOrderComplete(true);
    // Optionally, clear cart here
  };

  return (
    <section>
      {isOrderComplete ? (
        <div>
          <h2>Thank you for your order!</h2>
          <p>Your order has been placed successfully. We will send you a confirmation email shortly.</p>
          <button onClick={() => history.push('/')}>Back to Home</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <h2>Shipping Information</h2>
          <input
            type="text"
            placeholder="Your Name"
            value={shippingInfo.name}
            onChange={(e) => setShippingInfo({ ...shippingInfo, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Your Address"
            value={shippingInfo.address}
            onChange={(e) => setShippingInfo({ ...shippingInfo, address: e.target.value })}
          />
          <input
            type="email"
            placeholder="Your Email"
            value={shippingInfo.email}
            onChange={(e) => setShippingInfo({ ...shippingInfo, email: e.target.value })}
          />

          <h2>Payment Information</h2>
          <input
            type="text"
            placeholder="Card Number"
            value={paymentInfo.cardNumber}
            onChange={(e) => setPaymentInfo({ ...paymentInfo, cardNumber: e.target.value })}
          />
          <input
            type="text"
            placeholder="Expiry Date"
            value={paymentInfo.expiry}
            onChange={(e) => setPaymentInfo({ ...paymentInfo, expiry: e.target.value })}
          />
          <input
            type="text"
            placeholder="CVV"
            value={paymentInfo.cvv}
            onChange={(e) => setPaymentInfo({ ...paymentInfo, cvv: e.target.value })}
          />

          <button type="submit">Place Order</button>
        </form>
      )}
    </section>
  );
};

export default CheckoutPage;
