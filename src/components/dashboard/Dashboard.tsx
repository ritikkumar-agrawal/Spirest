import React from 'react';
import Navigation from '../Navigation';

interface DashboardProps {
  onLogout: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onLogout }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <Navigation onLogout={onLogout} />
      
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-white mb-4">Welcome to Your Dashboard</h2>
            <p className="text-gray-400">
              You're now signed in! This is a protected area of the application.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;