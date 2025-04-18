import React from "react";


const AboutPage = () => {
  return (
    <section className="py-12 px-4 max-w-5xl mx-auto">
      {/* Header */}
      <h2 className="text-4xl font-bold text-rose-600 mb-8 text-center">About Des Fleurs Blooms</h2>

      {/* Story Section */}
      <div className="mb-12 text-lg text-gray-700 space-y-6 text-center">
        <p>
          At <span className="font-semibold text-rose-500">Des Fleurs Blooms</span>, we see floral design as an art form—one that blends nature's elegance with human emotion. What began as a love for flowers and creativity has blossomed into a boutique studio known for meaningful, memorable floral experiences.
        </p>
        <p>
          Our journey started with a simple desire: to bring joy and comfort through thoughtfully arranged blooms. Today, every bouquet we design is a tribute to life’s most cherished moments. Whether it’s love, remembrance, celebration, or healing—we let flowers do the talking.
        </p>
        <p>
          We don’t believe in cookie-cutter arrangements. Each piece is carefully curated using seasonal, fresh flowers, designed to match the tone, mood, and sentiment of your occasion.
        </p>
      </div>

      {/* Dynamic Flower Gallery from API */}
   

      {/* Specialties Section */}
      <div className="mb-12">
        <h3 className="text-3xl font-semibold text-rose-500 mb-6 text-center">Our Floral Specialties</h3>
        <p className="text-lg text-gray-700 text-center mb-4">
          Des Fleurs Blooms is known for our custom floral designs tailored for meaningful events and seasonal celebrations. Our team takes the time to understand your vision, then brings it to life with floral artistry.
        </p>
        <ul className="text-lg text-gray-700 list-disc list-inside mt-4 space-y-2 text-center sm:text-left sm:px-8">
          <li><strong>Valentine’s Day:</strong> Romantic arrangements to capture the heart.</li>
          <li><strong>Easter:</strong> Fresh, soft palettes for spring celebrations.</li>
          <li><strong>Thanksgiving:</strong> Warm, earthy florals to bring the table to life.</li>
          <li><strong>Birthdays:</strong> Personalized bouquets full of color and personality.</li>
          <li><strong>Funerals:</strong> Elegant tributes that express love and remembrance.</li>
          <li><strong>Weddings:</strong> Full-service floral design from ceremony to reception.</li>
        </ul>
      </div>

      {/* Payment Options */}
      <div className="mb-12">
        <h3 className="text-3xl font-semibold text-rose-500 mb-4 text-center">Payment Options</h3>
        <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
          We accept a variety of secure and convenient payment methods including Visa, MasterCard, PayPal, Apple Pay, and e-Transfers. For custom events such as weddings or corporate installations, we also offer deposit-based booking and flexible billing.
        </p>
      </div>

      {/* Delivery Policy */}
      <div className="mb-6">
        <h3 className="text-3xl font-semibold text-rose-500 mb-4 text-center">Delivery & Service Policy</h3>
        <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-4">
          We offer local delivery for everyday arrangements, as well as full-service delivery and setup for events. Same-day delivery is available for orders placed before 12 PM, depending on flower availability. Delivery fees vary by distance and order size.
        </p>
        <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
          If you have specific requests, allergies, or need guidance with your floral selection, our team is always happy to help. Customer satisfaction and floral freshness are at the heart of everything we do.
        </p>
      </div>
    </section>
  );
};

export default AboutPage;
