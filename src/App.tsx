import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import AuthenticatedApp from './components/auth/AuthenticatedApp';
import ResourcesBlogsPage from './components/resourceBlogs/ResourcesBlogsPage';
import ResumeEditor from './components/ResumeEditor';
// import Profile from './components/profile/profile';
import ProfilePage from './components/ProfilePage';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<AuthenticatedApp />} />
          <Route path="/posts-blogs" element={<ResourcesBlogsPage />} />
          {/* <Route path="/profile" element={<Profile />} /> */}
          <Route path="/resume" element={<ResumeEditor />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;