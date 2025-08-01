"use client";

import { useState } from "react";
import { Upload } from "lucide-react";
import { uploadFile } from "@/lib/actions";

export function FileUpload() {
  const [isDragOver, setIsDragOver] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  const handleFileUpload = async (files: FileList | null) => {
    if (!files) return;
    setIsUploading(true);
    try {
      const uploadPromises = Array.from(files).map(file => {
        const formData = new FormData();
        formData.append("file", file);
        return uploadFile(formData);
      });
      await Promise.all(uploadPromises);
    } catch (error) {
      console.error("Error uploading files:", error);
    } finally {
      setIsUploading(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    handleFileUpload(e.dataTransfer.files);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  return (
    <div className="bg-neutral-900 rounded-lg p-6">
      <div
        className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
          isDragOver
            ? "border-neutral-400 bg-neutral-800"
            : "border-neutral-600 hover:border-neutral-500"
        }`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
        <Upload size={48} className="mx-auto text-neutral-400 mb-4" />
        <h3 className="text-lg font-medium text-white mb-2">
          {isUploading ? "Uploading..." : "Drop files here or click to upload"}
        </h3>
        <p className="text-white mb-4">
          Upload PDF, DOC, DOCX, or TXT files to be indexed
        </p>
        <input
          type="file"
          multiple
          accept=".pdf,.doc,.docx,.txt"
          onChange={(e) => handleFileUpload(e.target.files)}
          className="hidden"
          id="file-upload"
          disabled={isUploading}
        />
        <label
          htmlFor="file-upload"
          className={`inline-flex items-center px-4 py-2 bg-neutral-200 text-neutral-900 rounded-lg hover:bg-neutral-300 cursor-pointer transition-colors ${
            isUploading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {isUploading ? "Uploading..." : "Choose Files"}
        </label>
      </div>
    </div>
  );
} 