import React, { useState } from 'react';
import { Upload, File, X } from 'lucide-react';
import SaveButton from '../shared/SaveButton';

const CVUpload: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleRemoveFile = () => {
    setFile(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle CV upload
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h2 className="text-2xl font-semibold text-white mb-6">CV Upload</h2>

      <div className="space-y-4">
        <div className="border-2 border-dashed border-gray-600 rounded-lg p-8">
          <div className="flex flex-col items-center justify-center space-y-4">
            {!file ? (
              <>
                <Upload className="w-12 h-12 text-gray-400" />
                <div className="text-center">
                  <p className="text-gray-300">Drag and drop your CV here, or</p>
                  <label className="mt-2 inline-block px-4 py-2 bg-blue-500 text-white rounded-lg cursor-pointer hover:bg-blue-600 transition-colors">
                    Browse Files
                    <input
                      type="file"
                      className="hidden"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                    />
                  </label>
                </div>
                <p className="text-sm text-gray-400">Supported formats: PDF, DOC, DOCX</p>
              </>
            ) : (
              <div className="flex items-center space-x-4">
                <File className="w-8 h-8 text-blue-400" />
                <span className="text-gray-300">{file.name}</span>
                <button
                  type="button"
                  onClick={handleRemoveFile}
                  className="p-1 hover:bg-gray-700 rounded-full transition-colors"
                >
                  <X className="w-5 h-5 text-gray-400" />
                </button>
              </div>
            )}
          </div>
        </div>

        <SaveButton />
      </div>
    </form>
  );
};

export default CVUpload;