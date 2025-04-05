import { Link } from "react-router-dom";
import { useAppKitAccount } from "@reown/appkit/react";
import { useGetSigner } from "utils/useGetSigner";
import { switchNetwork } from "appkit";
import { GLOBAL_CONFIG } from "core/configs";
import { getUSDC } from "core/token";
export default function Header() {
  const { address } = useAppKitAccount();
  const getSigner = useGetSigner();
  const reqUSDC = async () => {
    await switchNetwork(GLOBAL_CONFIG.chainId);
    const signer = await getSigner();
    await getUSDC(GLOBAL_CONFIG.chainId, signer);
  };

  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl px-6 mx-auto">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-gray-800">
              Logo
            </Link>
          </div>
          <div className="flex gap-6 items-center">
            <Link to="/" className="text-gray-800">
              Home
            </Link>
            <Link to="/profile" className="text-gray-800">
              Profile
            </Link>
            {address ? <appkit-account-button /> : <appkit-connect-button />}

            <button className="btn-secondary" onClick={reqUSDC}>
              Request USDC
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
