import { useState } from "react";
import {
  DB_DOCS_LINK,
  DB_EXAMPLES,
  DB_NOTES,
  DB_PROVIDERS,
  DB_SCREENSHOT1_INFO,
  DB_SCREENSHOT2_INFO,
  INSTALLATION_STYLES,
  SQL_COMMANDS,
  type DatabaseProvider,
  type DatabaseProviderId,
} from "../../../constants/installation";
import { ScreenshotCard } from "../Installation";

const {
  stepNumber: stepNumberClass,
  pillButton: pillButtonClass,
  surface: surfaceClass,
  block: blockClass,
} = INSTALLATION_STYLES;

// ── Icons ────────────────────────────────────────────────────────────────────

const DbIcon = ({ db }: { db: DatabaseProviderId }) => {
  if (db === "supabase") {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="#3ECF8E">
        <path d="M11.9 1.036c-.015-.986-1.26-1.41-1.874-.637L.764 12.05C.111 12.914.782 14.13 1.88 14.13h7.6l.12 8.836c.015.986 1.26 1.409 1.875.636l9.262-11.653c.653-.865-.019-2.08-1.118-2.08h-7.6L11.9 1.036z" />
      </svg>
    );
  }
  if (db === "neon") {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4">
        <path fill="#00E599" d="M0 4a4 4 0 014-4h16a4 4 0 014 4v16a4 4 0 01-4 4H4a4 4 0 01-4-4V4z" />
        <path fill="#000000" d="M6 6h5.5a4.5 4.5 0 010 9H10v3l-4-4.5V6z" />
        <path fill="#FFFFFF" d="M10 10h1.5a1 1 0 010 2H10v-2z" />
      </svg>
    );
  }
  if (db === "postgres") {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="#336791">
        <path d="M17.128 0a10.134 10.134 0 00-2.755.403l-.063.02A10.922 10.922 0 0012.6.258C11.422.238 10.41.524 9.594 1 8.79.721 7.122.24 5.364.336 4.24.395 3.023.74 2.117 1.707 1.099 2.79.512 4.45.609 6.735c.03.7.195 1.592.468 2.436.273.844.673 1.7 1.216 2.292.2.214.392.36.574.468-.013.11-.024.215-.038.316-.05.357-.077.712-.08 1.067a7.09 7.09 0 00.045.902c.013.108.021.169.037.285l.006.036c.225 1.613.612 2.854 1.245 3.842.591.918 1.379 1.592 2.343 2.032.743.342 1.575.474 2.424.474.57 0 1.143-.065 1.694-.155.273.07.556.125.827.17.338.055.69.087 1.05.085 1.259-.008 2.46-.37 3.315-1.063.753-.607 1.245-1.45 1.327-2.525.034-.43.022-.85-.027-1.256.117-.071.239-.158.361-.267.639-.57 1.057-1.38 1.255-2.2.207-.858.207-1.756.119-2.572.214.064.428.1.638.1 1.116 0 2.072-.58 2.774-1.52.66-.88 1.072-2.072 1.166-3.363.097-1.32-.13-2.604-.97-3.474C20.56.44 19.082.003 17.518 0z" />
      </svg>
    );
  }
  if (db === "mysql") {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="#E48E00">
        <path d="M16.405 5.501c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.18.214.274.054.107.1.214.154.32l.014-.015c.094-.066.14-.172.14-.333-.04-.047-.046-.094-.068-.133-.040-.108-.12-.168-.194-.16zM5.77 18.695h-.927a50.854 50.854 0 00-.27-4.41h-.008l-1.41 4.41H2.45l-1.4-4.41h-.01a72.892 72.892 0 00-.195 4.41H0c.055-1.966.192-3.81.41-5.53h1.15l1.335 4.064h.008l1.347-4.064h1.095c.242 2.015.384 3.86.428 5.53zm4.017-2.3c0 .476-.156.812-.47 1.005-.31.19-.78.285-1.41.285-.28 0-.528-.024-.742-.072v-3.58c.275-.064.538-.095.793-.095.595 0 1.03.094 1.3.28.27.187.53.487.53.858v1.32zm.06 2.314c.76-.183 1.354-.535 1.782-1.056.43-.52.643-1.205.643-2.053 0-.744-.205-1.365-.614-1.863-.41-.498-1.035-.74-1.876-.74-.42 0-.83.05-1.226.152v5.71c.28-.04.56-.07.84-.08.154-.005.308-.007.45-.07zm4.89-3.337c-.06-.148-.142-.282-.245-.4a1.19 1.19 0 00-.388-.278 1.3 1.3 0 00-.517-.1c-.19 0-.37.033-.54.1a1.28 1.28 0 00-.433.285 1.34 1.34 0 00-.29.453c-.07.178-.104.374-.104.59 0 .21.034.404.1.58.068.175.16.326.277.45.118.126.256.224.413.294.158.07.33.104.514.104.185 0 .357-.034.517-.1.16-.068.297-.165.413-.29.116-.125.207-.277.273-.453.067-.175.1-.37.1-.585 0-.22-.033-.42-.1-.65zm.86 1.7c-.12.31-.29.576-.507.8-.217.222-.48.396-.784.52-.305.125-.645.188-1.02.188-.375 0-.713-.063-1.014-.188-.3-.124-.56-.298-.78-.52-.218-.222-.387-.49-.507-.8-.12-.31-.18-.65-.18-1.022 0-.37.06-.712.18-1.024.12-.313.29-.58.507-.803.22-.222.48-.396.78-.52.3-.124.64-.187 1.015-.187.375 0 .715.063 1.02.188.305.124.567.298.784.52.217.222.387.49.507.803.12.312.18.654.18 1.024 0 .372-.06.712-.18 1.022zm3.23-1.79c-.064-.16-.155-.3-.272-.417a1.236 1.236 0 00-.42-.274 1.46 1.46 0 00-.543-.098c-.2 0-.386.033-.557.098a1.29 1.29 0 00-.44.278 1.3 1.3 0 00-.29.43c-.07.168-.104.356-.104.565v.02c0 .21.034.4.1.57.067.172.16.32.277.444.118.124.257.22.417.29.16.07.334.104.523.104.188 0 .362-.034.523-.1.16-.067.3-.163.417-.288.117-.124.21-.275.277-.45.067-.177.1-.373.1-.59v-.018c0-.21-.034-.402-.1-.57zM24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12z" />
      </svg>
    );
  }
  if (db === "sqlite") {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="#003B57">
        <path d="M21.678.521C20.381-.296 18.256 0 17.773.881L8.408 14.904a12.42 12.42 0 012.89 2.087 12.49 12.49 0 012.568 3.167l7.06-14.675c.702-1.116.454-2.592-.248-3.795zM11.57 17.7a10.71 10.71 0 00-2.421-2.443C7.37 13.64 5.182 13.07 3.733 13.94c-1.45.87-1.744 3.143-.666 5.07 1.079 1.928 3.1 2.85 4.55 1.979a2.64 2.64 0 00.72-.675c.335.638.795 1.148 1.37 1.417 1.496.7 3.319-.284 4.08-2.188a5.39 5.39 0 00.378-1.606 6.387 6.387 0 01-2.594-.237z" />
      </svg>
    );
  }
  if (db === "mongodb") {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="#47A248">
        <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5v14c0 1.657 4.03 3 9 3s9-1.343 9-3V5" />
      <path d="M3 12c0 1.657 4.03 3 9 3s9-1.343 9-3" />
    </svg>
  );
};

// ── Sub-components ────────────────────────────────────────────────────────────

function SectionShell({ children }: { children: React.ReactNode }) {
  return <div className={`${surfaceClass} p-5 sm:p-6`}>{children}</div>;
}

function CopyableCodeBlock({
  label,
  value,
  copyKey,
  copiedKey,
  onCopy,
  terminal,
}: {
  label: string;
  value: string;
  copyKey: string;
  copiedKey: string | null;
  onCopy: (value: string, key: string) => void;
  terminal?: boolean;
}) {
  return (
    <div className={blockClass}>
      <div className="flex items-center justify-between gap-3 border-b border-zinc-800 bg-zinc-900/80 px-3 py-2">
        {terminal ? (
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-500" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
            <span className="ml-2 font-mono text-xs text-zinc-500">{label}</span>
          </div>
        ) : (
          <span className="font-mono text-xs text-zinc-500">{label}</span>
        )}
        <button
          onClick={() => onCopy(value, copyKey)}
          className="shrink-0 text-xs text-zinc-400 transition hover:text-white"
        >
          {copiedKey === copyKey ? "Copied!" : "Copy"}
        </button>
      </div>
      <pre className="overflow-x-auto whitespace-pre-wrap px-4 py-3 text-left font-mono text-sm text-zinc-300">
        {terminal ? (
          <>
            <span className="text-green-400">$ </span>
            {value}
          </>
        ) : (
          value
        )}
      </pre>
    </div>
  );
}

function DbComingSoon({ provider }: { provider?: DatabaseProvider }) {
  return (
    <div className={`${surfaceClass} flex flex-col items-center justify-center p-6 text-center`}>
      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900 text-zinc-400">
        {provider && <DbIcon db={provider.id} />}
      </div>
      <h4 className="mb-1 text-sm font-medium text-zinc-200">{provider?.label} Integration</h4>
      <p className="text-sm text-zinc-500">
        We&apos;re actively working on adding support for {provider?.label}. Check back soon!
      </p>
    </div>
  );
}

// ── Main component ────────────────────────────────────────────────────────────

function Windows() {
  const [activeDb, setActiveDb] = useState<DatabaseProviderId>("supabase");
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const activeDbInfo = DB_PROVIDERS.find((db) => db.id === activeDb);
  const isDbComingSoon = !activeDbInfo?.isAvailable;
  const activeDbDocsLink = DB_DOCS_LINK[activeDb] ?? "";
  const activeDbScreenshot1Info = DB_SCREENSHOT1_INFO[activeDb];
  const activeDbScreenshot2Info = DB_SCREENSHOT2_INFO[activeDb];
  const activeDbSqlCommand = SQL_COMMANDS[activeDb] ?? "";
  const activeDbNote = DB_NOTES[activeDb] ?? "";
  const activeDbExample = DB_EXAMPLES[activeDb] ?? "";

  const handleCopy = async (value: string, key: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedKey(key);
      window.setTimeout(() => setCopiedKey(null), 2000);
    } catch (error) {
      console.error("Failed to copy:", error);
    }
  };

  return (
    <div className="mt-4 max-w-2xl">
      <h3 className="mb-8 text-lg font-medium text-white">
        VaultCLI is now available on Windows
      </h3>

      {/* STEP 1 */}
      <div className="flex gap-4">
        <div className={stepNumberClass}>1</div>

        <div className="w-full flex-1 space-y-3">
          <div>
            <h4 className="mb-1 text-white font-medium">Open Powershell as Administrator</h4>
            <p className="text-left text-sm leading-relaxed text-zinc-400">
              First open PowerShell as an Administrator
            </p>
          </div>

          <ScreenshotCard screenshot="/windowsInstallation/Powershell.png" />
        </div>
      </div>

      {/* STEP 2 */}
      <div className="flex gap-4 mt-6">
        <div className={stepNumberClass}>2</div>

        <div className="w-full flex-1 space-y-3">
          <div>
            <h4 className="mb-1 text-white font-medium">Install VaultCLI</h4>
            <p className="text-left text-sm leading-relaxed text-zinc-400">
              Copy and paste the following command into PowerShell:
            </p>
          </div>
          <div className={`${blockClass} flex flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between`}>
            <code className="break-all bg-transparent p-0 text-sm text-green-300">
              irm https://raw.githubusercontent.com/wynnee0110/VaultCLI/main/install.ps1 | iex
            </code>
            <button
              onClick={() => handleCopy("irm https://raw.githubusercontent.com/wynnee0110/VaultCLI/main/install.ps1 | iex", "win-install")}
              className="shrink-0 self-start text-xs text-zinc-400 transition hover:text-white sm:self-center"
            >
              {copiedKey === "win-install" ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>
      </div>

      {/* STEP 3 — Choose Your Database */}
      <div className="flex gap-4 mt-6">
        <div className={stepNumberClass}>3</div>

        <div className="w-full flex-1 space-y-3">
          <div>
            <h4 className="mb-1 text-white font-medium">Configure your vault</h4>
            <p className="text-left text-sm leading-relaxed text-zinc-400">
              Select your preferred database provider and initialize your setup.
            </p>
          </div>

          <div className="space-y-6 pt-1">
            {/* DB provider pills */}
            <div className="flex flex-wrap gap-2">
              {DB_PROVIDERS.map((db) => (
                <button
                  key={db.id}
                  onClick={() => setActiveDb(db.id)}
                  aria-pressed={activeDb === db.id}
                  className={`${pillButtonClass} ${
                    activeDb === db.id
                      ? "border-zinc-700 bg-zinc-800 text-white"
                      : "border-zinc-800 bg-zinc-900/50 text-zinc-500 hover:border-zinc-700 hover:text-white"
                  }`}
                >
                  <DbIcon db={db.id} />
                  {db.label}
                  {!db.isAvailable && (
                    <span className="rounded bg-zinc-700/50 px-1.5 py-0.5 text-[10px] text-zinc-400">
                      Soon
                    </span>
                  )}
                </button>
              ))}
            </div>

            {isDbComingSoon ? (
              <DbComingSoon provider={activeDbInfo} />
            ) : (
              <div className="mt-2 space-y-2">
                <p className="text-start text-sm text-zinc-400 mb-2">
                  Click to learn more about{" "}
                  <a
                    href={activeDbDocsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white underline"
                  >
                    {activeDbInfo?.label}
                  </a>
                </p>

                <p className="pt-6 pb-4 text-start text-sm text-zinc-400">
                  1. {activeDbScreenshot1Info}
                </p>
                <ScreenshotCard screenshot={activeDbInfo?.screenshot} />

                <p className="pt-6 pb-4 text-start text-sm text-zinc-400">
                  2. {activeDbScreenshot2Info}
                </p>
                <ScreenshotCard screenshot={activeDbInfo?.screenshot2} />

                <div>
                  <p className="pt-6 pb-4 text-start text-sm text-zinc-400">
                    3. Run this on SQL editor
                  </p>
                  <div className="mt-3 rounded-xl overflow-hidden border border-zinc-800 bg-zinc-950">
                    <CopyableCodeBlock
                      label="sql"
                      value={activeDbSqlCommand}
                      copyKey={`sql-${activeDb}-win`}
                      copiedKey={copiedKey}
                      onCopy={handleCopy}
                    />
                  </div>
                </div>

                <p className="pt-6 pb-4 text-left text-sm text-zinc-400">
                  4. Run this command on terminal
                </p>

                <SectionShell>
                  <p className="mb-4 text-left text-sm text-zinc-400">
                    Run the init command and paste your credentials when prompted.{" "}
                    {activeDbNote}
                  </p>
                  <CopyableCodeBlock
                    label="terminal"
                    value={activeDbExample}
                    copyKey={`db-example-${activeDb}-win`}
                    copiedKey={copiedKey}
                    onCopy={handleCopy}
                    terminal
                  />
                </SectionShell>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* STEP 4 — Create account */}
      <div className="flex gap-4 mt-6">
        <div className={stepNumberClass}>4</div>

        <div className="w-full flex-1 space-y-3">
          <div>
            <h4 className="mb-1 text-white font-medium">Create your account</h4>
            <p className="text-left text-sm leading-relaxed text-zinc-400">
              Register a new account used to authenticate with your backend.
            </p>
          </div>
          <div className={`${blockClass} flex flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between`}>
            <code className="break-all bg-transparent p-0 text-sm text-green-300">vault sign-up</code>
            <button
              onClick={() => handleCopy("vault sign-up", "win-signup")}
              className="shrink-0 self-start text-xs text-zinc-400 transition hover:text-white sm:self-center"
            >
              {copiedKey === "win-signup" ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>
      </div>

      {/* STEP 5 — Login */}
      <div className="flex gap-4 mt-6">
        <div className={stepNumberClass}>5</div>

        <div className="w-full flex-1 space-y-3">
          <div>
            <h4 className="mb-1 text-white font-medium">Login to your account</h4>
            <p className="text-left text-sm leading-relaxed text-zinc-400">
              Authenticate with your newly created account.
            </p>
          </div>
          <div className={`${blockClass} flex flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between`}>
            <code className="break-all bg-transparent p-0 text-sm text-green-300">vault login</code>
            <button
              onClick={() => handleCopy("vault login", "win-login")}
              className="shrink-0 self-start text-xs text-zinc-400 transition hover:text-white sm:self-center"
            >
              {copiedKey === "win-login" ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>
      </div>

      {/* STEP 6 — Master key */}
      <div className="flex gap-4 mt-6">
        <div className={stepNumberClass}>6</div>

        <div className="w-full flex-1 space-y-3">
          <div>
            <h4 className="mb-1 text-white font-medium">Set up your master key</h4>
            <p className="text-left text-sm leading-relaxed text-zinc-400">
              This key encrypts all your data. It is never stored remotely.
            </p>
          </div>
          <p className="text-left text-xs text-red-400">
            ⚠️ If you lose this key, your data cannot be recovered.
          </p>
        </div>
      </div>

      {/* Warning box */}
      <div className={`${surfaceClass} mt-10 p-5`}>
        <h4 className="mb-2 font-semibold text-white">Things you should know</h4>
        <ul className="list-disc space-y-2 pl-5 text-sm text-zinc-400">
          <li>AES-256-GCM encryption is used for all stored data.</li>
          <li>VaultCLI is fully self-hosted — you control your database.</li>
          <li>Never share your master key.</li>
          <li>
            You can reset your vault anytime using{" "}
            <code className="bg-transparent p-0 text-zinc-300">vault reset</code>.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Windows;