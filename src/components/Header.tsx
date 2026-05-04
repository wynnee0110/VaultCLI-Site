import { useState, useRef, useEffect } from "react";

const searchData = [
    { title: "Install VaultCLI", href: "/docs/install", keywords: ["install", "setup", "download"] },
    { title: "Authentication", href: "/docs/auth", keywords: ["login", "auth", "token"] },
    { title: "Commands", href: "/docs/commands", keywords: ["cli", "vault", "commands"] },
    { title: "Token", href: "/docs/token", keywords: ["token", "auth"] },
    { title: "Get Started", href: "/docs/get-started", keywords: ["get started", "install", "setup"] },
];

export default function Header() {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);
    const [open, setOpen] = useState(false);

    const containerRef = useRef(null);

    // 🔍 Live search
    const handleSearch = (value) => {
        setQuery(value);

        if (!value) {
            setResults([]);
            setOpen(false);
            return;
        }

        const filtered = searchData.filter(item =>
            item.title.toLowerCase().includes(value.toLowerCase()) ||
            item.keywords.some(k => k.toLowerCase().includes(value.toLowerCase()))
        );

        setResults(filtered);
        setOpen(true);
    };

    // 🖱️ Click outside → close dropdown
    useEffect(() => {
        const handleClick = (e) => {
            if (containerRef.current && !containerRef.current.contains(e.target)) {
                setOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClick);
        return () => document.removeEventListener("mousedown", handleClick);
    }, []);

    const handleSelect = (href) => {
        setOpen(false);
        setQuery("");
        window.location.href = href;
    };

    return (
        <header className="sticky top-0 w-full px-6 py-4 flex items-center justify-between">
            
            {/* LEFT */}
            <div className="flex items-center gap-6">
                <a href="/">
                    <div className="text-white font-semibold tracking-tight">
                        VaultCLI
                    </div>
                </a>

                <a href="/docs" className="text-sm text-slate-400 hover:text-white transition">
                    Docs
                </a>
            </div>

            {/* RIGHT (Search + GitHub) */}
            <div className="flex items-center gap-3">

                {/* 🔍 SEARCH */}
                <div ref={containerRef} className="relative">

                    <input
                        type="text"
                        value={query}
                        onChange={(e) => handleSearch(e.target.value)}
                        onFocus={() => query && setOpen(true)}
                        placeholder="Search..."
                        className="w-40 px-3 py-1.5 text-xs bg-slate-900/60 border border-slate-800 rounded-full text-white placeholder:text-slate-500 focus:outline-none focus:border-slate-600"
                    />

                    {/* 🔽 Dropdown */}
{open && (
  <div className="absolute top-full mt-1 w-56 bg-zinc-950/95 backdrop-blur-md border border-slate-800 rounded-md shadow-md overflow-hidden z-50">

    {results.length > 0 ? (
      results.map((item, i) => (
        <div
          key={i}
          onClick={() => handleSelect(item.href)}
          className="flex items-center justify-between px-3 py-2 text-xs text-slate-300 hover:bg-slate-800/60 hover:text-white cursor-pointer transition"
        >
          {/* LEFT: title */}
          <span className="truncate">
            {item.title}
          </span>

          {/* RIGHT: arrow icon */}
          <svg
            className="w-3 h-3 text-slate-500 group-hover:text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </div>
      ))
    ) : (
      <div className="px-3 py-2 text-xs text-slate-500">
        No results
      </div>
    )}

  </div>
)}
                </div>

                {/* 🔗 GITHUB (unchanged) */}
                <a
                    href="https://github.com/wynnee0110"
                    className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition"
                >
                    GitHub

                    <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path d="M12 .5C5.7.5.7 5.6.7 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.1c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.6-1.3-1.6-1.1-.8.1-.8.1-.8 1.2.1 1.8 1.2 1.8 1.2 1.1 1.9 3 1.4 3.7 1.1.1-.8.4-1.4.7-1.7-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.4 1.2-3.3-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.4 1.2 1-.3 2.1-.4 3.2-.4s2.2.1 3.2.4c2.4-1.5 3.4-1.2 3.4-1.2.6 1.6.2 2.8.1 3.1.8.9 1.2 2 1.2 3.3 0 4.5-2.7 5.5-5.3 5.8.4.4.8 1.2.8 2.4v3.5c0 .3.2.7.8.6A10.9 10.9 0 0 0 23.3 12C23.3 5.6 18.3.5 12 .5z" />
                    </svg>
                </a>

            </div>

        </header>
    );
}