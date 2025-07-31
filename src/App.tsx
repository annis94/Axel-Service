import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { NotificationProvider } from './contexts/NotificationContext';
import ProtectedRoute from './components/common/ProtectedRoute';
import { optimizeForMobile } from './utils/mobileOptimization';

// Layouts
import MainLayout from './layouts/MainLayout';
import AdminLayout from './layouts/AdminLayout';

// Pages
import Home from './pages/Home';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import About from './pages/About';
import Services from './pages/Services';
import Login from './pages/auth/Login';
import AdminDashboard from './pages/AdminDashboard';
import NotFound from './pages/NotFound';

import './styles/App.css';

function App() {
  // Initialiser l'optimisation mobile au chargement de l'app
  useEffect(() => {
    optimizeForMobile();
  }, []);

  return (
    <Router>
      <AuthProvider>
        <NotificationProvider>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<MainLayout><Home /></MainLayout>} />
            <Route path="/contact" element={<MainLayout><Contact /></MainLayout>} />
            <Route path="/faq" element={<MainLayout><FAQ /></MainLayout>} />
            <Route path="/about" element={<MainLayout><About /></MainLayout>} />
            <Route path="/services" element={<MainLayout><Services /></MainLayout>} />
            <Route path="/terms" element={<MainLayout><FAQ /></MainLayout>} />
            <Route path="/privacy" element={<MainLayout><FAQ /></MainLayout>} />
            <Route path="/gdpr" element={<MainLayout><FAQ /></MainLayout>} />
            <Route path="/cookies" element={<MainLayout><FAQ /></MainLayout>} />
            <Route path="/providers" element={<MainLayout><About /></MainLayout>} />
            <Route path="/careers" element={<MainLayout><About /></MainLayout>} />
            <Route path="/blog" element={<MainLayout><About /></MainLayout>} />
            
            {/* Auth Routes */}
            <Route path="/login-admin" element={<Login />} />

            {/* Admin Routes */}
            <Route
              path="/admin"
              element={
                <ProtectedRoute role="admin">
                  <AdminLayout>
                    <AdminDashboard />
                  </AdminLayout>
                </ProtectedRoute>
              }
            />

            {/* 404 Route */}
            <Route path="*" element={<MainLayout><NotFound /></MainLayout>} />
          </Routes>
        </NotificationProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;