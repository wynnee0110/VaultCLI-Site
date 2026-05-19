import React from 'react';

export default function Security() {
  return (
    <section id="security" className="scroll-mt-32 mb-16 max-w-3xl">
      {/* Header Section */}
      <div className="mb-10">
        <h2 className="text-start text-3xl font-semibold text-zinc-100 mb-4 tracking-tight">
          Security Architecture
        </h2>
        <p className="text-start text-zinc-400 text-lg leading-relaxed">
          VaultCLI is designed with a defense-in-depth architecture aligned with modern security standards. 
          It combines end-to-end encryption, memory-hard key derivation, and a strict zero-knowledge model 
          to ensure that sensitive data remains inaccessible to any unauthorized party.
        </p>
      </div>

      <div className="space-y-12">
        {/* End-to-End Encryption */}
        <div>
          <h3 className="text-xl font-medium text-zinc-100 mb-4 flex items-center gap-2">
            <span>🔒</span> End-to-End Encryption
          </h3>
          <p className="text-sm text-zinc-400 leading-relaxed mb-6">
            All vault data is encrypted on the client before storage or transmission. 
            At no point is plaintext data written to disk or exposed to backend systems.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <div className="p-5 rounded-xl border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900 transition-colors">
              <h4 className="text-zinc-200 font-medium mb-2">Confidentiality</h4>
              <p className="text-sm text-zinc-500 leading-relaxed">Only the derived client-side key can decrypt stored data.</p>
            </div>
            <div className="p-5 rounded-xl border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900 transition-colors">
              <h4 className="text-zinc-200 font-medium mb-2">Integrity</h4>
              <p className="text-sm text-zinc-500 leading-relaxed">Authenticated encryption ensures tampering is immediately detected.</p>
            </div>
          </div>

          <div className="p-6 rounded-xl border border-zinc-800 bg-zinc-900/80">
            <h4 className="text-xs uppercase tracking-widest text-zinc-500 mb-5">Implementation Details</h4>
            <div className="space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-5 border-b border-zinc-800">
                <span className="text-sm text-zinc-400">Encryption Scheme</span>
                <span className="text-sm text-zinc-200 font-medium">Fernet (AES-128-CBC + SHA256 HMAC)</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-5 border-b border-zinc-800">
                <span className="text-sm text-zinc-400">Storage Format</span>
                <code className="text-xs text-zinc-300 bg-zinc-950 px-3 py-1.5 border border-zinc-800 rounded-md font-mono">
                  argon2$&lt;hex_salt&gt;$&lt;fernet_token&gt;
                </code>
              </div>
              <p className="text-xs text-zinc-500 leading-relaxed pt-1">
                AES-128 provides strong security with improved performance efficiency. 
                Combined with HMAC authentication, it ensures both confidentiality and integrity.
              </p>
            </div>
          </div>
        </div>

        {/* Key Derivation */}
        <div>
          <h3 className="text-xl font-medium text-zinc-100 mb-4 flex items-center gap-2">
            <span>🔑</span> Key Derivation & Salting
          </h3>
          <p className="text-sm text-zinc-400 leading-relaxed mb-6">
            Encryption keys are derived from the master password using Argon2id. 
            Each vault is secured with a unique random salt, ensuring resistance 
            against precomputed and large-scale brute-force attacks.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-5">
            {[
              { label: 'Algorithm', value: 'Argon2id' },
              { label: 'Memory', value: '64 MiB' },
              { label: 'Iterations', value: '3' },
              { label: 'Parallelism', value: '4 Threads' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-zinc-900/50 border border-zinc-800 p-5 rounded-xl text-center hover:bg-zinc-900 transition-colors"
              >
                <span className="text-xs text-zinc-500 block mb-2 font-medium uppercase tracking-wider">
                  {stat.label}
                </span>
                <span className="text-lg text-zinc-200 font-semibold">
                  {stat.value}
                </span>
              </div>
            ))}
          </div>

          <p className="text-sm text-zinc-500 leading-relaxed bg-zinc-900/30 p-4 rounded-xl border border-zinc-800/50">
            The memory-hard design significantly increases the computational cost 
            of password guessing, making GPU and ASIC attacks impractical at scale.
          </p>
        </div>

        {/* Session Safety */}
        <div>
          <h3 className="text-xl font-medium text-zinc-100 mb-4 flex items-center gap-2">
            <span>🛡️</span> Session & Memory Safety
          </h3>
          <p className="text-sm text-zinc-400 leading-relaxed mb-6">
            Sensitive cryptographic material is kept strictly in memory during 
            active sessions. No encryption keys are written to disk in plaintext, 
            minimizing exposure risk.
          </p>

          <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-xl hover:bg-zinc-900 transition-colors">
            <h4 className="text-base font-medium text-zinc-200 mb-3">
              Secure Session Caching
            </h4>
            <p className="text-sm text-zinc-400 mb-5 leading-relaxed">
              Optional caching improves usability while maintaining security boundaries.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                <span className="text-sm text-zinc-400">Encrypted using session-bound identifiers</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                <span className="text-sm text-zinc-400">Automatically invalidated on logout</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                <span className="text-sm text-zinc-400">Becomes unusable after session expiration</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Additional Features */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="border border-zinc-800 p-6 rounded-xl bg-zinc-900/50 hover:bg-zinc-900 transition-colors flex flex-col">
            <h4 className="text-lg font-medium text-zinc-200 mb-3 flex items-center gap-2">
              <span>🔄</span> Secure Migration
            </h4>
            <p className="text-sm text-zinc-400 mb-5 leading-relaxed flex-grow">
              Legacy encryption schemes are automatically upgraded to modern standards.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                <span className="text-sm text-zinc-400">Detects outdated methods</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                <span className="text-sm text-zinc-400">Decrypts data in memory</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                <span className="text-sm text-zinc-400">Re-encrypts securely</span>
              </li>
            </ul>
          </div>

          <div className="border border-zinc-800 p-6 rounded-xl bg-zinc-900/50 hover:bg-zinc-900 transition-colors flex flex-col">
            <h4 className="text-lg font-medium text-zinc-200 mb-3 flex items-center gap-2">
              <span>👁️‍🗨️</span> Zero-Knowledge Model
            </h4>
            <p className="text-sm leading-relaxed text-zinc-400 flex-grow">
              VaultCLI operates under a strict zero-knowledge model. 
              All encryption and decryption occur client-side, ensuring that 
              no external system can access plaintext user data.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}