"use client";

import { useState } from 'react';

const Page = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [successMessage, setSuccessMessage] = useState(''); // State for success message
  const [errorMessage, setErrorMessage] = useState('');     // State for error message

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle form submission using fetch
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
  
    try {
      // Send form data to PHP
      const response = await fetch('http://localhost/global-fire-nextjs/app/contact/contact.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded', // Use URL-encoded format
        },
        body: new URLSearchParams(formData).toString()
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const result = await response.json();
      
      if (result.success) {
        // Display success message
        setSuccessMessage('Message sent successfully!');
        setErrorMessage(''); // Clear error message
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
      } else {
        setErrorMessage(result.message || 'Failed to send message. Please try again.');
        setSuccessMessage('');
      }
    } catch (error) {
      console.error('Error during form submission:', error);
      setErrorMessage('Failed to send message. Please try again later.');
    }
  };
  
  return (
    <section id="contact" className="flex flex-col md:flex-row px-5 justify-center gap-x-10 py-20 max-w-6xl mx-auto">
      <div className="max-w-6xl w-full md:w-1/2 lg:w-1/3">
        <h2 className="text-4xl font-bold text-red-500 mb-4">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-gray-700">Name:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-2 border rounded-md" />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700">Email:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-2 border rounded-md" />
          </div>
          <div>
            <label htmlFor="phone" className="block text-gray-700">Phone Number:</label>
            <input type="text" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-2 border rounded-md" />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700">Message:</label>
            <textarea id="message" name="message" rows="4" value={formData.message} onChange={handleChange} required className="w-full px-4 py-2 border rounded-md"></textarea>
          </div>
          <button type="submit" className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transform hover:scale-105 transition-transform">
            Send Message
          </button>

          {/* Show success message after sending */}
          {successMessage && (
            <div className="mt-4 text-green-500 font-semibold">
              {successMessage}
            </div>
          )}

          {/* Show error message if submission fails */}
          {errorMessage && (
            <div className="mt-4 text-red-500 font-semibold">
              {errorMessage}
            </div>
          )}
        </form>
      </div>
      <div className="mt-10 bg-gray-100 p-6 rounded-lg shadow-md w-full md:w-1/2 lg:w-1/3">
        <h3 className="text-2xl font-bold text-red-500 mb-4">Address:</h3>
        <p className="text-lg text-gray-700 mb-2">Office No. 303, Guru Atman Society, Plot no. 23,</p>
        <p className="text-lg text-gray-700 mb-2">Sector-17, Ulwe,</p>
        <p className="text-lg text-gray-700 mb-2">Navi Mumbai Panvel-410206</p>
        <p className="text-lg text-gray-700 mb-2">Email: <a href="mailto:global25fireservices@gmail.com" className="text-red-500 hover:underline">global25fireservices@gmail.com</a></p>
        <p className="text-lg text-gray-700 mb-2">Phone: <a href="tel:+919987918077" className="text-red-500 hover:underline">+91 99879 18077</a></p>
      </div>
    </section>
  );
};

export default Page;