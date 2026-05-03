export type OperatingSystem = "linux" | "windows" | "mac";

export type DatabaseProviderId =
  | "supabase"
  | "neon"
  | "postgres"
  | "mysql"
  | "sqlite"
  | "mongodb";

export type Step = {
  title: string;
  description?: string;
  command?: string;
  note?: string;
};

export type DatabaseProvider = {
  id: DatabaseProviderId;
  label: string;
  screenshot?: string;
  screenshot2?: string;
  isAvailable: boolean;
};

export const OPERATING_SYSTEMS: OperatingSystem[] = ["linux", "windows", "mac"];

export const INSTALLATION_STEPS: Step[] = [
  {
    title: "Install VaultCLI",
    description: "Download and install the CLI using the official install script.",
    command: "curl -fsSL https://raw.githubusercontent.com/wynnee0110/VaultCLI/main/install.sh | bash",
  },
  {
    title: "Configure your vault",
    description: "Select your preferred database provider and initialize your setup.",
  },
  {
    title: "Create your account",
    description: "Register a new account used to authenticate with your backend.",
    command: "vault sign-up",
  },
  {
    title: "Login to your account",
    description: "Authenticate with your newly created account.",
    command: "vault login",
  },
  {
    title: "Set up your master key",
    description: "This key encrypts all your data. It is never stored remotely.",
    note: "⚠️ If you lose this key, your data cannot be recovered.",
  },
];

export const DB_PROVIDERS: DatabaseProvider[] = [
  {
    id: "supabase",
    label: "Supabase",
    screenshot: "/supabase/url.png",
    screenshot2: "/supabase/anon.png",
    isAvailable: true,
  },
  {
    id: "neon",
    label: "Neon",
    screenshot: "/neon/url.png",
    isAvailable: false,
  },
  {
    id: "postgres",
    label: "PostgreSQL",
    screenshot: "/postgres/url.png",
    isAvailable: false,
  },
  {
    id: "mysql",
    label: "MySQL",
    screenshot: "/mysql/url.png",
    isAvailable: false,
  },
  {
    id: "sqlite",
    label: "SQLite",
    screenshot: "/sqlite/url.png",
    isAvailable: false,
  },
  {
    id: "mongodb",
    label: "MongoDB",
    screenshot: "/mongodb/url.png",
    isAvailable: false,
  },
];

export const SQL_COMMANDS: Partial<Record<DatabaseProviderId, string>> = {
  supabase: `
**SQL Commands for Supabase**

CREATE TABLE IF NOT EXISTS credentials (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  service_name VARCHAR(100) NOT NULL,
  username TEXT NOT NULL,
  password TEXT NOT NULL,
  url VARCHAR(500) NOT NULL,
  description TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  last_used_at TIMESTAMP,
  is_deleted BOOLEAN DEFAULT FALSE
);

CREATE INDEX idx_service_name ON credentials(service_name);
CREATE INDEX idx_last_used ON credentials(last_used_at) WHERE last_used_at IS NOT NULL;
`,
};

export const DB_EXAMPLES: Partial<Record<DatabaseProviderId, string>> = {
  supabase: `vault init 

Database provider: Supabase

Enter project URL: https://your-project.supabase.co
Enter anon key: ********

✔ Configuration saved`,
};

export const DB_NOTES: Partial<Record<DatabaseProviderId, string>> = {
  supabase: "Only the project URL and anon key are needed. No extra setup required.",
};

export const DB_DOCS_LINK: Partial<Record<DatabaseProviderId, string>> = {
  supabase: "https://supabase.com/docs",
};

export const DB_SCREENSHOT1_INFO: Partial<Record<DatabaseProviderId, string[]>> = {
  supabase: ["Copy your Project URL"],
};

export const DB_SCREENSHOT2_INFO: Partial<Record<DatabaseProviderId, string[]>> = {
  supabase: ["Copy your Anon Key"],
};

export const INSTALLATION_STYLES = {
  pillButton: "flex items-center gap-2 rounded-lg border px-3 py-2 text-xs transition",
  surface: "rounded-xl border border-zinc-800 bg-zinc-900/50",
  block: "rounded-xl border border-zinc-800 bg-zinc-950/70",
} as const;
