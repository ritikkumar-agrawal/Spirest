import React from 'react';
import { Save } from 'lucide-react';

const SaveButton: React.FC = () => {
  return (
    <button
      type="submit"
      className="flex items-center space-x-2 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
    >
      <Save className="w-4 h-4" />
      <span>Save Changes</span>
    </button>
  );
};

export default SaveButton;