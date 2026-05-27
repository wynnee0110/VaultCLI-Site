export default function Faq() {
    const faqData = [
        {
            question: "What is VaultCli?",
            answer: "VaultCli is a command-line interface for HashiCorp Vault that allows you to manage secrets, tokens, and other Vault resources from your terminal."
        },
        {
            question: "Is VaultCli open source?",
            answer: "Yes, VaultCli is open source and available on GitHub under the MIT license."
        },
        {
            question: "Can VaultCli be used with self-hosted Vault instances?",
            answer: "Yes, VaultCli can be used with both self-hosted and cloud-hosted Vault instances."
        },
        {
            question: "Does VaultCli support multiple authentication methods?",
            answer: "Yes, VaultCli supports multiple authentication methods including AppRole, Kubernetes, and Username/Password."
        },
        {
            question: "Can VaultCli be used with multiple Vault instances?",
            answer: "Yes, VaultCli can be used with multiple Vault instances."
        }
    ];

    return (
        <div className="space-y-10">
            <div>
                <h1 className="text-3xl font-bold mb-4 pb-2 border-b border-zinc-800">Frequently Asked Questions</h1>
            </div>

            <div className="space-y-8">
                {faqData.map((faq, index) => (
                    <div key={index}>
                        <h2 className="text-xl font-semibold mb-2">{faq.question}</h2>
                        <p className="text-zinc-300">{faq.answer}</p>
                    </div>
                ))}
            </div>

            <div className="pt-8 border-t border-zinc-800">
                <h2 className="text-2xl font-bold mb-4">What’s next? Building your app with VaultCLI</h2>
                <p className="text-zinc-300 mb-4">
                    Now that you’ve set up VaultCLI, the next step is integrating it into your application. If you’re unfamiliar with the technologies used in this project, check their official documentation below.
                </p>
                <p className="text-zinc-300 mb-4">
                    If you get stuck or need help, you can join our community Discord and ask questions — we’re happy to help you get started.
                </p>

                <ul className="list-disc pl-6 space-y-2 text-blue-400">
                    <li><a href="#" className="hover:underline">PostgreSQL — relational database for structured data</a></li>
                    <li><a href="#" className="hover:underline">Supabase — backend-as-a-service with auth and database tools</a></li>
                    <li><a href="#" className="hover:underline">MySQL — widely used relational database system</a></li>
                    <li><a href="#" className="hover:underline">MongoDB — NoSQL database for flexible, document-based storage</a></li>
                </ul>
            </div>

            <div className="pt-8 border-t border-zinc-800">
                <h2 className="text-2xl font-bold mb-4">How do I keep my app up to date?</h2>
                <p className="text-zinc-300 mb-4">
                    To keep your app up to date with the latest version of VaultCLI, you can use the following command:
                </p>
                <pre className="bg-[#161b22] border border-zinc-800 p-3 rounded-md font-mono text-sm text-zinc-300">
                    $ vault update
                </pre>
            </div>

            <div className="pt-8 border-t border-zinc-800">
                <h2 className="text-2xl font-bold mb-4">How can I assure the security of my data?</h2>
                <p className="text-zinc-300 mb-4">
                    VaultCLI uses Argon2 for password hashing and AES-256 encryption to secure your data. Your secrets are encrypted using your master password before being stored in the vault.
                </p>
                <p className="text-zinc-300">
                    Furthermore, zero trust architecture ensures that your data is always secure meaning even if your database is compromised no data will ever be exposed.
                </p>
            </div>
        </div>
    );
}