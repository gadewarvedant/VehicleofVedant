import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import Navbar from './components/Navbar';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import AdminDashboard from './components/AdminDashboard'; // Import AdminDashboard
import FindCars from './components/FindCars';
import ContactUs from './components/ContactUs';
import AdminLogin from './components/AdminLogin';
import Booking from './components/Booking';


const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <Router>
      {/* Navbar is displayed on every page */}
      <Navbar
        isLoggedIn={isLoggedIn}dd 
        userName={userName}
        email={email}
        setIsLoggedIn={setIsLoggedIn}
        setUserName={setUserName}
        setEmail={setEmail}
      />

      {/* Routes for page navigation */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={
            <LoginPage
              setIsLoggedIn={setIsLoggedIn}
              setUserName={setUserName}
              setEmail={setEmail}
            />
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/findcars" element={<FindCars />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/booking" element={<Booking />} />
        
        {/* Admin Dashboard Route */}
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
      </Routes>

      {/* Footer is displayed on every page */}
      <Footer />
    </Router>
  );
};

export default App;
