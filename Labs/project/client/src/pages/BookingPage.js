import React, { useState } from "react";

const BookingPage = () => {
  // Form state and error state
  const [formData, setFormData] = useState({
    serviceType: "",
    date: "",
    time: "",
    name: "",
    email: "",
  });
  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Validate form fields
  const validateForm = () => {
    const newErrors = {};
    if (!formData.serviceType) newErrors.serviceType = "Please select a service type!";
    if (!formData.date) newErrors.date = "Please select a date!";
    if (!formData.time) newErrors.time = "Please select a time!";
    if (!formData.name) newErrors.name = "Please enter your name!";
    if (!formData.email) newErrors.email = "Please enter your email!";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid!";
    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      // Form is valid, proceed with submission (e.g., show success message or save booking)
      alert("Your booking has been secured!");
    } else {
      setErrors(validationErrors); // Show validation errors
    }
  };

  return (
    <section className="max-w-xl mx-auto mt-10 p-6 bg-white shadow-md rounded">
      <h2 className="text-2xl font-bold mb-4 text-center text-rose-600">Book a Floral Appointment</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Service Type */}
        <select
          name="serviceType"
          value={formData.serviceType}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded"
        >
          <option value="">Choose Service Type</option>
          <option value="Wedding">Wedding</option>
          <option value="Birthday">Birthday</option>
          <option value="Funeral">Funeral</option>
          <option value="Festival">Festival</option>
          <option value="Sale">Sale</option>
        </select>
        {errors.serviceType && <p className="text-red-500 text-sm">{errors.serviceType}</p>}

        {/* Date */}
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded"
        />
        {errors.date && <p className="text-red-500 text-sm">{errors.date}</p>}

        {/* Time */}
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded"
        />
        {errors.time && <p className="text-red-500 text-sm">{errors.time}</p>}

        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded"
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-rose-500 hover:bg-rose-600 text-white py-2 rounded"
        >
          Book Now
        </button>
      </form>
    </section>
  );
};

export default BookingPage;
