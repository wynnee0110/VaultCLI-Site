import { useState } from "react";

export default function GettingStarted() {

    const command = "curl -fsSL https://raw.githubusercontent.com/wynnee0110/VaultCLI/main/install.sh | bash"

    const [copied, setCopied] = useState(false);

    // function to copy text to clipboard
    const handleCopy = async () => {
        try {
            // copies text to user clipboard
            await navigator.clipboard.writeText(command);

            // show feedback
            setCopied(true);

            // reset after 2 seconds
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy:", err);
        }
    };

    return (
        <section id="getting-started" className="scroll-mt-32 mb-16 max-w-3xl">
            {/* Header Section */}
            <div className="mb-10">
                <h2 className="text-3xl font-semibold text-zinc-100 mb-4 tracking-tight">
                    Getting Started
                </h2>
                <p className="text-zinc-400 text-lg leading-relaxed">
                    VaultCLI is your terminal-native, zero-knowledge secret manager. Keep your API keys, passwords, and environment variables encrypted and perfectly organized without ever leaving the command line.
                </p>
            </div>

            {/* Core Concepts Grid */}
            <div className="mb-12">
                <h3 className="text-xl font-medium text-zinc-100 mb-4 flex items-center gap-2">
                    <span></span> Core Concepts
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900 transition-colors">
                        <h4 className="text-zinc-200 font-medium mb-1">Terminal Native</h4>
                        <p className="text-sm text-zinc-500">Built for speed. Manage everything without switching context to a browser.</p>
                    </div>
                    <div className="p-4 rounded-xl border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900 transition-colors">
                        <h4 className="text-zinc-200 font-medium mb-1">Offline First</h4>
                        <p className="text-sm text-zinc-500">All data is encrypted and decrypted locally. No external servers required.</p>
                    </div>
                    <div className="p-4 rounded-xl border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900 transition-colors">
                        <h4 className="text-zinc-200 font-medium mb-1">AES-256 Encryption</h4>
                        <p className="text-sm text-zinc-500">Your secrets are locked down with industry-standard encryption protocols.</p>
                    </div>
                    <div className="p-4 rounded-xl border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900 transition-colors">
                        <h4 className="text-zinc-200 font-medium mb-1">Portable</h4>
                        <p className="text-sm text-zinc-500">Easily back up your encrypted vault file and sync it across your devices.</p>
                    </div>
                </div>
            </div>

            {/* Workflow Section */}
            <div>
                <h3 className="text-xl font-medium text-zinc-100 mb-6 flex items-center gap-2">
                    <span>⚡</span> Quickstart Workflow
                </h3>

                <div className="space-y-6">
                    {/* Step 1 */}
                    <div className="flex gap-4">
                        <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-zinc-800 text-zinc-300 font-medium text-sm">
                            1
                        </div>
                        <div className="flex-grow pt-1">
                            <h4 className="text-zinc-200 font-medium mb-2">Install the CLI</h4>

                            <div className="mt-0 w-full flex justify-center">
                        <div className="gap-4 bg-zinc-950 opacity-90 backdrop-blur-sm border border-slate-800 rounded-xl px-4 py-2 flex items-center justify-between">

                            {/* command text */}
                            <code className="text-sm text-green-300">
                                {command}
                            </code>

                            {/* copy button */}
                            <button
                                onClick={handleCopy}
                                className="text-xs text-slate-400 hover:text-white transition"
                            >
                                {copied ? "Copied!" : "Copy"}
                            </button>

                        </div>
                    </div>

                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="flex gap-4">
                        <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-zinc-800 text-zinc-300 font-medium text-sm">
                            2
                        </div>
                        <div className="flex-grow pt-1">
                            <h4 className="text-zinc-200 font-medium mb-2">Initialize your vault</h4>
                            <p className="text-sm text-zinc-500 mb-2">Set up your master password to secure your local environment.</p>
                            <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-3 font-mono text-sm text-zinc-300">
                                <span className="text-emerald-400">vault</span> init
                            </div>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="flex gap-4">
                        <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-zinc-800 text-zinc-300 font-medium text-sm">
                            3
                        </div>
                        <div className="flex-grow pt-1">
                            <h4 className="text-zinc-200 font-medium mb-2">Store and retrieve secrets</h4>
                            <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-3 font-mono text-sm text-zinc-300 space-y-1.5">
                                <div><span className="text-zinc-500"># Add a new secret</span></div>
                                <div><span className="text-emerald-400">vaultcli</span> set STRIPE_KEY sk_test_123</div>
                                <div className="pt-2"><span className="text-zinc-500"># Retrieve it later</span></div>
                                <div><span className="text-emerald-400">vaultcli</span> get STRIPE_KEY</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}