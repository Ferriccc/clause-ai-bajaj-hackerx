export function FileListLoading() {
    return (
        <div className="mt-4">
            <div className="bg-neutral-800 rounded-lg">
                {[...Array(5)].map((_, i) => (
                    <div
                        key={i}
                        className="flex items-center justify-between p-4 border-b border-neutral-700 last:border-b-0"
                    >
                        <div className="flex items-center gap-4">
                            <div className="h-4 w-4 bg-neutral-700 rounded-full"></div>
                            <div className="h-6 w-6 bg-neutral-700 rounded-md"></div>
                            <div className="flex flex-col gap-2">
                                <div className="h-4 w-48 bg-neutral-700 rounded-md"></div>
                                <div className="h-3 w-32 bg-neutral-700 rounded-md"></div>
                            </div>
                        </div>
                        <div className="h-8 w-8 bg-neutral-700 rounded-md"></div>
                    </div>
                ))}
            </div>
        </div>
    );
}
