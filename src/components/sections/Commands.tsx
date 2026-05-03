export default function Commands() {
    const commands = [
        {
            name: "init",
            description: "Initializes a new vault in the current environment and sets up your master password.",
            usage: "vault init",
            example: "$ vault init\n✔ Vault initialized",
        },
        {
            name: "login",
            description: "Authenticates your session to interact with the vault without re-entering your password for subsequent commands.",
            usage: "vault login",
            example: "$ vault login\n✔ Authenticated successfully",
        },
        {
            name: "put",
            description: "Stores a secret in the vault securely. The secret is encrypted using AES-256 before being saved.",
            usage: "vault put <key> <value>",
            example: "$ vault put apikey/secret_key ********\n✔ Stored secret at apikey/secret_key",
        },
        {
            name: "get",
            description: "Retrieves and decrypts a stored secret from the vault.",
            usage: "vault get <key>",
            example: "$ vault get apikey/secret_key\n••••••••••••••••",
        },
        {
            name: "list",
            description: "Lists all stored secrets in the current vault.",
            usage: "vault list",
            example: "$ vault list\napikey/secret_key\ndatabase/url\ngithub/token",
        },
        {
            name: "delete",
            description: "Deletes a stored secret permanently from the vault.",
            usage: "vault delete <key>",
            example: "$ vault delete apikey/secret_key\n✔ Deleted secret at apikey/secret_key",
        }
    ];

    return (
        <section id="commands" className="scroll-mt-32 mb-16 max-w-3xl">
            {/* Header Section */}
            <div className="mb-10">
                <h2 className="text-3xl font-semibold text-zinc-100 mb-4 tracking-tight">
                    Commands Reference
                </h2>
                <p className="text-zinc-400 text-lg leading-relaxed">
                    Explore the complete list of available CLI commands. VaultCLI is designed to be intuitive and fast, letting you manage your secrets seamlessly directly from the terminal.
                </p>
            </div>

            {/* Commands List */}
            <div className="space-y-6">
                {commands.map((cmd) => (
                    <div key={cmd.name} className="p-6 rounded-xl border border-zinc-800 bg-zinc-900/30 hover:bg-zinc-900/50 transition-colors">
                        <div className="flex items-center gap-3 mb-3">
                            <h3 className="text-xl font-mono font-semibold text-emerald-400">
                                vault {cmd.name}
                            </h3>
                        </div>
                        <p className="text-zinc-400 mb-5 leading-relaxed">
                            {cmd.description}
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <h4 className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-2">Usage</h4>
                                <code className="inline-block px-3 py-1.5 rounded-lg bg-zinc-950 border border-zinc-800 text-zinc-300 text-sm font-mono">
                                    {cmd.usage}
                                </code>
                            </div>

                            <div>
                                <h4 className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-2">Example</h4>
                                <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-3 font-mono text-sm text-zinc-300 whitespace-pre-line leading-relaxed">
                                    {cmd.example}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
