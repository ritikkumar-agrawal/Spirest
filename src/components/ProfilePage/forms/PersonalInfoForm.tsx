import React from 'react';
import FormRow from '../shared/FormRow';
import SaveButton from '../shared/SaveButton';

const PersonalInfoForm: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h2 className="text-2xl font-semibold text-white mb-6">Personal Information</h2>
      
      <div className="grid grid-cols-2 gap-6">
        <FormRow label="Full Name" name="fullName" type="text" />
        <FormRow label="Date of Birth" name="dob" type="date" />
        <FormRow label="Father's Name" name="fatherName" type="text" />
        <FormRow label="Mother's Name" name="motherName" type="text" />
        <FormRow label="Gender" name="gender" type="select" options={['Male', 'Female', 'Other']} />
        <FormRow label="Blood Group" name="bloodGroup" type="select" 
          options={['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-']} />
        <FormRow label="Contact Number" name="phone" type="tel" />
        <FormRow label="Alternate Number" name="altPhone" type="tel" />
        <FormRow label="Personal Email" name="personalEmail" type="email" />
        <FormRow label="Institute Email" name="instituteEmail" type="email" />
        <FormRow label="Current Address" name="currentAddress" type="textarea" className="col-span-2" />
        <FormRow label="Permanent Address" name="permanentAddress" type="textarea" className="col-span-2" />
        <FormRow label="LinkedIn Profile" name="linkedin" type="url" />
        <FormRow label="GitHub Profile" name="github" type="url" />
        <FormRow label="Portfolio Website" name="portfolio" type="url" />
        <FormRow label="Category" name="category" type="select" 
          options={['General', 'OBC', 'SC', 'ST', 'EWS']} />
      </div>

      <SaveButton />
    </form>
  );
};

export default PersonalInfoForm;