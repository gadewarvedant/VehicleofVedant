import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const Booking = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { vehicle } = location.state || {};

  const [bookingData, setBookingData] = useState({
    userName: "",
    email: "",
    phone: "",
    address: "",
    startDate: "",
    endDate: "",
    vehicleId: vehicle ? vehicle._id : "",
  });

  const handleChange = (e) => {
    setBookingData({ ...bookingData, [e.target.name]: e.target.value });
  };

  const handlePayment = async (e) => {
    e.preventDefault();
    
    try {
      // 1️⃣ Create an order on the backend
      const orderResponse = await axios.post("https://vehicleofvedant.onrender.com/api/payment/create-order", {
        amount: vehicle.price * 100, // Convert to paisa
        currency: "INR",
      });

      const { order } = orderResponse.data;

      // 2️⃣ Load Razorpay script
      const options = {
        key: "rzp_test_j1JHIeYj96OEm4", // Replace with your actual Razorpay key
        amount: order.amount,
        currency: order.currency,
        name: "Vehicle Rental Service",
        description: `Payment for ${vehicle.name}`,
        image: "logo.jpg", // Optional
        order_id: order.id,
        handler: async function (response) {
          // 3️⃣ Handle successful payment
          try {
            await axios.post("https://vehicleofvedant.onrender.com/api/payment/verify-payment", {
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_order_id: response.razorpay_order_id,
              razorpay_signature: response.razorpay_signature,
            });

            alert("Payment successful! Booking confirmed.");
            navigate("/"); // Redirect after success
          } catch (error) {
            console.error("Payment verification failed", error);
            alert("Payment verification failed. Please contact support.");
          }
        },
        prefill: {
          name: bookingData.userName,
          email: bookingData.email,
          contact: bookingData.phone,
        },
        theme: {
          color: "#3399cc",
        },
      };

      const razorpayInstance = new window.Razorpay(options);
      razorpayInstance.open();

    } catch (error) {
      console.error("Error initiating payment:", error);
      alert("Payment failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-4">Vehicle Booking</h2>

        {vehicle && (
          <div className="mb-4">
            <h3 className="text-lg font-semibold">{vehicle.name}</h3>
            <img src={vehicle.imageUrl} alt={vehicle.name} className="w-full h-40 object-cover rounded-lg" />
            <p className="text-gray-700">Seats: {vehicle.seats}</p>
            <p className="text-gray-700">Fuel: {vehicle.fuel}</p>
            <p className="text-gray-700 font-bold">Price: ₹{vehicle.price} per day</p>
          </div>
        )}

        <form onSubmit={handlePayment}>
          <div className="mb-3">
            <label className="block">Name</label>
            <input type="text" name="userName" value={bookingData.userName} onChange={handleChange} required className="w-full p-2 border rounded" />
          </div>

          <div className="mb-3">
            <label className="block">Email</label>
            <input type="email" name="email" value={bookingData.email} onChange={handleChange} required className="w-full p-2 border rounded" />
          </div>

          <div className="mb-3">
            <label className="block">Phone</label>
            <input type="text" name="phone" value={bookingData.phone} onChange={handleChange} required className="w-full p-2 border rounded" />
          </div>

          <div className="mb-3">
            <label className="block">Address</label>
            <input type="text" name="address" value={bookingData.address} onChange={handleChange} required className="w-full p-2 border rounded" />
          </div>

          <div className="mb-3">
            <label className="block">Start Date</label>
            <input type="date" name="startDate" value={bookingData.startDate} onChange={handleChange} required className="w-full p-2 border rounded" />
          </div>

          <div className="mb-3">
            <label className="block">End Date</label>
            <input type="date" name="endDate" value={bookingData.endDate} onChange={handleChange} required className="w-full p-2 border rounded" />
          </div>

          <button type="submit" className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600">
            Confirm & Pay
          </button>
        </form>
      </div>
    </div>
  );
};

export default Booking;
