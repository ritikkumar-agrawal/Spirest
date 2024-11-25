import React, { useState } from 'react';
import { Mail, Lock } from 'lucide-react';
import { isAllowedDomain } from '../utils/validation';

interface AuthFormProps {
  type: 'login' | 'signup';
  onSubmit: (email: string, password: string) => void;
}

const AuthForm: React.FC<AuthFormProps> = ({ type, onSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!isAllowedDomain(email)) {
      setError('Access restricted. Please use an authorized email domain.');
      return;
    }

    try {
      await onSubmit(email, password);
    } catch (error) {
      console.error('Form submission failed:', error);
      setError('Authentication failed. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Mail className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setError(null);
          }}
          className="block w-full pl-10 pr-3 py-3 border border-gray-700 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
          placeholder="Work email / CDC gmail"
          required
        />
      </div>

      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Lock className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setError(null);
          }}
          className="block w-full pl-10 pr-3 py-3 border border-gray-700 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
          placeholder="Password"
          required
        />
      </div>

          {/* if error comes, thn show error message */}
      {error && (
        <div className="bg-red-500/10 border border-red-500/50 rounded-lg p-3">
          <p className="text-sm text-red-500">{error}</p>
        </div>
      )}

      <button
        type="submit"
        className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-900"
      >
        {type === 'login' ? 'Sign In' : 'Create Account'}
      </button>

      {type === 'login' && (
        <div className="text-center space-y-2">
          <a href="#" className="block text-sm text-gray-400 hover:text-white transition-colors">
            Forgot password?
          </a>
          <div className="text-sm text-gray-400">
            Don't have an account?{' '}
            <a 
              href="mailto:xyz@gmail.com?subject=New Account Request&body=I would like to request a new account."
              className="text-red-500 hover:text-red-400 transition-colors"
            >
              Contact Administrator
            </a>
          </div>
        </div>
      )}
    </form>
  );
};

export default AuthForm;