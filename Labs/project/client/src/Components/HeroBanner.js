import React from "react";

const HeroBanner = () => {
  return (
    <section className="bg-gradient-to-r from-rose-100 via-pink-200 to-rose-300 py-20 text-center px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-rose-700 mb-4">Des Fleurs Blooms</h1>
        <p className="text-lg md:text-xl text-gray-700 mb-6">Elegant floral arrangements for every occasion</p>
        <a
          href="/booking"
          className="inline-block bg-rose-600 hover:bg-rose-700 text-white px-6 py-3 rounded-lg shadow"
        >
          Book an Appointment
        </a>
      </div>
    </section>
  );
};

export default HeroBanner;
