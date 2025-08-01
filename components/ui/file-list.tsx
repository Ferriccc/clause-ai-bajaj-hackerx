"use client";

import { FileText } from "lucide-react";

interface FileListProps {
  files: File[];
}

export function FileList({ files }: FileListProps) {
  if (files.length === 0) return null;

  return (
    <div className="mt-8">
      <h3 className="text-lg font-medium text-white mb-4">Uploaded Files</h3>
      <div className="bg-neutral-900 rounded-lg">
        {files.map((file, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 border-b border-neutral-800 last:border-b-0"
          >
            <div className="flex items-center gap-3">
              <FileText size={20} className="text-neutral-400" />
              <div>
                <p className="font-medium text-white">{file.name}</p>
                <p className="text-sm text-white">
                  {(file.size / 1024 / 1024).toFixed(2)} MB
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-neutral-300 bg-neutral-800 px-2 py-1 rounded">
                Uploaded
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 