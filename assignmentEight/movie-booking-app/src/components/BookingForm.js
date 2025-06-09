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
    navigate(`/confirmation`, { state: { ...form, movieId: id } });
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Enter your details</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          placeholder="Full Name"
          className="w-full p-2 border"
          required
          onChange={handleChange}
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          className="w-full p-2 border"
          required
          onChange={handleChange}
        />
        <input
          name="mobile"
          type="tel"
          placeholder="Mobile"
          className="w-full p-2 border"
          required
          onChange={handleChange}
        />
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
