// src/components/ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated');
  console.log('ProtectedRoute - isAuthenticated:', isAuthenticated); 

  return isAuthenticated === 'true' ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
