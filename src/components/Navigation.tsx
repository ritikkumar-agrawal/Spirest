import React, { useState, useRef, useEffect } from 'react';
import { LogOut, User, ChevronDown, Bell } from 'lucide-react';
import NotificationsPanel from './NotificationsPanel';

interface NavigationProps {
  onLogout: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ onLogout }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isMobileNotificationsOpen, setIsMobileNotificationsOpen] = useState(false);
  
  const notificationsRef = useRef<HTMLDivElement>(null);
  const mobileNotificationsRef = useRef<HTMLDivElement>(null);

  // Handles the click event on the document to close the notifications panel when clicked outside of it.
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (notificationsRef.current && !notificationsRef.current.contains(event.target as Node)) {
        setIsNotificationsOpen(false);
      }
      if (mobileNotificationsRef.current && !mobileNotificationsRef.current.contains(event.target as Node)) {
        setIsMobileNotificationsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="bg-gray-900/50 backdrop-blur-sm border-b border-gray-800 relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            {/* logo  */}
            <User className="w-8 h-8 text-red-500" />
            <span className="ml-2 text-xl font-semibold text-white">Dashboard</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              Home
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              Opportunities
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              Resources & Blogs
            </a>
            {/* Notifications Button Codes */}
            <div className="relative" ref={notificationsRef}>
              <button
                onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
                className="flex items-center text-gray-300 hover:text-white transition-colors focus:outline-none"
              >
                <span className="relative">
                  Updates
                  {/* code for the red dot */}
                  {/* <span className="absolute -top-1 -right-2 w-2 h-2 bg-red-500 rounded-full"></span> */}
                </span>
              </button>
              {isNotificationsOpen && <NotificationsPanel />}
            </div>
            
            {/* Dropdown Menu (More options dropdown) */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center text-gray-300 hover:text-white transition-colors focus:outline-none"
              >
                More
                {/*  code for the dropdown arrow */}
                <ChevronDown className={`ml-1 w-4 h-4 transform transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5">
                  <div className="py-1" role="menu">
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
                      role="menuitem"
                    >
                      Resume Builder
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
                      role="menuitem"
                    >
                      Ex Placement Stats
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
                      role="menuitem"
                    >
                      Some more fetures here
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button ( for phone-view ) */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          <button
            onClick={onLogout}
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Sign Out
          </button>
        </div>

        {/* The Menu Button for Phone-view */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute w-full left-0 bg-gray-900/95 backdrop-blur-sm">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#" className="block px-3 py-2 text-gray-300 hover:text-white">Home</a>
              <a href="#" className="block px-3 py-2 text-gray-300 hover:text-white">Opportunities</a>
              <a href="#" className="block px-3 py-2 text-gray-300 hover:text-white">Resources & Blogs</a>
              
              {/* Code for Mobile Notifications */}
              <div ref={mobileNotificationsRef} className="relative">
                <button
                  onClick={() => setIsMobileNotificationsOpen(!isMobileNotificationsOpen)}
                  className="flex items-center w-full px-3 py-2 text-gray-300 hover:text-white"
                >
                  <span className="relative">
                    Updates
                    <span className="absolute -top-1 -right-2 w-2 h-2 bg-red-500 rounded-full"></span>
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
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;