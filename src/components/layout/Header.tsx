import { Link } from "react-router-dom";
import { useAppKitAccount } from "@reown/appkit/react";
export default function Header() {
  const { address } = useAppKitAccount();
  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-gray-800">
              Logo
            </Link>
          </div>

          <div className="flex gap-6">
            {address ? <appkit-account-button /> : <appkit-connect-button />}
          </div>
        </div>
      </nav>
    </header>
  );
}
