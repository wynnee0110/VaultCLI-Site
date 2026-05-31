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
            name: "signup",
            description: "Creates a new account with a master password.",
            usage: "vault signup [password]",
            example: "$ vault signup ********\n✔ Account created"
        },
        {
            name: "logout",
            description: "Logs you out of your session.",
            usage: "vault logout",
            example: "$ vault logout\n✔ Logged out successfully",
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
            description: "Show the list of stored secrets in the current vault.",
            usage: "vault list",
            example: "$ vault list\napikey/secret_key\ndatabase/url\ngithub/token",
        },
        {
            name: "update", 
            description: "Updates an existing secret in the vault.",
            usage: "vault update <key> <value>",
            example: "$ vault update apikey/secret_key ********\n✔ Updated secret at apikey/secret_key"
        }
    ];

    return (
        <div className="space-y-10">
            <div>
                <h1 className="text-3xl font-bold mb-4 pb-2 border-b border-zinc-800">Commands Reference</h1>
                <p className="text-zinc-300">
                    Explore the complete list of available CLI commands. VaultCLI is designed to be intuitive and fast, letting you manage your secrets seamlessly directly from the terminal.
                </p>
            </div>

            <div className="space-y-10">
                {commands.map((cmd) => (
                    <div key={cmd.name}>
                        <h2 className="text-xl font-semibold mb-2 font-mono">
                            vault {cmd.name}
                        </h2>
                        <p className="text-zinc-300 mb-4">{cmd.description}</p>
                        <div className="mb-2">
                            <strong>Usage:</strong> <code className="bg-[#161b22] px-1 py-0.5 rounded text-sm font-mono ml-2 border border-zinc-800">{cmd.usage}</code>
                        </div>
                        <div>
                            <strong>Example:</strong>
                            <pre className="bg-[#161b22] border border-zinc-800 p-3 rounded-md font-mono text-sm text-zinc-300 mt-2 whitespace-pre-line">
                                {cmd.example}
                            </pre>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
