"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function Sidebar() {
    const pathname = usePathname();

    const links = [
        { href: "/home/query", label: "Query Page" },
        { href: "/home/upload", label: "Upload Page" },
    ];

    return (
        <div className="w-64 min-h-screen bg-neutral-800 text-white p-4">
            <div className="mb-8">
                <h1 className="text-xl font-bold">Clause AI</h1>
            </div>
            <nav>
                <ul className="space-y-2">
                    {links.map((link) => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                className={`block px-4 py-2 rounded-md transition-colors ${pathname === link.href
                                    ? "bg-neutral-700 text-white"
                                    : "text-neutral-300 hover:bg-neutral-700 hover:text-white"
                                    }`}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}

export default function HomeLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen bg-gray-100">
            <Sidebar />
            <main className="flex-1 p-8 bg-neutral-900">{children}</main>
        </div>
    );
}
