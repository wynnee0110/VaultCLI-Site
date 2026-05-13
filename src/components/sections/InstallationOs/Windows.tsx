import { INSTALLATION_STYLES } from "../../../constants/installation";
import { ScreenshotCard } from "../Installation";

const { stepNumber: stepNumberClass } = INSTALLATION_STYLES;

function Windows() {
  return (
    <div className="mt-2">
      <h3 className="mb-8 text-left text-lg font-medium text-white">
        VaultCLI is now available on Windows
      </h3>
      
      <div className="mt-8 space-y-2">
        <div className="flex gap-1">
          <div className={stepNumberClass}>
            1
          </div>

        </div>
        <div className="w-full flex-1">
          <p className="mt-0 mb-4 text-sm leading-relaxed text-zinc-400">
            First open PowerShell as an Administrator
          </p>
          <ScreenshotCard 
          screenshot="/windowsInstallation/Powershell.png"

          
          />
        </div>

      </div>

      <div className="mt-8 space-y-2">
        <div className="flex gap-1">
          <div className={stepNumberClass}>
            2
          </div>

        </div>
        <div className="w-full flex-1">
          <p className="text-left mt-0 text-sm leading-relaxed text-zinc-400">
            Download official install script
          </p>
        </div>
      </div>
    </div>
  );
}

export default Windows;