import { FileUpload } from "@/components/ui/file-upload";
import { FileList } from "@/components/ui/file-list";
import { FileListLoading } from "@/components/ui/file-list-loading";
import { Suspense } from "react";

export default async function UploadPage() {
    return (
        <div className="flex-1 flex-col">
            <div className="flex items-center justify-between gap-4">
                <h1 className="text-lg font-semibold md:text-2xl text-white">Knowledge Base</h1>
                <FileUpload />
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
                Uploaded Documents
            </p>
            <Suspense fallback={<FileListLoading />}>
                <FileList />
            </Suspense>
        </div>
    );
} 
