// src/components/Signup.js
import React, { useState } from 'react';
import './Signup.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [selectedEvent, setSelectedEvent] = useState('');
  const [gender, setGender] = useState('');
  const [password, setPassword] = useState(''); // New password state
  const navigate = useNavigate();

  // Simple validation for password length
  const validatePassword = (password) => {
    return password.length >= 6;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validatePassword(password)) {
      alert('Password should be at least 6 characters long.');
      return;
    }

    const formData = {
      name,
      email,
      dateOfBirth,
      selectedEvent,
      gender,
      password // Include password in the form data
    };

    axios
      .post('http://localhost:3002/signup', formData)
      .then((response) => {
        alert('Registration successful!');
        console.log(response.data);

        // Optionally, clear form fields
        setName('');
        setEmail('');
        setDateOfBirth('');
        setSelectedEvent('');
        setGender('');
        setPassword('');

        // Redirect to login page after successful registration
        navigate('/login');
      })
      .catch((error) => {
        alert('Something went wrong. Please try again!');
        console.log(error);
      });
  };

  return (
    <div className="signup-page">
      <div className="signup-form">
        <h1>New User Registration</h1>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="date"
            placeholder="Date of Birth"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
            required
          />
          <select
            value={selectedEvent}
            onChange={(e) => setSelectedEvent(e.target.value)}
            required
          >
            <option value="">Select Your Skill</option>
            <option value="ui-design">UI Design</option>
            <option value="database">Database</option>
            <option value="frontend">Frontend</option>
            <option value="backend">Backend</option>
          </select>
          <input
            type="password"
            placeholder="Password" // New password input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div className="gender-container">
            <label htmlFor="male">Male</label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={gender === 'male'}
              onChange={() => setGender('male')}
              required
            />

            <label htmlFor="female">Female</label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={gender === 'female'}
              onChange={() => setGender('female')}
              required
            />
          </div>

          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
