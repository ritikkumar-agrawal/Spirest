import React, { useState, useRef, useEffect } from 'react';
import { LogOut, User, ChevronDown, Bell, Settings, UserCircle } from 'lucide-react';
import NotificationsPanel from './NotificationsPanel';
import { Link } from 'react-router-dom';

interface NavigationProps {
  onLogout: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ onLogout }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isMobileNotificationsOpen, setIsMobileNotificationsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  
  const notificationsRef = useRef<HTMLDivElement>(null);
  const mobileNotificationsRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);
  // const moreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (notificationsRef.current && !notificationsRef.current.contains(event.target as Node)) {
        setIsNotificationsOpen(false);
      }
      if (mobileNotificationsRef.current && !mobileNotificationsRef.current.contains(event.target as Node)) {
        setIsMobileNotificationsOpen(false);
      }
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setIsProfileOpen(false);
      }
      // if (moreRef.current && !moreRef.current.contains(event.target as Node)) {
      //   setIsDropdownOpen(false);
      // }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="bg-gray-900/50 backdrop-blur-sm border-b border-gray-800 relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
          {/* Logo - Left */}
          <div className="flex-shrink-0">
            <User className="w-8 h-8 text-red-500" />
          </div>

          {/* Navigation Links - Center */}
          <div className="hidden md:flex flex-1 justify-center items-center space-x-8">
            <Link
              to="/"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Home
            </Link>
            <Link
              to="/jobs"
              // target='_blank'
              className="text-gray-300 hover:text-white transition-colors"
            >
              Opportunities
            </Link>
            <Link 
              to="/posts-blogs" 
              // target="_blank"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Resources & Blogs
            </Link>
            <div className="relative" ref={notificationsRef}>
              <button
                onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
                className="flex items-center text-gray-300 hover:text-white transition-colors focus:outline-none"
              >
                <span className="relative">
                  Updates
                </span>
              </button>
              {isNotificationsOpen && <NotificationsPanel />}
            </div>
            
            {/* More Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                // onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center text-gray-300 hover:text-white transition-colors focus:outline-none"
              >
                More
                <ChevronDown className={`ml-1 w-4 h-4 transform transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5">
                  <div className="py-1" role="menu">
                    <Link
                      to={"/resume"}
                      className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
                      role="menuitem"
                    >
                      Resume
                    </Link>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
                      role="menuitem"
                    >
                      Build
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
                      role="menuitem"
                    >
                      Interviews
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Profile - Right */}
          <div className="hidden md:flex items-center justify-end flex-shrink-0">
            <div className="relative" ref={profileRef}>
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center text-gray-300 hover:text-white transition-colors focus:outline-none"
              >
                <UserCircle className="w-8 h-8" />
              </button>
              
              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5 py-1">
                  <a
                    href="#"
                    className="flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    <User className="w-4 h-4 mr-3" />
                    Profile
                  </a>
                  <a
                    href="#"
                    className="flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    <Settings className="w-4 h-4 mr-3" />
                    Change Password
                  </a>
                  <button
                    onClick={onLogout}
                    className="w-full flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    <LogOut className="w-4 h-4 mr-3" />
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center ml-auto">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute w-full left-0 bg-gray-900/95 backdrop-blur-sm">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#" className="block px-3 py-2 text-gray-300 hover:text-white">Home</a>
              <a href="#" className="block px-3 py-2 text-gray-300 hover:text-white">Opportunities</a>
              <a href="#" className="block px-3 py-2 text-gray-300 hover:text-white">Resources & Blogs</a>
              
              {/* Mobile Notifications */}
              <div ref={mobileNotificationsRef} className="relative">
                <button
                  onClick={() => setIsMobileNotificationsOpen(!isMobileNotificationsOpen)}
                  className="flex items-center w-full px-3 py-2 text-gray-300 hover:text-white"
                >
                  <span className="relative">
                    Updates
                  </span>
                </button>
                {isMobileNotificationsOpen && (
                  <div className="relative mx-3 mt-2 rounded-lg shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <NotificationsPanel isMobile={true} />
                  </div>
                )}
              </div>

              <div className="border-t border-gray-700 mt-2 pt-2">
                <a href="#" className="block px-3 py-2 text-gray-300 hover:text-white">Resume</a>
                <a href="#" className="block px-3 py-2 text-gray-300 hover:text-white">Build</a>
                <a href="#" className="block px-3 py-2 text-gray-300 hover:text-white">Interviews</a>
              </div>

              {/* Mobile Profile Options */}
              <div className="border-t border-gray-700 mt-2 pt-2">
                <a href="#" className="flex items-center px-3 py-2 text-gray-300 hover:text-white">
                  <User className="w-4 h-4 mr-3" />
                  Profile
                </a>
                <a href="#" className="flex items-center px-3 py-2 text-gray-300 hover:text-white">
                  <Settings className="w-4 h-4 mr-3" />
                  Change Password
                </a>
                <button
                  onClick={onLogout}
                  className="w-full flex items-center px-3 py-2 text-gray-300 hover:text-white"
                >
                  <LogOut className="w-4 h-4 mr-3" />
                  Sign Out
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;