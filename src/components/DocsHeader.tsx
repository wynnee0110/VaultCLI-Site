interface NavItem {
  id: string;
  label: string;
}

interface DocsHeaderProps {
  activePage: string;
  setActivePage: (value: string) => void;
}

const NAV_ITEMS: NavItem[] = [
  { id: "getting-started", label: "Getting Started" },
  { id: "installation", label: "Installation" },
  { id: "commands", label: "Commands" },
  { id: "security", label: "Security" },
  { id: "faq", label: "FAQ" },
];

export default function DocsHeader({
  activePage,
  setActivePage,
}: DocsHeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full px-6 py-3 flex items-center justify-between bg-[#0d1117] border-b border-[#30363d]">
      {/* LEFT */}
      <div className="flex items-center gap-6">
        <a href="/">
          <div className="text-[#c9d1d9] font-semibold tracking-tight hover:text-white transition-colors">
            VaultCLI
          </div>
        </a>

        <a href="/docs" className="text-sm text-[#8b949e] hover:text-[#c9d1d9] transition-colors">
          Docs
        </a>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-4">
        <input
          type="text"
          placeholder="Search docs..."
          className="w-48 px-3 py-1.5 text-sm bg-[#0d1117] border border-[#30363d] rounded-md text-[#c9d1d9] placeholder:text-[#8b949e] focus:outline-none focus:border-[#58a6ff] focus:ring-1 focus:ring-[#58a6ff]"
        />

        <a href="https://github.com/wynnee0110" className="flex items-center gap-2 text-sm text-[#8b949e] hover:text-[#c9d1d9] transition-colors" >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" > <path d="M12 .5C5.7.5.7 5.6.7 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.1c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.6-1.3-1.6-1.1-.8.1-.8.1-.8 1.2.1 1.8 1.2 1.8 1.2 1.1 1.9 3 1.4 3.7 1.1.1-.8.4-1.4.7-1.7-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.4 1.2-3.3-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.4 1.2 1-.3 2.1-.4 3.2-.4s2.2.1 3.2.4c2.4-1.5 3.4-1.2 3.4-1.2.6 1.6.2 2.8.1 3.1.8.9 1.2 2 1.2 3.3 0 4.5-2.7 5.5-5.3 5.8.4.4.8 1.2.8 2.4v3.5c0 .3.2.7.8.6A10.9 10.9 0 0 0 23.3 12C23.3 5.6 18.3.5 12 .5z" /> </svg>
        </a>
      </div>

      {/* MOBILE DROPDOWN */}
      <div className="md:hidden">
        <select
          value={activePage}
          onChange={(e) => setActivePage(e.target.value)}
          className="bg-[#0d1117] border border-[#30363d] text-[#c9d1d9] text-sm rounded-md px-2 py-1"
        >
          {NAV_ITEMS.map((item) => (
            <option key={item.id} value={item.id}>
              {item.label}
            </option>
          ))}
        </select>
      </div>
    </header>
  );
}