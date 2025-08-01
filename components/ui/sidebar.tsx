"use client";

import { FileText, MessageSquare, Upload } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

interface SidebarProps {
  activeTab: "query" | "upload" | "files";
}

export function Sidebar({ activeTab }: SidebarProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleTabChange = (tab: "query" | "upload" | "files") => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("tab", tab);
    router.push(`/?${params.toString()}`);
  };

  return (
    <div className="w-64 bg-neutral-800 flex flex-col">
      {/* Header */}
      <div className="p-6 border-b border-neutral-700">
        <h1 className="text-xl font-semibold text-white">Document AI</h1>
        <p className="text-sm text-white mt-1">Query your documents</p>
      </div>

      {/* Navigation Tabs */}
      <div className="flex-1 p-4">
        <div className="space-y-2">
          <button
            onClick={() => handleTabChange("query")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
              activeTab === "query"
                ? "bg-neutral-700 text-white"
                : "text-white hover:bg-neutral-700"
            }`}
          >
            <MessageSquare size={20} />
            <span className="font-medium">Query Documents</span>
          </button>

          <button
            onClick={() => handleTabChange("upload")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
              activeTab === "upload"
                ? "bg-neutral-700 text-white"
                : "text-white hover:bg-neutral-700"
            }`}
          >
            <Upload size={20} />
            <span className="font-medium">Upload Documents</span>
          </button>
          <button
            onClick={() => handleTabChange("files")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
              activeTab === "files"
                ? "bg-neutral-700 text-white"
                : "text-white hover:bg-neutral-700"
            }`}
          >
            <FileText size={20} />
            <span className="font-medium">Uploaded Files</span>
          </button>
        </div>
      </div>
    </div>
  );
}