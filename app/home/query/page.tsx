"use client";

import { useState } from "react";
import { QueryForm } from "@/components/ui/query-form";
import { ExampleQueries } from "@/components/ui/example-queries";
import { queryRagie } from "@/lib/actions";

export default function QueryPage() {
    const [isLoading, setIsLoading] = useState(false);

    const handleQuerySubmit = async (query: string) => {
        setIsLoading(true);
        const results = await queryRagie(query);
        console.log(results);
        setIsLoading(false);
    };

    const handleExampleSelect = (query: string) => {
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
