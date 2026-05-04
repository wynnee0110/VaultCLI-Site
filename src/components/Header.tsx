import { useState, useRef, useEffect } from "react";

interface SearchData {
  title: string;
  href: string;
  keywords: string[];
}

const searchData: SearchData[] = [
  { title: "Install VaultCLI", href: "/docs/install", keywords: ["install", "setup", "download"] },
  { title: "Authentication", href: "/docs/auth", keywords: ["login", "auth", "token"] },
  { title: "Commands", href: "/docs/commands", keywords: ["cli", "vault", "commands"] },
  { title: "Token", href: "/docs/token", keywords: ["token", "auth"] },
  { title: "Get Started", href: "/docs/get-started", keywords: ["get started", "install", "setup"] },
];

export default function Header() {
  const [query, setQuery] = useState<string>("");

  // ✅ FIX: type the state properly
  const [results, setResults] = useState<SearchData[]>([]);

  const [open, setOpen] = useState<boolean>(false);

  // ✅ FIX: type ref properly
  const containerRef = useRef<HTMLDivElement | null>(null);

  // 🔍 Live search
  const handleSearch = (value: string) => {
    setQuery(value);

    if (!value) {
      setResults([]);
      setOpen(false);
      return;
    }

    const filtered = searchData.filter((item) =>
      item.title.toLowerCase().includes(value.toLowerCase()) ||
      item.keywords.some((k) => k.toLowerCase().includes(value.toLowerCase()))
    );

    setResults(filtered);
    setOpen(true);
  };

  // 🖱️ Click outside → close dropdown
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // ✅ FIX: type href
  const handleSelect = (href: string) => {
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

      {/* RIGHT */}
      <div className="flex items-center gap-3">

        {/* SEARCH */}
        <div ref={containerRef} className="relative">

          <input
            type="text"
            value={query}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleSearch(e.target.value)
            }
            onFocus={() => query && setOpen(true)}
            placeholder="Search..."
            className="w-40 px-3 py-1.5 text-xs bg-slate-900/60 border border-slate-800 rounded-full text-white placeholder:text-slate-500 focus:outline-none focus:border-slate-600"
          />

          {/* DROPDOWN */}
          {open && (
            <div className="absolute top-full mt-1 w-56 bg-zinc-950/95 backdrop-blur-md border border-slate-800 rounded-md shadow-md overflow-hidden z-50">

              {results.length > 0 ? (
                results.map((item, i) => (
                  <div
                    key={i}
                    onClick={() => handleSelect(item.href)}
                    className="flex items-center justify-between px-3 py-2 text-xs text-slate-300 hover:bg-slate-800/60 hover:text-white cursor-pointer transition"
                  >
                    <span className="truncate">{item.title}</span>

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

        {/* GITHUB */}
        <a
          href="https://github.com/wynnee0110"
          className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition"
        >
          GitHub
        </a>

      </div>
    </header>
  );
}