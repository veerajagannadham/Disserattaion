import React, { useState, useEffect } from 'react';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import authService from './services/authService';

type AuthMode = 'login' | 'register';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [authMode, setAuthMode] = useState<AuthMode>('login');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Check if user is already authenticated
    const checkAuth = () => {
      const authenticated = authService.isAuthenticated();
      setIsAuthenticated(authenticated);
      setLoading(false);
    };

    checkAuth();
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleRegister = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  const switchToRegister = () => {
    setAuthMode('register');
  };

  const switchToLogin = () => {
    setAuthMode('login');
  };

  if (loading) {
    return (
      <div className="App">
        <div className="loading-container">
          <div className="loading-spinner">Loading...</div>
        </div>
      </div>
    );
  }

  if (isAuthenticated) {
    return (
      <div className="App">
        <Dashboard onLogout={handleLogout} />
      </div>
    );
  }

  return (
    <div className="App">
      {authMode === 'login' ? (
        <Login onLogin={handleLogin} onSwitchToRegister={switchToRegister} />
      ) : (
        <Register onRegister={handleRegister} onSwitchToLogin={switchToLogin} />
      )}
    </div>
  );
}

export default App;
