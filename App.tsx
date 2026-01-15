
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthState, User, UserRole } from './types';
import Login from './views/Login';
import DashboardLayout from './components/DashboardLayout';
import SuperAdminDashboard from './views/SuperAdmin/Dashboard';
import FranchiseDashboard from './views/Franchise/Dashboard';
import EmployerDashboard from './views/Employer/Dashboard';
import JobSeekerDashboard from './views/JobSeeker/Dashboard';
import ServiceCharges from './views/SuperAdmin/ServiceCharges';
import Earnings from './views/Franchise/Earnings';
import SelectionProgress from './views/Shared/SelectionProgress';

const App: React.FC = () => {
  const [auth, setAuth] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
  });

  const handleLogin = (user: User) => {
    setAuth({ user, isAuthenticated: true });
    localStorage.setItem('swastik_user', JSON.stringify(user));
  };

  const handleLogout = () => {
    setAuth({ user: null, isAuthenticated: false });
    localStorage.removeItem('swastik_user');
  };

  useEffect(() => {
    const savedUser = localStorage.getItem('swastik_user');
    if (savedUser) {
      setAuth({ user: JSON.parse(savedUser), isAuthenticated: true });
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route 
          path="/login" 
          element={!auth.isAuthenticated ? <Login onLogin={handleLogin} /> : <Navigate to="/dashboard" />} 
        />
        
        {auth.isAuthenticated && (
          <Route element={<DashboardLayout user={auth.user!} onLogout={handleLogout} />}>
            <Route path="/dashboard" element={
              auth.user?.role === UserRole.SUPER_ADMIN ? <SuperAdminDashboard /> :
              auth.user?.role === UserRole.FRANCHISE ? <FranchiseDashboard franchise={auth.user} /> :
              auth.user?.role === UserRole.EMPLOYER ? <EmployerDashboard employer={auth.user} /> :
              <JobSeekerDashboard seeker={auth.user!} />
            } />
            
            <Route path="/service-charges" element={auth.user?.role === UserRole.SUPER_ADMIN ? <ServiceCharges /> : <Navigate to="/dashboard" />} />
            <Route path="/earnings" element={auth.user?.role === UserRole.FRANCHISE ? <Earnings franchiseId={auth.user.id} /> : <Navigate to="/dashboard" />} />
            <Route path="/progress" element={<SelectionProgress user={auth.user!} />} />
          </Route>
        )}

        <Route path="*" element={<Navigate to={auth.isAuthenticated ? "/dashboard" : "/login"} />} />
      </Routes>
    </Router>
  );
};

export default App;
