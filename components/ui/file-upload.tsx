"use client";

import { useState } from "react";
import { uploadFile } from "@/lib/actions";
import { UploadIcon } from "@radix-ui/react-icons";

export function FileUpload() {
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

    return (
        <div className="bg-neutral-900 rounded-lg p-6">
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
                className={`inline-flex items-center px-4 py-2 bg-neutral-200 text-neutral-900 rounded-lg hover:bg-neutral-300 cursor-pointer transition-colors ${isUploading ? "opacity-50 cursor-not-allowed" : ""
                    }`}
            >
                <UploadIcon className="mr-2" />
                {isUploading ? "Uploading..." : "Upload Files"}
            </label>
        </div>
    );
} 
