"use client";

import { useState } from "react";
import { FileUpload } from "../ui/file-upload";
import { FileList } from "../ui/file-list";

export function UploadPage() {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const handleFilesUpload = (newFiles: File[]) => {
    setUploadedFiles(prev => [...prev, ...newFiles]);
    // TODO: Implement file upload to ragie.ai
  };

  return (
    <div className="flex-1 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-2">
            Upload Documents
          </h2>
          <p className="text-white">
            Upload your documents to be indexed and made searchable. Supported formats: PDF, DOC, DOCX, TXT
          </p>
        </div>

        <FileUpload onFilesUpload={handleFilesUpload} />
        <FileList files={uploadedFiles} />
      </div>
    </div>
  );
} 