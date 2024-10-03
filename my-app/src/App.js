// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import Instruction from "./components/Instruction";
import Event from "./components/Event";
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import Contact from './components/Contact';
import Candidates from './components/Candidates';
import UserLogin from './components/Userlogin';
import ProtectedRoute from './components/ProtectedRoute'; // Correct Import

console.log('ProtectedRoute:', ProtectedRoute); // Debugging

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Event" element={<Event />} />
          <Route path="/login" element={<UserLogin />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Instruction" element={<Instruction />} />
          
          {/* Protecting the Candidates route */}
          <Route
            path="/Candidates" // Ensure consistent path name
            element={
              <ProtectedRoute>
                <Candidates />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
