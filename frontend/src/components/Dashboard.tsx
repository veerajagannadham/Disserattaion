import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import authService, { User } from '../services/authService';

interface DashboardProps {
  onLogout: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onLogout }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    loadUserProfile();
  }, []);

  const loadUserProfile = async () => {
    try {
      setLoading(true);
      const response = await authService.getProfile();
      setUser(response.user);
    } catch (error: any) {
      setError('Failed to load user profile');
      console.error('Profile loading error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    authService.logout();
    onLogout();
  };

  if (loading) {
    return (
      <div className="dashboard-container">
        <div className="loading-spinner">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="dashboard-container">
        <div className="error-message">{error}</div>
        <button onClick={handleLogout} className="logout-button">
          Logout
        </button>
      </div>
    );
  }

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Dashboard</h1>
        <button onClick={handleLogout} className="logout-button">
          Logout
        </button>
      </div>

      <div className="dashboard-content">
        <div className="welcome-card">
          <h2>Welcome back, {user?.name}! 👋</h2>
          <p className="welcome-subtitle">You are successfully logged in.</p>
        </div>

        <div className="profile-card">
          <h3>Profile Information</h3>
          <div className="profile-info">
            <div className="info-row">
              <span className="info-label">Name:</span>
              <span className="info-value">{user?.name}</span>
            </div>
            <div className="info-row">
              <span className="info-label">Email:</span>
              <span className="info-value">{user?.email}</span>
            </div>
            <div className="info-row">
              <span className="info-label">User ID:</span>
              <span className="info-value">{user?.id}</span>
            </div>
            {user?.created_at && (
              <div className="info-row">
                <span className="info-label">Member since:</span>
                <span className="info-value">
                  {new Date(user.created_at).toLocaleDateString()}
                </span>
              </div>
            )}
          </div>
        </div>

        <div className="stats-card">
          <h3>Session Information</h3>
          <div className="stats-info">
            <div className="stat-item">
              <span className="stat-label">Status:</span>
              <span className="stat-value active">Active</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Last Activity:</span>
              <span className="stat-value">{new Date().toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
