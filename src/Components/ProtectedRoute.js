import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

function ProtectedRoute() {
  const isLoggedIn = window.localStorage.getItem('loggedin') === 'true';

  if (isLoggedIn) {
    return <Outlet />;
  } else {
    return <Navigate to="/login" />;
  }
}

export default ProtectedRoute;
