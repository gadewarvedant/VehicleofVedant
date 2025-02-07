import React, { useState, useEffect } from "react";
import axios from "axios";

const AdminDashboard = () => {
  const [vehicleData, setVehicleData] = useState([]); // Ensures it starts as an empty array
  const [editData, setEditData] = useState(null); // Holds the vehicle being edited
  const [vehicleForm, setVehicleForm] = useState({
    name: "",
    price: "",
    seats: "",
    fuel: "",
    imageUrl: "",
  });

  // Fetch all vehicles on component mount
  useEffect(() => {
    fetchVehicles();
  }, []);

  const fetchVehicles = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/products");
      setVehicleData(response.data);
    } catch (error) {
      console.error("Error fetching vehicles:", error);
      setVehicleData([]); // Prevent undefined issues
    }
  };

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setVehicleForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle Add / Update Vehicle
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      if (editData) {
        // Update vehicle
        await axios.put(`http://localhost:5000/api/products/${editData._id}`, vehicleForm);
        alert("Vehicle updated successfully");
      } else {
        // Add new vehicle
        await axios.post("http://localhost:5000/api/products", vehicleForm);
        alert("Vehicle added successfully");
      }
      fetchVehicles();
      setEditData(null); // Reset edit mode
      setVehicleForm({ name: "", price: "", seats: "", fuel: "", imageUrl: "" }); // Reset form
    } catch (error) {
      console.error("Error saving vehicle:", error);
      alert("Error saving vehicle");
    }
  };

  // Handle Delete Vehicle
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this vehicle?")) {
      try {
        await axios.delete(`http://localhost:5000/api/products/${id}`);
        alert("Vehicle deleted successfully");
        fetchVehicles();
      } catch (error) {
        console.error("Error deleting vehicle:", error);
        alert("Error deleting vehicle");
      }
    }
  };

  // Handle Edit Vehicle
  const handleEdit = (vehicle) => {
    setEditData(vehicle);
    setVehicleForm(vehicle);
  };

  return (
    <div className="min-h-screen bg-gray-800 text-white p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Admin Dashboard</h1>

      {/* Vehicle Form */}
      <form onSubmit={handleSubmit} className="bg-gray-700 p-6 rounded-lg mb-6">
        <h2 className="text-xl font-bold mb-4">{editData ? "Edit Vehicle" : "Add Vehicle"}</h2>
        <div className="grid grid-cols-2 gap-4">
          <input type="text" name="name" value={vehicleForm.name} onChange={handleChange} placeholder="Vehicle Name" className="p-2 rounded bg-gray-600 text-white w-full" required />
          <input type="number" name="price" value={vehicleForm.price} onChange={handleChange} placeholder="Price" className="p-2 rounded bg-gray-600 text-white w-full" required />
          <input type="number" name="seats" value={vehicleForm.seats} onChange={handleChange} placeholder="Seats" className="p-2 rounded bg-gray-600 text-white w-full" required />
          <input type="text" name="fuel" value={vehicleForm.fuel} onChange={handleChange} placeholder="Fuel Type" className="p-2 rounded bg-gray-600 text-white w-full" required />
          <input type="text" name="imageUrl" value={vehicleForm.imageUrl} onChange={handleChange} placeholder="Image URL" className="p-2 rounded bg-gray-600 text-white w-full" required />
        </div>

        <button type="submit" className="mt-4 w-full bg-green-500 p-3 rounded hover:bg-green-600">
          {editData ? "Update Vehicle" : "Add Vehicle"}
        </button>
      </form>

      {/* Vehicles List */}
      <h2 className="text-xl font-bold mb-4">Vehicle List</h2>
      {vehicleData.length === 0 ? (
        <p>No vehicles found</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {vehicleData.map((vehicle) => (
            <div key={vehicle._id} className="bg-gray-700 p-4 rounded-lg shadow-md">
              <img src={vehicle.imageUrl} alt={vehicle.name} className="w-full h-40 object-cover rounded mb-3" />
              <h3 className="text-lg font-bold">{vehicle.name}</h3>
              <p>Price: ${vehicle.price}</p>
              <p>Seats: {vehicle.seats}</p>
              <p>Fuel: {vehicle.fuel}</p>
              <div className="mt-4 flex justify-between">
                <button onClick={() => handleEdit(vehicle)} className="bg-blue-500 px-3 py-1 rounded hover:bg-blue-600">Edit</button>
                <button onClick={() => handleDelete(vehicle._id)} className="bg-red-500 px-3 py-1 rounded hover:bg-red-600">Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
