/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const isValid = JSON.parse(localStorage.getItem("valid") || "false"); // Ensures boolean type
  return isValid ? children : <Navigate to="/" replace />;
};

// ✅ Add PropTypes Validation
PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired, // `children` must be a valid React node
};

export default PrivateRoute;
