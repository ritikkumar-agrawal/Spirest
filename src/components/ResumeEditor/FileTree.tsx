import React from 'react';
import { File, FolderOpen } from 'lucide-react';

interface FileTreeProps {
  activeFile: string;
  onFileSelect: (file: string) => void;
  files: Record<string, string>;
}

const FileTree: React.FC<FileTreeProps> = ({ activeFile, onFileSelect, files }) => {
  return (
    <div className="p-4">
      <div className="flex items-center space-x-2 text-gray-400 mb-4">
        <FolderOpen className="w-4 h-4" />
        <span>Resume Project</span>
      </div>
      
      <div className="space-y-2">
        {Object.keys(files).map((fileName) => (
          <button
            key={fileName}
            onClick={() => onFileSelect(fileName)}
            className={`w-full flex items-center space-x-2 px-2 py-1 rounded-md transition-colors ${
              activeFile === fileName
                ? 'bg-blue-500/10 text-blue-400'
                : 'text-gray-400 hover:bg-gray-800'
            }`}
          >
            <File className="w-4 h-4" />
            <span className="text-sm">{fileName}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default FileTree;