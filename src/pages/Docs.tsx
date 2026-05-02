import { useState, useEffect } from 'react';
import { BinaryBackground } from '../components/BinaryBackground';
import Header from '../components/Header';
import { Terminal, Copy, Check } from 'lucide-react';

const NAV_ITEMS = [
  { id: 'getting-started', label: 'Getting Started' },
  { id: 'installation', label: 'Installation' },
  { id: 'commands', label: 'Commands' },
  { id: 'configuration', label: 'Configuration' },
  { id: 'security', label: 'Security' },
];

function Docs() {
  const [activeSection, setActiveSection] = useState('getting-started');
  const [copied, setCopied] = useState(false);

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

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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

          {/* SECTION: Getting Started */}
          <section id="getting-started" className="scroll-mt-32 mb-16">
            <h2 className="text-2xl font-semibold text-white mb-4">Getting Started</h2>
            <p className="text-zinc-400 leading-7">
              VaultCLI uses AES-256-GCM encryption to ensure your data stays private. To begin, 
              ensure you have a stable internet connection for the initial binary fetch.
            </p>
          </section>

          {/* SECTION: Installation */}
          <section id="installation" className="scroll-mt-32 mb-16">
            <h2 className="text-2xl font-semibold text-white mb-6">Installation</h2>
            <div className="group relative bg-zinc-950 border border-zinc-800 rounded-xl overflow-hidden shadow-2xl">
              <div className="flex items-center justify-between px-4 py-2 bg-zinc-900/50 border-b border-zinc-800">
                <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-mono">Terminal</span>
                <button 
                  onClick={() => handleCopy('curl -sSL https://vaultcli.dev/install | bash')}
                  className="p-1.5 hover:bg-zinc-800 rounded-md transition-colors"
                >
                  {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} className="text-zinc-500" />}
                </button>
              </div>
              <div className="p-6 overflow-x-auto">
                <code className="text-indigo-300 text-sm md:text-base whitespace-nowrap">
                  <span className="text-zinc-500 select-none">$ </span>
                  curl -sSL https://vaultcli.dev/install | bash
                </code>
              </div>
            </div>
          </section>

          {/* SECTION: Commands */}
          <section id="commands" className="scroll-mt-32 mb-16">
            <h2 className="text-2xl font-semibold text-white mb-6">Core Commands</h2>
            <div className="grid gap-4">
              {[
                { cmd: 'vault init', desc: 'Creates a new local master key and configuration file.' },
                { cmd: 'vault add [key]', desc: 'Encrypts and stores a new secret string.' },
                { cmd: 'vault list', desc: 'Displays all stored entry keys (values hidden).' },
              ].map((item, i) => (
                <div key={i} className="p-4 rounded-xl border border-zinc-800 bg-zinc-900/20 hover:bg-zinc-900/40 transition-colors group">
                  <div className="flex items-center gap-3">
                    <Terminal size={16} className="text-indigo-500" />
                    <code className="text-white font-mono text-sm">{item.cmd}</code>
                  </div>
                  <p className="mt-2 text-sm text-zinc-500 ml-7">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ADD PLACEHOLDERS FOR REMAINING SECTIONS */}
          <section id="configuration" className="h-64 border-t border-zinc-800 pt-10 mt-10">
             <h2 className="text-2xl font-semibold text-white mb-4">Configuration</h2>
             <p className="text-zinc-500 italic">Advanced config documentation coming soon...</p>
          </section>
        </div>
      </section>
    </div>
  );
}

export default Docs;