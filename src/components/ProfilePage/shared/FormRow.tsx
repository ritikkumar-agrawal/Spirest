import React from 'react';

interface FormRowProps {
  label: string;
  name: string;
  type: 'text' | 'email' | 'tel' | 'number' | 'date' | 'url' | 'textarea' | 'select';
  options?: string[];
  className?: string;
  step?: string;
  placeholder?: string;
}

const FormRow: React.FC<FormRowProps> = ({
  label,
  name,
  type,
  options,
  className = '',
  step,
  placeholder
}) => {
  const baseInputClasses = "w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent";

  const renderInput = () => {
    if (type === 'textarea') {
      return (
        <textarea
          name={name}
          className={`${baseInputClasses} h-24 resize-none`}
          placeholder={placeholder}
        />
      );
    }

    if (type === 'select') {
      return (
        <select name={name} className={baseInputClasses}>
          <option value="">Select...</option>
          {options?.map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      );
    }

    return (
      <input
        type={type}
        name={name}
        step={step}
        className={baseInputClasses}
        placeholder={placeholder}
      />
    );
  };

  return (
    <div className={className}>
      <label className="block text-sm font-medium text-gray-300 mb-2">
        {label}
      </label>
      {renderInput()}
    </div>
  );
};

export default FormRow;