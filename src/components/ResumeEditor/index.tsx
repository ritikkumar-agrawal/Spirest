import React, { useState } from 'react';
import Editor from '@monaco-editor/react';
import SplitPane from 'split-pane-react';
import { Download, Play } from 'lucide-react';
import Navigation from '../Navigation';
import FileTree from './FileTree';
import PDFPreview from './PDFPreview';
import 'split-pane-react/esm/themes/default.css';

const ResumeEditor: React.FC = () => {
  const [sizes, setSizes] = useState<(number | string)[]>([250, 'auto']);
  const [previewSizes, setPreviewSizes] = useState<(number | string)[]>(['50%', '50%']);
  const [activeFile, setActiveFile] = useState<string>('main.tex');
  const [isCompiling, setIsCompiling] = useState(false);
  const [files, setFiles] = useState({
    'main.tex': '',
    'resume.cls': ''
  });
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);

  const handleLogout = () => {
    // Implement logout logic
  };

  const handleFileChange = (value: string | undefined) => {
    if (value !== undefined) {
      setFiles(prev => ({
        ...prev,
        [activeFile]: value
      }));
    }
  };

  const handleCompile = async () => {
    setIsCompiling(true);
    try {
      // Here we'll add the actual compilation logic
      // For now, we'll simulate compilation
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // TODO: Implement actual LaTeX compilation
      // The compiled PDF URL will be set here
      setPdfUrl('compiled.pdf');
    } catch (error) {
      console.error('Compilation failed:', error);
    } finally {
      setIsCompiling(false);
    }
  };

  const handleDownload = () => {
    if (pdfUrl) {
      const link = document.createElement('a');
      link.href = pdfUrl;
      link.download = 'resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className="h-screen flex flex-col bg-gray-900">
      <Navigation onLogout={handleLogout} />
      
      <div className="flex-1 overflow-hidden">
        <div className="h-12 bg-gray-800 border-b border-gray-700 flex items-center justify-between px-4">
          <button 
            onClick={handleCompile}
            disabled={isCompiling}
            className="flex items-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Play className="w-4 h-4 mr-2" />
            {isCompiling ? 'Compiling...' : 'Compile'}
          </button>
          <button 
            onClick={handleDownload}
            disabled={!pdfUrl}
            className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Download className="w-4 h-4 mr-2" />
            Download PDF
          </button>
        </div>

        <SplitPane
          split="vertical"
          sizes={sizes}
          onChange={setSizes}
          sashRender={() => (
            <div className="w-2 bg-gray-800 hover:bg-gray-700 transition-colors cursor-col-resize" />
          )}
        >
          <div className="h-full bg-gray-900 overflow-auto">
            <FileTree 
              activeFile={activeFile} 
              onFileSelect={setActiveFile}
              files={files}
            />
          </div>
          <div className="h-full">
            <SplitPane
              split="vertical"
              sizes={previewSizes}
              onChange={setPreviewSizes}
              sashRender={() => (
                <div className="w-2 bg-gray-800 hover:bg-gray-700 transition-colors cursor-col-resize" />
              )}
            >
              <div className="h-full overflow-hidden">
                <Editor
                  height="100%"
                  defaultLanguage="latex"
                  theme="vs-dark"
                //   value={files[activeFile]} Error: Property 'value' is missing in type '{ height: string; defaultLanguage: string; theme: string; onChange: (value: string | undefined) => void; options: { minimap: { enabled: boolean; }; fontSize: number; wordWrap: string; lineNumbers: string; renderWhitespace: string; scrollBeyondLastLine: boolean; }; }' but required in type 'EditorProps'.
                  onChange={handleFileChange}
                  options={{
                    minimap: { enabled: false },
                    fontSize: 14,
                    wordWrap: 'on',
                    lineNumbers: 'on',
                    renderWhitespace: 'selection',
                    scrollBeyondLastLine: false,
                  }}
                />
              </div>
              <div className="h-full bg-gray-800 overflow-auto">
                <PDFPreview pdfUrl={pdfUrl} isCompiling={isCompiling} />
              </div>
            </SplitPane>
          </div>
        </SplitPane>
      </div>
    </div>
  );
};

export default ResumeEditor;