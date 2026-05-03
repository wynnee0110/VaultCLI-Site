import { useState } from 'react';
import DocSection from '../../components/DocSection';
import { Copy, Check } from 'lucide-react';

export default function Installation() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (text: string): Promise<void> => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err: unknown) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <DocSection id="installation" title="Installation">
      <div className="group relative bg-zinc-950 border border-zinc-800 rounded-xl overflow-hidden shadow-2xl mt-2">
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
    </DocSection>
  );
}
