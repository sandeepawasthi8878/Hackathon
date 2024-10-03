import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import { FaHome, FaSignInAlt, FaUserPlus, FaUserShield, FaEnvelope, FaSignOutAlt } from 'react-icons/fa'; 

function Navbar() {
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem('isAuthenticated'); // Check if user is logged in

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated'); // Remove authentication token
    navigate('/login'); // Redirect to login page
  };

  return (
    <nav className="navbar">
      <div className="left-section">
        <h3 className="title">InnoCode Hackathon 2024: Transforming Ideas into Reality</h3>
      </div>
      <ul className="right-links">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            <FaHome className="icon" /> Home
          </Link>
        </li>
        {!isAuthenticated ? (
          <>
            <li className="nav-item">
              <Link to="/Login" className="nav-link">
                <FaSignInAlt className="icon" /> Login
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Signup" className="nav-link">
                <FaUserPlus className="icon" /> Signup
              </Link>
            </li>
          </>
        ) : (
          <>
            <li className="nav-item">
              <Link to="/Candidates" className="nav-link">
                <FaUserShield className="icon" /> Candidates
              </Link>
            </li>
            <li className="nav-item">
              <Link onClick={handleLogout} className="nav-link">
                <FaSignOutAlt className="icon" /> Logout
              </Link>
            </li>
          </>
        )}
        <li className="nav-item">
          <Link to="/Contact" className="nav-link">
            <FaEnvelope className="icon" /> Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
