import React, { useState } from 'react';
import Navigation from '../Navigation';
import ProfileSidebar from './ProfileSidebar';
import PersonalInfoForm from './forms/PersonalInfoForm';
import EducationForm from './forms/EducationForm';
import ExperienceForm from './forms/ExperienceForm';
import CVUpload from './forms/CVUpload';

type ProfileSection = 'personal' | 'education' | 'experience' | 'cv';

const ProfilePage: React.FC = () => {
  const [activeSection, setActiveSection] = useState<ProfileSection>('personal');

  const handleLogout = () => {
    // Implement logout logic
  };

  const renderActiveForm = () => {
    switch (activeSection) {
      case 'personal':
        return <PersonalInfoForm />;
      case 'education':
        return <EducationForm />;
      case 'experience':
        return <ExperienceForm />;
      case 'cv':
        return <CVUpload />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <Navigation onLogout={handleLogout} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          <ProfileSidebar activeSection={activeSection} onSectionChange={setActiveSection} />
          <div className="flex-1 bg-gray-800 rounded-lg p-6">
            {renderActiveForm()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;