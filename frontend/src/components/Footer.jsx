import React from 'react';

const Footer = () => {
  return (
    <footer class="bg-gray-800 text-white py-6">
  <div class="container mx-auto px-6">
    <div class="flex flex-col md:flex-row justify-between space-y-6 md:space-y-0">

      <div class="text-center md:text-left">
        <h2 class="text-2xl font-bold">Vehicle Rental System</h2>
        <p class="text-sm mt-2">Your reliable partner in vehicle rentals.</p>
      </div>

      
      <div class="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 text-center md:text-left">
        <a href="#home" class="text-sm hover:text-green-500">Home</a>
        <a href="#about" class="text-sm hover:text-green-500">About Us</a>
        <a href="#services" class="text-sm hover:text-green-500">Services</a>
        <a href="#contact" class="text-sm hover:text-green-500">Contact</a>
        <a href="#privacy" class="text-sm hover:text-green-500">Privacy Policy</a>
      </div>

      
      <div class="text-center md:text-right">
        <p class="text-sm">Email: <a href="mailto:info@vehiclerental.com" class="hover:text-green-500">info@vehiclerental.com</a></p>
        <p class="text-sm">Phone: <a href="tel:+1234567890" class="hover:text-green-500">+123-456-7890</a></p>
        <div class="flex justify-center md:justify-end space-x-4 mt-2">
          <a href="#" class="hover:text-green-500">Facebook</a>
          <a href="#" class="hover:text-green-500">Twitter</a>
          <a href="#" class="hover:text-green-500">Instagram</a>
        </div>
      </div>
    </div>

    
    <div class="mt-6 border-t border-gray-600 pt-4 text-center">
      <p class="text-sm">&copy; 2025 Vehicle Rental System. All rights reserved.</p>
    </div>
  </div>
</footer>

  );
};

export default Footer;