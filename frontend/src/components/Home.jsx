import React from 'react';
import car from '../assets/car.jpg'; // Adjust the path as needed

const Home = () => {
  return (
    <div className="relative bg-gray-900 text-white min-h-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-70"
        style={{ backgroundImage: `url(${car})` }}
      ></div>


      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-100px)]">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">Fast & Easy Way To Rent A Car</h1>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            A small river named Duden flows by their place and supplies it with the
            necessary regelialia. It is a paradisematic country, in which roasted parts.
          </p>
          <button className="bg-green-500 text-white px-6 py-3 rounded-full flex items-center hover:bg-green-600">
            <span className="mr-2">▶</span> Easy steps for renting a car
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
