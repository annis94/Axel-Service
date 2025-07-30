import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { UserRole } from '../../types/user';

interface ProtectedRouteProps {
  children: React.ReactNode;
  role?: UserRole;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, role }) => {
  const { isAuthenticated, userRole, loading } = useAuth();
  
  if (loading) {
    return (
      <div className="loading-screen">
        <div className="spinner"></div>
        <p>Loading...</p>
      </div>
    );
  }
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  if (role && userRole !== role) {
    // Redirect to the appropriate dashboard based on user role
    if (userRole === 'client') {
      return <Navigate to="/client\" replace />;
    } else if (userRole === 'provider') {
      return <Navigate to="/provider" replace />;
    } else if (userRole === 'admin') {
      return <Navigate to="/admin\" replace />;
    }
  }
  
  return <>{children}</>;
};

export default ProtectedRoute;