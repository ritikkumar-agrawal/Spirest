import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import FormRow from '../shared/FormRow';
import SaveButton from '../shared/SaveButton';

interface Experience {
  id: number;
  type: string;
  company: string;
  role: string;
  duration: string;
  description: string;
}

const ExperienceForm: React.FC = () => {
  const [experiences, setExperiences] = useState<Experience[]>([
    { id: 1, type: '', company: '', role: '', duration: '', description: '' }
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  const addExperience = () => {
    setExperiences([
      ...experiences,
      { id: Date.now(), type: '', company: '', role: '', duration: '', description: '' }
    ]);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-white">Experience Details</h2>
        <button
          type="button"
          onClick={addExperience}
          className="flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          <Plus className="w-4 h-4" />
          <span>Add Experience</span>
        </button>
      </div>

      {experiences.map((exp, index) => (
        <div key={exp.id} className="space-y-6">
          {index > 0 && <hr className="border-gray-700" />}
          
          <div className="grid grid-cols-2 gap-6">
            <FormRow
              label="Experience Type"
              name={`type-${exp.id}`}
              type="select"
              options={['Internship', 'Full-time', 'Part-time', 'Project']}
            />
            <FormRow label="Company/Organization" name={`company-${exp.id}`} type="text" />
            <FormRow label="Role/Position" name={`role-${exp.id}`} type="text" />
            <FormRow label="Duration" name={`duration-${exp.id}`} type="text" placeholder="e.g., 3 months, Jan 2023 - Present" />
            <FormRow
              label="Description"
              name={`description-${exp.id}`}
              type="textarea"
              className="col-span-2"
              placeholder="Describe your responsibilities and achievements..."
            />
          </div>
        </div>
      ))}

      <SaveButton />
    </form>
  );
};

export default ExperienceForm;