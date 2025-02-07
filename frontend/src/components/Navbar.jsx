import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.jpg'; // Replace with your logo path
import ProfileIcon from '../assets/ProfileIcon.jpg'; // Replace with your profile icon path

const Navbar = ({ isLoggedIn, userName, email, setIsLoggedIn, setUserName, setEmail }) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false); // State for profile popup
  const navigate = useNavigate();

  // Check if admin is logged in
  const isAdmin = localStorage.getItem('adminToken'); 

  // Handle user logout
  const handleLogout = () => {
    localStorage.removeItem('authToken');
    setIsLoggedIn(false);
    setUserName('');
    setEmail('');
    navigate('/');
  };

  // Handle admin logout
  const handleAdminLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/');
  };

  // Toggle Profile Popup
  const toggleProfilePopup = () => {
    setIsProfileOpen((prev) => !prev);
  };

  return (
    <nav className="bg-gray-800 text-white px-6 py-4 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src={logo} alt="Vehicle Book Logo" className="h-8 w-auto" />
        <Link to="/" className="text-2xl font-bold text-white">
          VehicleBook
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="flex space-x-6">
        <Link to="/" className="hover:text-blue-400">Home</Link>
        <Link to="/about" className="hover:text-blue-400">About</Link>
        <Link to="/FindCars" className="hover:text-blue-400">FindCars</Link>
        <Link to="/contact" className="hover:text-blue-400">Contact</Link>
      </div>

      {/* Profile, User & Admin Options */}
      <div className="relative flex items-center space-x-4">
        {isLoggedIn ? (
          <>
            {/* Profile Icon */}
            <img
              src={ProfileIcon}
              alt="User Profile"
              className="h-10 w-10 rounded-full cursor-pointer"
              onClick={toggleProfilePopup}
            />

            {/* Profile Popup */}
            {isProfileOpen && (
              <div className="absolute right-0 mt-2 w-60 bg-blue-600 text-white p-4 rounded-lg shadow-lg z-50">
                <h2 className="text-lg font-bold mb-2">User Profile</h2>
                <p className="text-sm mb-1">
                  <span className="font-semibold">Name:</span> {userName}
                </p>
                <p className="text-sm mb-3">
                  <span className="font-semibold">Email:</span> {email}
                </p>
                <button
                  className="bg-red-500 text-white w-full py-2 rounded hover:bg-red-600"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            )}
          </>
        ) : (
          <>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              onClick={() => navigate('/login')}
            >
              Login
            </button>
          </>
        )}

        {/* Admin Login / Dashboard */}
        {isAdmin ? (
          <>
            <Link
              to="/admin/dashboard"
              className="bg-green-600 px-4 py-2 rounded hover:bg-green-700"
            >
              Admin Dashboard
            </Link>
            <button
              className="bg-red-500 px-4 py-2 rounded hover:bg-red-600"
              onClick={handleAdminLogout}
            >
              Admin Logout
            </button>
          </>
        ) : (
          <button
            className="bg-purple-500 px-4 py-2 rounded hover:bg-purple-600"
            onClick={() => navigate('/admin/login')}
          >
            Admin Login
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
