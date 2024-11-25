import React from 'react';

interface PDFPreviewProps {
  pdfUrl: string | null;
  isCompiling: boolean;
}

const PDFPreview: React.FC<PDFPreviewProps> = ({ pdfUrl, isCompiling }) => {
  if (isCompiling) {
    return (
      <div className="h-full flex items-center justify-center text-gray-400">
        <div className="text-center">
          <p className="mb-2">Compiling...</p>
          <p className="text-sm">Please wait while your LaTeX document is being compiled</p>
        </div>
      </div>
    );
  }

  if (!pdfUrl) {
    return (
      <div className="h-full flex items-center justify-center text-gray-400">
        <div className="text-center">
          <p className="mb-2">PDF Preview</p>
          <p className="text-sm">Click "Compile" to generate PDF</p>
        </div>
      </div>
    );
  }

  return (
    <iframe
      src={pdfUrl}
      className="w-full h-full border-0"
      title="PDF Preview"
    />
  );
};

export default PDFPreview;