import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const FindCars = () => {
  const [vehicles, setVehicles] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/products");
        setVehicles(response.data);
      } catch (error) {
        console.error("Error fetching vehicles:", error);
      }
    };

    fetchVehicles();
  }, []);

  // Navigate to the booking page with selected vehicle data
  const handleRentVehicle = (vehicle) => {
    navigate("/booking", { state: { vehicle } });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Available Vehicles</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {vehicles.map((vehicle) => (
          <div key={vehicle._id} className="bg-white p-4 rounded-lg shadow-lg">
            <img src={vehicle.imageUrl} alt={vehicle.name} className="w-full h-40 object-cover rounded-lg" />
            <h2 className="text-xl font-semibold mt-2">{vehicle.name}</h2>
            <p className="text-gray-700">Seats: {vehicle.seats}</p>
            <p className="text-gray-700">Fuel: {vehicle.fuel}</p>
            <p className="text-gray-700 font-bold">Price: ${vehicle.price} per day</p>
            <button
              onClick={() => handleRentVehicle(vehicle)}
              className="mt-3 bg-blue-500 text-white px-4 py-2 rounded-lg w-full hover:bg-blue-600"
            >
              Rent Vehicle
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FindCars;
