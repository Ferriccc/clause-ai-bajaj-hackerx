import { Suspense } from 'react';
import { Sidebar } from "@/components/ui";
import { QueryPage, UploadPage, FilesPage } from "@/components/pages";

type TabType = "query" | "upload" | "files";
const validTabs: TabType[] = ["query", "upload", "files"];

export default async function Home({ searchParams }: { searchParams: { tab?: string } }) {
  const requestedTab = searchParams.tab;
  const activeTab: TabType = validTabs.includes(requestedTab as TabType) ? (requestedTab as TabType) : "query";

  return (
    <div className="flex h-screen bg-neutral-900">
      <Sidebar activeTab={activeTab} />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <Suspense fallback={<div className="text-white p-8">Loading Query Page...</div>}>
          {activeTab === "query" && <QueryPage />}
        </Suspense>
        <Suspense fallback={<div className="text-white p-8">Loading Upload Page...</div>}>
          {activeTab === "upload" && <UploadPage />}
        </Suspense>
        <Suspense fallback={<div className="text-white p-8">Loading Files Page...</div>}>
          {activeTab === "files" && <FilesPage />}
        </Suspense>
      </div>
    </div>
  );
}
