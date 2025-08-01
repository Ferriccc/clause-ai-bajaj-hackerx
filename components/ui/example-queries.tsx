"use client";

interface ExampleQueriesProps {
  onQuerySelect: (query: string) => void;
}

const EXAMPLE_QUERIES = [
  "46-year-old male, knee surgery in Pune, 3-month-old insurance policy",
  "What is the coverage for dental procedures?",
  "Is pre-existing condition covered under this policy?",
  "What documents are required for claim processing?"
];

export function ExampleQueries({ onQuerySelect }: ExampleQueriesProps) {
  return (
    <div className="mt-8">
      <h3 className="text-lg font-medium text-white mb-4">Example Queries</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {EXAMPLE_QUERIES.map((example, index) => (
          <button
            key={index}
            onClick={() => onQuerySelect(example)}
            className="text-left p-4 bg-neutral-900 rounded-lg hover:bg-neutral-800 transition-colors"
          >
            <p className="text-sm text-white">{example}</p>
          </button>
        ))}
      </div>
    </div>
  );
} 