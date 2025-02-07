import React from 'react';

const ProfilePopup = ({ userName, email, onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80 relative">
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
          onClick={onClose}
        >
          ✖
        </button>
        <h2 className="text-xl font-semibold mb-4">Profile Information</h2>
        <p><strong>Name:</strong> {userName}</p>
        <p><strong>Email:</strong> {email}</p>
      </div>
    </div>
  );
};

export default ProfilePopup;
