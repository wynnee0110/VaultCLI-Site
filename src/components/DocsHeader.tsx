export default function DocsHeader() {
    return (
        <header className="sticky top-0 z-50 w-full px-6 py-4 flex items-center justify-between bg-black/90 backdrop-blur border-b border-slate-800/50">

            {/* LEFT */}
            <div className="flex items-center gap-6">
                <a href="/">
                    <div className="text-white font-semibold tracking-tight">
                        VaultCLI
                    </div>
                </a>

                <a href="/Docs" className="text-sm text-slate-400 hover:text-white transition">
                    Docs
                </a>
            </div>

            {/* RIGHT (Search + GitHub) */}
            <div className="flex items-center gap-3">

                <input
                    type="text"
                    placeholder="Search..."
                    className="w-40 px-3 py-1.5 text-xs bg-slate-900/60 border border-slate-800 rounded-full text-white placeholder:text-slate-500 focus:outline-none focus:border-slate-600"
                />

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