import { getUploadedFiles } from "@/lib/actions";
import { FileList } from "../ui/file-list";

export async function FilesPage() {
  const files = await getUploadedFiles();

  return (
    <div className="h-full flex flex-col items-center bg-neutral-900 text-white p-8">
      <div className="w-full max-w-2xl space-y-8">
        <h1 className="text-3xl font-bold text-center">Uploaded Files</h1>
        <FileList files={files} />
      </div>
    </div>
  );
}
