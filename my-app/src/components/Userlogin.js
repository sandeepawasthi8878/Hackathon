// src/components/UserLogin.js
import React, { useState } from 'react';
import './Userlogin.css'; 
import { useNavigate } from 'react-router-dom';

function UserLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    // Validate input
    if (!email || !password) {
      alert('Please enter valid credentials');
      return;
    }

    try {
      const response = await fetch('http://localhost:3002/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();
      if (data.message === 'success') {
        alert('Login successful');
        localStorage.setItem('isAuthenticated', 'true'); // Set authentication flag
        setEmail(''); // Correctly clear email input
        setPassword(''); // Correctly clear password input
        navigate('/Candidates'); // Redirect to candidate list
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('An error occurred during login');
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h1 className="login-title">User Login</h1>
        <div className="input-group">
          <label className="input-label" htmlFor="email">Email:</label>
          <input
            className="input-field"
            type="email"
            id="email"
            placeholder="Enter your email"  
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label className="input-label" htmlFor="password">Password:</label>
          <input
            className="input-field"
            type="password"
            id="password"
            placeholder="Enter your password"  
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="login-button" onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}

export default UserLogin;
