"use client";

import { FileUpload } from "../ui/file-upload";

export function UploadPage() {
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

        <FileUpload />
      </div>
    </div>
  );
} 