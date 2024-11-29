import React from 'react';
import { User, GraduationCap, Briefcase, FileText } from 'lucide-react';

type ProfileSection = 'personal' | 'education' | 'experience' | 'cv';

interface ProfileSidebarProps {
  activeSection: ProfileSection;
  onSectionChange: (section: ProfileSection) => void;
}

const ProfileSidebar: React.FC<ProfileSidebarProps> = ({ activeSection, onSectionChange }) => {
  const sections = [
    { id: 'personal', label: 'Personal Information', icon: User },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'cv', label: 'CV Upload', icon: FileText },
  ] as const;

  return (
    <div className="w-64 space-y-2">
      {sections.map(({ id, label, icon: Icon }) => (
        <button
          key={id}
          onClick={() => onSectionChange(id)}
          className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
            activeSection === id
              ? 'bg-blue-500/10 text-blue-400'
              : 'text-gray-400 hover:bg-gray-800 hover:text-white'
          }`}
        >
          <Icon className="w-5 h-5" />
          <span>{label}</span>
        </button>
      ))}
    </div>
  );
};

export default ProfileSidebar;