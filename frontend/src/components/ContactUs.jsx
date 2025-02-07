import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8">
      {/* Header Section */}
      <div className="bg-black text-white py-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold">Contact Us</h1>
          <p className="mt-2 text-lg">Every Rental Has a Story</p>
        </div>
      </div>

      {/* Contact Information Section */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Address */}
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <div className="text-green-600 text-3xl">📍</div>
            <h3 className="text-xl font-semibold mt-4">Address</h3>
            <p className="text-gray-700 mt-2">baif road, Near Wageshwar Mandir, Wagholi</p>
          </div>

          {/* Email */}
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <div className="text-green-600 text-3xl">📧</div>
            <h3 className="text-xl font-semibold mt-4">Email</h3>
            <p className="text-gray-700 mt-2">contact@vehiclerental.com</p>
          </div>

          {/* Phone */}
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <div className="text-green-600 text-3xl">📞</div>
            <h3 className="text-xl font-semibold mt-4">Phone</h3>
            <p className="text-gray-700 mt-2">7756876311</p>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Send Us a Message</h2>
          {formSubmitted ? (
            <div className="text-center text-green-600 font-bold">Thank you! Your message has been sent.</div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Full Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                  placeholder="Your Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                  placeholder="Your Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  rows="5"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Google Maps Section */}
      <div className="py-12">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Our Location</h2>
        <div className="max-w-5xl mx-auto rounded-lg shadow-lg overflow-hidden">
          <iframe
            title="Google Maps Location"
            src="https://www.google.com/maps?q=18.557295875914463,73.9114692913877&z=15&output=embed"
            width="100%"
            height="450"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-black text-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-green-500">VEHICLE RENTAL</h3>
            <p className="text-gray-400 mt-4">
              Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold">Information</h4>
            <ul className="mt-4 space-y-2">
              <li>About</li>
              <li>Services</li>
              <li>Terms and Conditions</li>
              <li>Best Price Guarantee</li>
              <li>Privacy & Cookies Policy</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold">Customer Support</h4>
            <ul className="mt-4 space-y-2">
              <li>FAQ</li>
              <li>Payment Option</li>
              <li>Booking Tips</li>
              <li>How it Works</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold">Have a Questions?</h4>
            <ul className="mt-4 space-y-2">
              <li>📍baif road, Near Wageshwar Mandir, Wagholi</li>
              <li>📞 7756876310</li>
              <li>📧 contact@vehiclerental.com</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactUs;
