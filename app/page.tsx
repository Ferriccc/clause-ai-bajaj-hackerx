"use client";

import { useState } from "react";
import { Sidebar } from "@/components/ui";
import { QueryPage, UploadPage, FilesPage } from "@/components/pages";

export default function Home() {
  const [activeTab, setActiveTab] = useState<"query" | "upload" | "files">("query");

  return (
    <div className="flex h-screen bg-neutral-900">
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {activeTab === "query" && <QueryPage />}
        {activeTab === "upload" && <UploadPage />}
        {activeTab === "files" && <FilesPage />}
      </div>
    </div>
  );
}
