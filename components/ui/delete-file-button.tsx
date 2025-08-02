"use client";

import { useState } from 'react';
import { Trash2, Loader2 } from 'lucide-react';
import { deleteDocument } from '@/lib/actions';

export function DeleteFileButton({ id }: { id: string }) {
    const [loadingStates, setLoadingStates] = useState<Record<string, boolean>>({});
    const handleDelete = async (id: string) => {
        setLoadingStates((prev) => ({ ...prev, [id]: true }));
        try {
            await deleteDocument(id);
        } catch (error) {
            console.error('Failed to delete document:', error);
            // Optionally, show an error message to the user
        } finally {
            setLoadingStates((prev) => ({ ...prev, [id]: false }));
        }
    };
    return (
        <button
            onClick={() => handleDelete(id)}
            className="p-2 rounded-md hover:bg-neutral-700 transition-colors"
            disabled={loadingStates[id]}
        >
            {loadingStates[id] ? (
                <Loader2 size={20} className="animate-spin text-red-500" />
            ) : (
                <Trash2 size={20} className="text-red-500" />
            )}
        </button>
    );
}
