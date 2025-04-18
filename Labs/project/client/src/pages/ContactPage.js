import React, { useState } from "react"; 

const ContactPage = () => {
  // Form state and error state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
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
    if (!formData.name) newErrors.name = "Name is required!";
    if (!formData.email) newErrors.email = "Email is required!";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid!";
    if (!formData.message) newErrors.message = "Message is required!";
    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      // Form is valid, proceed with submission (e.g., show success message or send email)
      alert("Thank you for contacting us!");
    } else {
      setErrors(validationErrors); // Show validation errors
    }
  };

  return (
    <section className="max-w-4xl mx-auto mt-10 px-6 py-8 bg-white shadow-md rounded">
      {/* Contact Information */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-center text-rose-600 mb-6">Contact Us</h2>
        
        {/* Social Media & Email Information */}
        <div className="text-center mb-6">
          <p className="text-lg mb-2">Follow us on Social Media:</p>
          <div className="flex justify-center gap-6">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-rose-600 hover:text-rose-700">Instagram</a>
            <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" className="text-rose-600 hover:text-rose-700">TikTok</a>
            <a href="mailto:sallysomo74@gmail.com" className="text-rose-600 hover:text-rose-700">Email</a>
          </div>
        </div>

        {/* Customer Service Hours & Location */}
        <div className="text-center mb-6">
          <p className="text-lg mb-2">Customer Service Hours:</p>
          <p className="text-gray-700 mb-4">Mon - Fri: 9:00 AM - 6:00 PM</p>
          <p className="text-lg mb-2">Saturdays: 11:00 AM - 4:00 PM </p>
          <p className="text-lg mb-2">Sundays : 1:00 PM - 4:00 PM</p>
          <p className="text-lg mb-2">Our Location:</p>
          <p className="text-gray-700">123 Flower Street, Toronto, Canada</p>
          <p className="text-gray-700">Open Hours: Mon - Fri: 10:00 AM - 7:00 PM</p>
          <p className="text-gray-700">Saturdays: 11:00 AM - 4:00 PM</p>
          <p className="text-gray-700">Sundays: 1:00 PM - 4:00 PM</p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-rose-50 p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-bold text-center text-rose-600 mb-4">Send Us a Message</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
            rows="4"
          />
          {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}

          <button type="submit" className="w-full bg-rose-500 hover:bg-rose-600 text-white py-2 rounded">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactPage;
