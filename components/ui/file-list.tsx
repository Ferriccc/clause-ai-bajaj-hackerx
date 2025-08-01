'use client';

import { useState, useEffect } from 'react';
import { FileText, Trash2, Loader2 } from 'lucide-react';
import { Document } from 'ragie/models/components';
import { deleteDocument } from '@/lib/actions';

interface FileListProps {
    files: Document[];
}

export function FileList({ files: initialFiles }: FileListProps) {
    const [files, setFiles] = useState(initialFiles);
    const [loadingStates, setLoadingStates] = useState<Record<string, boolean>>({});

    useEffect(() => {
        setFiles(initialFiles);
    }, [initialFiles]);

    const handleDelete = async (id: string) => {
        setLoadingStates((prev) => ({ ...prev, [id]: true }));
        try {
            await deleteDocument(id);
            setFiles(files.filter((file) => file.id !== id));
        } catch (error) {
            console.error('Failed to delete document:', error);
            // Optionally, show an error message to the user
        } finally {
            setLoadingStates((prev) => ({ ...prev, [id]: false }));
        }
    };

    if (files.length === 0) {
        return <p className="text-white text-center mt-8">No files uploaded yet.</p>;
    }

    return (
        <div className="mt-8">
            <div className="bg-neutral-800 rounded-lg">
                {files.map((file, index) => (
                    <div
                        key={file.id}
                        className="flex items-center justify-between p-4 border-b border-neutral-700 last:border-b-0"
                    >
                        <div className="flex items-center gap-4">
                            <span className="text-neutral-400 font-medium">{index + 1}.</span>
                            <FileText size={24} className="text-neutral-400" />
                            <div className="flex flex-col">
                                <p className="font-medium text-white">{file.name}</p>
                                <p className="text-sm text-neutral-400">
                                    Status: {file.status}
                                </p>
                            </div>
                        </div>
                        <button
                            onClick={() => handleDelete(file.id)}
                            className="p-2 rounded-md hover:bg-neutral-700 transition-colors"
                            disabled={loadingStates[file.id]}
                        >
                            {loadingStates[file.id] ? (
                                <Loader2 size={20} className="animate-spin text-red-500" />
                            ) : (
                                <Trash2 size={20} className="text-red-500" />
                            )}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
