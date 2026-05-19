import { useState } from "react";

export default function GettingStarted() {
    const command = "curl -fsSL https://raw.githubusercontent.com/wynnee0110/VaultCLI/main/install.sh | bash";
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(command);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy:", err);
        }
    };

    return (
        <div className="space-y-10">
            <div>
                <h1 className="text-3xl font-bold mb-4 pb-2 border-b border-zinc-800">Getting Started</h1>
                <p className="text-zinc-300">
                    VaultCLI is your terminal-native, zero-knowledge secret manager. Keep your API keys, passwords, and environment variables encrypted and perfectly organized without ever leaving the command line.
                </p>
            </div>

            <div>
                <h2 className="text-2xl font-semibold mb-4">Core Concepts</h2>
                <ul className="list-disc pl-6 space-y-3 text-zinc-300">
                    <li><strong>Terminal Native:</strong> Built for speed. Manage everything without switching context to a browser.</li>
                    <li><strong>Offline First:</strong> All data is encrypted and decrypted locally. No external servers required.</li>
                    <li><strong>AES-256 Encryption:</strong> Your secrets are locked down with industry-standard encryption protocols.</li>
                    <li><strong>Portable:</strong> Easily back up your encrypted vault file and sync it across your devices.</li>
                </ul>
            </div>

            <div>
                <h2 className="text-2xl font-semibold mb-4">Quickstart Workflow</h2>
                <div className="space-y-8">
                    <div>
                        <h3 className="text-lg font-medium mb-2">1. Install the CLI</h3>
                        <div className="flex items-center justify-between bg-[#161b22] border border-zinc-800 p-3 rounded-md font-mono text-sm">
                            <code className="text-green-400">{command}</code>
                            <button onClick={handleCopy} className="text-zinc-400 hover:text-white ml-4">
                                {copied ? "Copied" : "Copy"}
                            </button>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-lg font-medium mb-2">2. Initialize your vault</h3>
                        <p className="text-zinc-400 mb-2">Set up your master password to secure your local environment.</p>
                        <pre className="bg-[#161b22] border border-zinc-800 p-3 rounded-md font-mono text-sm text-zinc-300">
                            $ vault init
                        </pre>
                    </div>
                </div>
            </div>
        </div>
    );
}