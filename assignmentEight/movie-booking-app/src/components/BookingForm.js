import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const BookingForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', mobile: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/confirmation', { state: { ...form, movieId: id } });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-6">
      <div className="bg-white shadow-2xl rounded-2xl w-full max-w-lg p-8 space-y-6 animate-fade-in">
        <h2 className="text-3xl font-extrabold text-gray-800 text-center">🎟️ Book Your Seat</h2>
        <p className="text-gray-500 text-center">Fill in your details below to confirm your booking</p>
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            name="name"
            placeholder="👤 Full Name"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
            onChange={handleChange}
          />
          <input
            name="email"
            type="email"
            placeholder="📧 Email Address"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
            onChange={handleChange}
          />
          <input
            name="mobile"
            type="tel"
            placeholder="📱 Mobile Number"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
            onChange={handleChange}
          />
          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg transition duration-300 transform hover:scale-105 shadow-md"
          >
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
