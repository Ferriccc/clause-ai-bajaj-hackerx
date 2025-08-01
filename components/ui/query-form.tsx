"use client";

import { useState } from "react";
import { Search } from "lucide-react";

interface QueryFormProps {
  onSubmit: (query: string) => void;
  isLoading?: boolean;
}

export function QueryForm({ onSubmit, isLoading = false }: QueryFormProps) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    onSubmit(query);
  };

  return (
    <div className="bg-neutral-900 rounded-lg p-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="query" className="block text-sm font-medium text-white mb-2">
            Your Query
          </label>
          <textarea
            id="query"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="e.g., 46-year-old male, knee surgery in Pune, 3-month-old insurance policy"
            className="w-full h-32 px-4 py-3 rounded-lg focus:ring-2 focus:ring-neutral-400 focus:border-transparent resize-none bg-neutral-800 text-white placeholder-neutral-400"
          />
        </div>
        
        <button
          type="submit"
          disabled={!query.trim() || isLoading}
          className="w-full bg-neutral-200 text-neutral-900 py-3 px-4 rounded-lg font-medium hover:bg-neutral-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {isLoading ? (
            <div className="flex items-center justify-center gap-2">
              <div className="w-4 h-4 border-2 border-neutral-900 border-t-transparent rounded-full animate-spin"></div>
              Processing...
            </div>
          ) : (
            <div className="flex items-center justify-center gap-2">
              <Search size={20} />
              Search Documents
            </div>
          )}
        </button>
      </form>
    </div>
  );
} 