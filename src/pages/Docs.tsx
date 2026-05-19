import { useState } from 'react';
import GettingStarted from '../components/sections/GettingStarted';
import Installation from '../components/sections/Installation';
import Commands from '../components/sections/Commands';
import DocsHeader from '../components/DocsHeader';
import Security from '../components/sections/Security';
import Faq from '../components/sections/Faq';

const NAV_ITEMS = [
  { id: 'getting-started', label: 'Getting Started' },
  { id: 'installation', label: 'Installation' },
  { id: 'commands', label: 'Commands' },
  { id: 'security', label: 'Security' },
  { id: 'faq', label: 'FAQ' }
];

function Docs() {
  const [activePage, setActivePage] = useState('getting-started');

  return (
    <div className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans selection:bg-[#1f6feb] selection:text-white pb-20">
      <DocsHeader
        activePage={activePage}
        setActivePage={setActivePage}
      />

      <div className="flex max-w-[1200px] mx-auto px-6 pt-10 gap-12 items-start" style={{ minHeight: 'calc(100vh - 4rem)' }}>
        
        {/* SIDEBAR */}
        <aside className="hidden md:block w-56 shrink-0 border-r border-[#30363d] pr-4 self-stretch">
          <div className="sticky top-24">
            <h3 className="text-xs font-semibold text-[#8b949e] mb-3 uppercase tracking-wider">Documentation</h3>
            <nav className="flex flex-col gap-0.5">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActivePage(item.id)}
                  className={`px-3 py-1.5 text-sm text-left transition-colors ${
                    activePage === item.id
                      ? "bg-[#161b22] text-[#c9d1d9] font-medium border-l-[3px] border-[#2f81f7] -ml-[3px]"
                      : "text-[#8b949e] hover:text-[#c9d1d9] hover:bg-[#161b22] border-l-[3px] border-transparent -ml-[3px]"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        </aside>

        {/* MAIN CONTENT */}
        <main className="flex-1 max-w-[800px] min-w-0">
          {activePage === "getting-started" && <GettingStarted />}
          {activePage === "installation" && <Installation />}
          {activePage === "commands" && <Commands />}
          {activePage === "faq" && <Faq />}
          {activePage === "security" && <Security />}
        </main>
      </div>
    </div>
  );
}

export default Docs;