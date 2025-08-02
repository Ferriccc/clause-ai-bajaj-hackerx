"use client";

import { useState } from "react";
import { QueryForm } from "@/components/ui/query-form";
import { ExampleQueries } from "@/components/ui/example-queries";

export default function QueryPage() {
    const [isLoading, setIsLoading] = useState(false);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const handleQuerySubmit = async (_query: string) => {
        setIsLoading(true);
        // TODO: Implement query logic with ragie.ai
        setTimeout(() => setIsLoading(false), 2000);
    };

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const handleExampleSelect = (_query: string) => {
        // This will be handled by the QueryForm component
        // We could pass this through a ref or state management
    };

    return (
        <div className="flex-1 p-8">
            <div className="max-w-4xl mx-auto">
                <div className="mb-8">
                    <h2 className="text-2xl font-semibold text-white mb-2">
                        Query Your Documents
                    </h2>
                    <p className="text-white">
                        Ask natural language questions about your uploaded documents. The AI will search through your documents and provide relevant answers.
                    </p>
                </div>

                <QueryForm onSubmit={handleQuerySubmit} isLoading={isLoading} />
                <ExampleQueries onQuerySelect={handleExampleSelect} />
            </div>
        </div>
    );
} 
