import DocSection from '../../components/DocSection';
import { Terminal } from 'lucide-react';

export default function Commands() {
  const commands = [
    { cmd: 'vault init', desc: 'Creates a new local master key and configuration file.' },
    { cmd: 'vault add [key]', desc: 'Encrypts and stores a new secret string.' },
    { cmd: 'vault list', desc: 'Displays all stored entry keys (values hidden).' },
  ];

  return (
    <DocSection id="commands" title="Core Commands">
      <div className="grid gap-4 mt-2">
        {commands.map((item, i) => (
          <div key={i} className="p-4 rounded-xl border border-zinc-800 bg-zinc-900/20 hover:bg-zinc-900/40 transition-colors group">
            <div className="flex items-center gap-3">
              <Terminal size={16} className="text-indigo-500" />
              <code className="text-white font-mono text-sm">{item.cmd}</code>
            </div>
            <p className="mt-2 text-sm text-zinc-500 ml-7">{item.desc}</p>
          </div>
        ))}
      </div>
    </DocSection>
  );
}
