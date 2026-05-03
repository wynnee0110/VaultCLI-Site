import { useState, useEffect } from 'react';
import { BinaryBackground } from '../components/BinaryBackground';
import Header from '../components/Header';

import GettingStarted from './sections/GettingStarted';
import Installation from './sections/Installation';
import Commands from './sections/Commands';
import Configuration from './sections/Configuration';
import Security from './sections/Security';

interface NavItem {
  id: string;
  label: string;
}
const NAV_ITEMS = [
  { id: 'getting-started', label: 'Getting Started' },
  { id: 'installation', label: 'Installation' },
  { id: 'commands', label: 'Commands' },
  { id: 'configuration', label: 'Configuration' },
  { id: 'security', label: 'Security' },
];

function Docs() {
  const [activeSection, setActiveSection] = useState('getting-started');

  // Simple scroll spy to highlight sidebar
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-20% 0px -70% 0px' }
    );

    NAV_ITEMS.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-black/90 text-zinc-300 selection:bg-indigo-500/30">
      <Header />
      <BinaryBackground />

      <section className="relative w-full max-w-7xl mx-auto mt-20 px-6 flex flex-col md:flex-row gap-16">
        
        {/* LEFT — SIDEBAR */}
        <aside className="w-64 hidden md:block">
          <div className="sticky top-28 space-y-8">
            <div>
              <h3 className="text-xs uppercase tracking-[0.2em] text-zinc-500 font-bold mb-4">
                Documentation
              </h3>
              <nav className="flex flex-col gap-1">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`px-3 py-2 rounded-lg text-sm transition-all duration-200 ${
                      activeSection === item.id
                        ? 'bg-zinc-900 text-white font-medium border-l-2 border-indigo-500'
                        : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/50'
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </aside>

        {/* RIGHT — CONTENT */}
        <div className="flex-1 max-w-3xl pb-24">
          <header className="mb-16">
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-indigo-400 font-semibold mb-4">
              <span className="h-px w-8 bg-indigo-500/50"></span>
              v1.0.4 Release
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-[1.1]">
              Command your vault with <span className="text-indigo-500">speed.</span>
            </h1>
            <p className="mt-6 text-lg text-zinc-400 leading-relaxed font-light">
              VaultCLI is a lightweight, encrypted terminal interface designed for developers. 
              Manage secrets without ever leaving your workflow.
            </p>
          </header>

          <GettingStarted />
          <Installation />
          <Commands />
          <Configuration />
          <Security />
        </div>
      </section>
    </div>
  );
}

export default Docs;