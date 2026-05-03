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
create table if not exists public.vaults (
  user_id text primary key,
  encrypted_vault text not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.vaults enable row level security;

create policy "Users can read their own vault"
  on public.vaults
  for select
  to authenticated
  using ((select auth.uid()::text) = user_id);

create policy "Users can insert their own vault"
  on public.vaults
  for insert
  to authenticated
  with check ((select auth.uid()::text) = user_id);

create policy "Users can update their own vault"
  on public.vaults
  for update
  to authenticated
  using ((select auth.uid()::text) = user_id)
  with check ((select auth.uid()::text) = user_id);


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
