export default function Security() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold mb-4 pb-2 border-b border-zinc-800">Security Architecture</h1>
        <p className="text-zinc-300">
          VaultCLI is designed with a defense-in-depth architecture aligned with modern security standards. 
          It combines end-to-end encryption, memory-hard key derivation, and a strict zero-knowledge model 
          to ensure that sensitive data remains inaccessible to any unauthorized party.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">End-to-End Encryption</h2>
        <p className="text-zinc-300 mb-4">
          All vault data is encrypted on the client before storage or transmission. At no point is plaintext data written to disk or exposed to backend systems.
        </p>
        <ul className="list-disc pl-6 space-y-3 text-zinc-300 mb-6">
          <li><strong>Confidentiality:</strong> Only the derived client-side key can decrypt stored data.</li>
          <li><strong>Integrity:</strong> Authenticated encryption ensures tampering is immediately detected.</li>
        </ul>
        <div className="bg-[#161b22] border border-zinc-800 p-4 rounded-md">
          <h3 className="font-semibold mb-2 text-zinc-200">Implementation Details</h3>
          <ul className="space-y-2 text-sm text-zinc-300">
            <li><strong>Encryption Scheme:</strong> Fernet (AES-128-CBC + SHA256 HMAC)</li>
            <li>
              <strong>Storage Format:</strong> <code className="bg-[#0d1117] border border-zinc-800 px-1 py-0.5 rounded font-mono">argon2$&lt;hex_salt&gt;$&lt;fernet_token&gt;</code>
            </li>
          </ul>
          <p className="text-sm mt-3 text-zinc-400">
            AES-128 provides strong security with improved performance efficiency. Combined with HMAC authentication, it ensures both confidentiality and integrity.
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Key Derivation & Salting</h2>
        <p className="text-zinc-300 mb-4">
          Encryption keys are derived from the master password using Argon2id. Each vault is secured with a unique random salt, ensuring resistance against precomputed and large-scale brute-force attacks.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-zinc-300 mb-4">
          <li><strong>Algorithm:</strong> Argon2id</li>
          <li><strong>Memory:</strong> 64 MiB</li>
          <li><strong>Iterations:</strong> 3</li>
          <li><strong>Parallelism:</strong> 4 Threads</li>
        </ul>
        <p className="text-zinc-300">
          The memory-hard design significantly increases the computational cost of password guessing, making GPU and ASIC attacks impractical at scale.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Session & Memory Safety</h2>
        <p className="text-zinc-300 mb-4">
          Sensitive cryptographic material is kept strictly in memory during active sessions. No encryption keys are written to disk in plaintext, minimizing exposure risk.
        </p>
        <h3 className="text-xl font-medium mb-2">Secure Session Caching</h3>
        <p className="text-zinc-300 mb-3">Optional caching improves usability while maintaining security boundaries.</p>
        <ul className="list-disc pl-6 space-y-2 text-zinc-300">
          <li>Encrypted using session-bound identifiers</li>
          <li>Automatically invalidated on logout</li>
          <li>Becomes unusable after session expiration</li>
        </ul>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Secure Migration & Zero-Knowledge Model</h2>
        <h3 className="text-xl font-medium mb-2">Secure Migration</h3>
        <p className="text-zinc-300 mb-3">Legacy encryption schemes are automatically upgraded to modern standards.</p>
        <ul className="list-disc pl-6 space-y-2 text-zinc-300 mb-6">
          <li>Detects outdated methods</li>
          <li>Decrypts data in memory</li>
          <li>Re-encrypts securely</li>
        </ul>
        <h3 className="text-xl font-medium mb-2">Zero-Knowledge Model</h3>
        <p className="text-zinc-300">
          VaultCLI operates under a strict zero-knowledge model. All encryption and decryption occur client-side, ensuring that no external system can access plaintext user data.
        </p>
      </div>
    </div>
  );
}