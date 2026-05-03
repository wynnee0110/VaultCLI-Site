import DocSection from '../../components/DocSection';

export default function GettingStarted() {
  return (
    <DocSection id="getting-started" title="Getting Started">
      <p className="text-zinc-400 leading-7">
        VaultCLI uses AES-256-GCM encryption to ensure your data stays private.
        To begin, ensure you have a stable internet connection.
      </p>
    </DocSection>
  );
}