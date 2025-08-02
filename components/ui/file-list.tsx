import { FileText } from 'lucide-react';
import { getUploadedFiles } from '@/lib/actions';
import { DeleteFileButton } from './delete-file-button';

export async function FileList() {
    const files = await getUploadedFiles();

    if (files.length === 0) {
        return <p className="text-white text-center mt-8">No files uploaded yet.</p>;
    }

    return (
        <div className="mt-4">
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
                        <DeleteFileButton id={file.id} />
                    </div>
                ))}
            </div>
        </div>
    );
}
