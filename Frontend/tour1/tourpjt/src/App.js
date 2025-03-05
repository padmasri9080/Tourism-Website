
      
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import Destinations from './Component/Destinations';
import Favorites from './Component/Favorites';
import Contact from './Component/Contact';
import Booking from './Component/Booking';
import Login from './Component/Login';
import Status from './Component/Status';
import Signup from './Component/Signup';
import Details from './Component/Details';
import './App.css'; // Global CSS
import { AuthProvider } from './Component/AuthContext';
import Admin from "./Component/Admin";
import AdminDashboard from "./Component/AdminDashboard";
import About from "./Component/About"

const App = () => {
  const [favorites, setFavorites] = useState([]);

  return (
    <AuthProvider>
      <Router>
       
        <Navbar />
        
       
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/destinations" element={<Destinations setFavorites={setFavorites} />} />
             <Route path="/details/:id" element={<Details />} />
            <Route path="/favorites" element={<Favorites favorites={favorites} />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/admindashboard" element={<AdminDashboard />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path='/status' element={<Status/>}/>
            <Route path="/about" element={<About/>}/>
            
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
