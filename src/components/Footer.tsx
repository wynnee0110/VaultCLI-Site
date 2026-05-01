export default function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-800 py-6 text-center text-sm text-slate-500">
      <p>© {new Date().getFullYear()} Vault CLI. All rights reserved.</p>
    </footer>
  );
}