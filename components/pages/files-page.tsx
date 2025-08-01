'use client';

import { useEffect, useState } from 'react';
import { getUploadedFiles } from '@/lib/actions';
import { FileList } from '../ui/file-list';
import { Document } from "ragie/models/components";

export function FilesPage() {
  const [files, setFiles] = useState<Document[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadFiles() {
      try {
        const uploadedFiles = await getUploadedFiles();
        setFiles(uploadedFiles);
      } catch (error) {
        console.error('Failed to fetch uploaded files:', error);
        // Optionally, handle the error in the UI
      } finally {
        setIsLoading(false);
      }
    }

    loadFiles();
  }, []);

  return (
    <div className="h-full flex flex-col items-center bg-neutral-900 text-white p-8">
      <div className="w-full max-w-2xl space-y-8">
        <h1 className="text-3xl font-bold text-center">Uploaded Files</h1>
        {isLoading ? (
          <p className="text-center">Loading files...</p>
        ) : (
          <FileList files={files} />
        )}
      </div>
    </div>
  );
}