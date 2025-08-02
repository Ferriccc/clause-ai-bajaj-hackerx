import { FileUpload } from "@/components/ui/file-upload";
import { FileList } from "@/components/ui/file-list";

export default async function UploadPage() {
    return (
        <div className="flex-1 flex-col p-4 md:p-6">
            <div className="flex items-center justify-between gap-4">
                <h1 className="text-lg font-semibold md:text-2xl text-white">Knowledge Base</h1>
                <FileUpload />
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
                Uploaded Documents
            </p>
            <FileList />
        </div>
    );
} 
