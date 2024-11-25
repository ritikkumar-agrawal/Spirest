import React, { useState } from 'react';
import { Heart, MessageCircle, Share2, Bookmark, Link as LinkIcon } from 'lucide-react';
import Navigation from './Navigation';

type Tab = 'posts' | 'resources' | 'FAQs';
type ResourceTab = 'software' | 'analytics' | 'embedded';

const ResourcesBlogsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('posts');
  const [activeResourceTab, setActiveResourceTab] = useState<ResourceTab>('software');

  const handleLogout = () => {
    // Implement logout logic
  };

  const renderPosts = () => (
    <div className="space-y-6">
      {/* Sample Post */}
      <div className="bg-gray-800 rounded-lg p-6">
        <div className="flex items-center mb-4">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="User"
            className="w-10 h-10 rounded-full"
          />
          <div className="ml-3">
            <p className="text-white font-semibold">John Doe</p>
            <p className="text-gray-400 text-sm">2 hours ago</p>
          </div>
        </div>
        <p className="text-gray-300 mb-4">
          Just completed an amazing interview prep session! Here are my key takeaways on system design interviews...
        </p>
        <div className="flex items-center space-x-6 text-gray-400">
          <button className="flex items-center space-x-2 hover:text-red-500 transition-colors">
            <Heart className="w-5 h-5" />
            <span>24</span>
          </button>
          <button className="flex items-center space-x-2 hover:text-blue-500 transition-colors">
            <MessageCircle className="w-5 h-5" />
            <span>12</span>
          </button>
          <button className="flex items-center space-x-2 hover:text-green-500 transition-colors">
            <Share2 className="w-5 h-5" />
          </button>
          <button className="flex items-center space-x-2 hover:text-yellow-500 transition-colors">
            <Bookmark className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );

  const renderResources = () => (
    <div>
      <div className="mb-6 flex space-x-4 border-b border-gray-700">
        {['Software', 'Analytics', 'Embedded & Electrical', 'Mechanical', 'Aptitude'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveResourceTab(tab as ResourceTab)}
            className={`px-4 py-2 font-medium transition-colors ${
              activeResourceTab === tab
                ? 'text-blue-500 border-b-2 border-blue-500'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Sample Resource Card */}
        <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors">
          <h3 className="text-xl font-semibold text-white mb-2">DBMS Lecture Series</h3>
          <p className="text-gray-400 mb-4">Complete course covering database fundamentals to advanced concepts.</p>
          <a
            href="#"
            className="inline-flex items-center text-blue-500 hover:text-blue-400 transition-colors"
          >
            <LinkIcon className="w-4 h-4 mr-2" />
            Access Resource
          </a>
        </div>
      </div>
    </div>
  );

  const renderFAQs = () => (
    <div className="space-y-4">
      <div className="bg-gray-800 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-white mb-2">How do I prepare for technical interviews?</h3>
        <p className="text-gray-400">
          Start with fundamental DSA concepts, practice coding problems regularly, and focus on system design principles...
        </p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <Navigation onLogout={handleLogout} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex">
          {/* Left Sidebar */}
          <div className="w-64 flex-shrink-0">
            <div className="space-y-2">
              {['posts', 'resources', 'FAQs'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab as Tab)}
                  className={`w-full text-left px-4 py-2 rounded-lg font-medium transition-colors ${
                    activeTab === tab
                      ? 'bg-blue-500/10 text-blue-500'
                      : 'text-gray-400 hover:text-white hover:bg-gray-800'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 ml-8">
            {activeTab === 'posts' && renderPosts()}
            {activeTab === 'resources' && renderResources()}
            {activeTab === 'FAQs' && renderFAQs()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourcesBlogsPage;