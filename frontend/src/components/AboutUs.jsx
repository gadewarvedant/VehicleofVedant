import React from 'react';
import picture from '../assets/picture.jpg';


const AboutUs = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center">
      {/* Header Section */}
      <div className="relative w-full h-64 bg-cover bg-center" style={{ backgroundImage: `url(${picture})` }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">
          <h1 className="text-4xl font-bold">About Us</h1>
          <p className="text-lg mt-2">Learn more about our mission, values, and services</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">Who We Are</h2>
        <p className="text-gray-700 text-center max-w-3xl mx-auto">
          We are a leading vehicle rental service dedicated to providing an easy, fast, and reliable way to rent vehicles.
          With years of experience, we pride ourselves on offering high-quality service and a wide range of vehicles to meet
          every need.
        </p>

        {/* Team Section */}
        <h2 className="text-3xl font-semibold text-gray-800 text-center mt-12 mb-6">Our Team</h2>
        <div className="flex justify-center space-x-6">
          <div className="text-center">
            <img src="/assets/team1.jpg" alt="Team Member" className="rounded-full w-24 h-24 mx-auto" />
            <h3 className="text-lg font-medium mt-2">John Doe</h3>
            <p className="text-sm text-gray-600">CEO</p>
          </div>
          <div className="text-center">
            <img src="/assets/team2.jpg" alt="Team Member" className="rounded-full w-24 h-24 mx-auto" />
            <h3 className="text-lg font-medium mt-2">Jane Smith</h3>
            <p className="text-sm text-gray-600">Marketing Head</p>
          </div>
          <div className="text-center">
            <img src="/assets/team3.jpg" alt="Team Member" className="rounded-full w-24 h-24 mx-auto" />
            <h3 className="text-lg font-medium mt-2">Alice Brown</h3>
            <p className="text-sm text-gray-600">Operations Manager</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
