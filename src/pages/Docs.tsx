import { useState, useEffect } from 'react';
import { BinaryBackground } from '../components/BinaryBackground';
import GettingStarted from '../components/sections/GettingStarted';
import Installation from '../components/sections/Installation';
import DocsHeader from '../components/DocsHeader';

const NAV_ITEMS = [
  { id: 'getting-started', label: 'Getting Started' },
  { id: 'installation', label: 'Installation' },
  { id: 'commands', label: 'Commands' },
  { id: 'configuration', label: 'Configuration' },
  { id: 'security', label: 'Security' },
  
];

function Docs() {
  const [activePage, setActivePage] = useState('getting-started');

  return (
    <div className="min-h-screen bg-black/90 text-zinc-300 selection:bg-indigo-500/30">
            <BinaryBackground />
      <DocsHeader />



      {/* Outer wrapper: full height minus header, flex row */}
      <div className="relative flex w-full max-w-7xl mx-auto mt-20 px-6 gap-16"
           style={{ minHeight: 'calc(100vh - 5rem)' }}>

        {/* SIDEBAR — fixed position relative to viewport */}
        <aside className="hidden md:block w-64 shrink-0">
          <div className="fixed top-24 w-64">
            <h3 className="text-xs uppercase tracking-widest text-zinc-500 mb-4">
              Documentation
            </h3>
            <nav className="flex flex-col gap-1">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActivePage(item.id)}
                  className={`px-3 py-2 rounded-lg text-sm transition text-left ${
                    activePage === item.id
                      ? "bg-zinc-900 text-white border-l-2 border-indigo-500"
                      : "text-zinc-400 hover:text-white hover:bg-zinc-900/50"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        </aside>

        {/* MAIN CONTENT — scrolls normally */}
        <main className="flex-1 max-w-3xl pb-32">
          {activePage === "getting-started" && <GettingStarted />}
          {activePage === "installation" && <Installation />}
          {activePage === "commands" && <div>Commands section here</div>}
          {activePage === "configuration" && <div>Configuration section here</div>}
          {activePage === "security" && <div>Security section here</div>}
        </main>

      </div>
    </div>
  );
}

export default Docs;