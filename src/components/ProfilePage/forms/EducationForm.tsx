import React, { useState } from 'react';
import FormRow from '../shared/FormRow';
import SaveButton from '../shared/SaveButton';

const EducationForm: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'current' | 'intermediate' | 'matriculation'>('current');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  const renderCurrentGraduation = () => (
    <div className="grid grid-cols-2 gap-6">
      <FormRow label="Institute" name="currentInstitute" type="text" />
      <FormRow label="Branch" name="branch" type="text" />
      <FormRow label="Current CPI" name="cpi" type="number" step="0.01" />
      <FormRow label="Current Semester" name="semester" type="number" />
      <FormRow label="Backlogs" name="backlogs" type="number" />
      <FormRow label="Year of Admission" name="admissionYear" type="number" />
      <FormRow label="Expected Year of Graduation" name="gradYear" type="number" />
      <FormRow label="Roll Number" name="rollNumber" type="text" />
    </div>
  );

  const renderIntermediate = () => (
    <div className="grid grid-cols-2 gap-6">
      <FormRow label="School Name" name="intermediateSchool" type="text" />
      <FormRow label="Board" name="intermediateBoard" type="text" />
      <FormRow label="Stream" name="intermediateStream" type="text" />
      <FormRow label="Percentage/CGPA" name="intermediateScore" type="number" step="0.01" />
      <FormRow label="Year of Completion" name="intermediateYear" type="number" />
      <FormRow label="School Address" name="intermediateSchoolAddress" type="textarea" className="col-span-2" />
    </div>
  );

  const renderMatriculation = () => (
    <div className="grid grid-cols-2 gap-6">
      <FormRow label="School Name" name="matriculationSchool" type="text" />
      <FormRow label="Board" name="matriculationBoard" type="text" />
      <FormRow label="Percentage/CGPA" name="matriculationScore" type="number" step="0.01" />
      <FormRow label="Year of Completion" name="matriculationYear" type="number" />
      <FormRow label="School Address" name="matriculationSchoolAddress" type="textarea" className="col-span-2" />
    </div>
  );

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h2 className="text-2xl font-semibold text-white mb-6">Education Details</h2>
      
      <div className="flex space-x-4 mb-6">
        {(['current', 'intermediate', 'matriculation'] as const).map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-lg transition-colors ${
              activeTab === tab
                ? 'bg-blue-500 text-white'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {activeTab === 'current' && renderCurrentGraduation()}
      {activeTab === 'intermediate' && renderIntermediate()}
      {activeTab === 'matriculation' && renderMatriculation()}

      <SaveButton />
    </form>
  );
};

export default EducationForm;