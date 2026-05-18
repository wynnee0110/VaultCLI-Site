import { INSTALLATION_STYLES } from "../../../constants/installation";
import { ScreenshotCard } from "../Installation";

const { stepNumber: stepNumberClass } = INSTALLATION_STYLES;

function Windows() {
  return (
    <div className="mt-4 max-w-2xl">
      <h3 className="mb-8 text-lg font-medium text-white">
        VaultCLI is now available on Windows
      </h3>

      {/* STEP 1 */}
      <div className="flex items-start gap-4 mb-10">
        <div className={stepNumberClass}>1</div>

        <div className="flex-1">
          <div className="">
            <h1 className="text-md p-2">Open Powershell as Administrator</h1>
            <p className="p-2 mb-4 text-sm text-zinc-400 text-start">
              First open PowerShell as an Administrator
            </p>
          </div>

          <ScreenshotCard 
            screenshot="/windowsInstallation/Powershell.png"  
          />
        </div>
      </div>

      {/* STEP 2 */}
      <div className="flex items-start gap-4">
        <div className={stepNumberClass}>2</div>

        <div className="flex-1">
          <div>
          <h1 className="text-md p-2">Copy Official install script</h1>
          <p className="p-2 text-sm text-zinc-400">
            Copy and paste the following command into PowerShell:
          </p>
<div className="w-full p-4 bg-zinc-900 rounded-xl overflow-x-auto">
  <pre className="text-sm text-zinc-300">
    <code className="whitespace-pre-wrap break-all">
      irm https://raw.githubusercontent.com/wynnee0110/VaultCLI/main/install.ps1 | iex
    </code>
  </pre>
</div>
   
          </div>
        </div>
      </div>

      {/* STEP 3 */}
      <div className="flex items-start gap-4 mt-12">
        <div className={stepNumberClass}>3</div>

        <div className="flex-1">
          <div>
          <h1 className="text-md p-2">Configure VaultCLI</h1>
          <p className="p-2 text-sm text-zinc-400">
            in the terminal type the following command:
            <div className="w-full p-4 bg-zinc-900 rounded-xl overflow-x-auto">
  <pre className="text-sm text-zinc-300">
    <code className="whitespace-pre-wrap break-all">
      <span className="text-green-500">$ vault </span>init
    </code>
  </pre>
</div>
          </p>
          </div>
        </div>
      </div>



    </div>
  );
}

export default Windows;