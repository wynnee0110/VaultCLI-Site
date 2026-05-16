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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Windows;