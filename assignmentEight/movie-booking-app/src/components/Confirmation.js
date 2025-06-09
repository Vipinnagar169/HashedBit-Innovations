import React from 'react';
import { useLocation } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const Confirmation = () => {
  const { state } = useLocation();
  const bookingId = uuidv4().slice(0, 8); // random 8-character ID

  return (
    <div className="p-6 text-center">
      <h2 className="text-3xl font-bold text-green-700">Booking Confirmed!</h2>
      <p className="mt-4 text-lg">Booking ID: <strong>{bookingId}</strong></p>
      <p className="mt-2">Name: {state.name}</p>
      <p>Email: {state.email}</p>
      <p>Mobile: {state.mobile}</p>
    </div>
  );
};

export default Confirmation;
