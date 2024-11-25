import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import AuthenticatedApp from './components/AuthenticatedApp';
import ResourcesBlogsPage from './components/ResourcesBlogsPage';
import ResumeEditor from './components/ResumeEditor';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<AuthenticatedApp />} />
          <Route path="/posts-blogs" element={<ResourcesBlogsPage />} />
          <Route path="/resume" element={<ResumeEditor />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;