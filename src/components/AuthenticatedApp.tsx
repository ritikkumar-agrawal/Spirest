import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import AuthForm from './AuthForm';
import Dashboard from './Dashboard';

const AuthenticatedApp: React.FC = () => {
  const { isAuthenticated, login, logout } = useAuth();

  const handleAuth = async (email: string, password: string) => {
    try {
      await login(email, password);
    } catch (error) {
      console.error('Authentication failed:', error);
      // Handle error (show message to user, etc.)
    }
  };

  if (isAuthenticated) {
    return <Dashboard onLogout={logout} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mt-4">Welcome Back</h1>
          <p className="text-gray-400 mt-2">Sign in to access your account</p>
        </div>

        <AuthForm 
          type="login"
          onSubmit={handleAuth}
        />
      </div>
    </div>
  );
};

export default AuthenticatedApp;