
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, roleRequired }) => {
  const token = localStorage.getItem('token');
  const role = localStorage.getItem('role');

  if (!token) return <Navigate to="/login" />;

  if (role !== roleRequired) {
    return <Navigate to="/unauthorized" />; 
  }

  return children;
};

export default ProtectedRoute;
