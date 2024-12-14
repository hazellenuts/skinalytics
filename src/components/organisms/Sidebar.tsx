// components/organisms/Sidebar.tsx
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="w-64 bg-gray-800 text-white p-0 fixed h-screen top-0 left-0 flex flex-col justify-between">
      <ul>
        <h1 className="text-4xl mb-4 p-4">skinalytics</h1>
        <li>
          <Link href="/dashboard" className="block py-2 hover:bg-gray-700 px-4">
            Dashboard
          </Link>
        </li>
        <li>
          <Link href="/baumann-skin-types" className="block py-2 px-4 hover:bg-gray-700">
            Baumann Skin Types
          </Link>
        </li>
        <li>
          <Link href="/skincare-product-analyzer" className="block py-2 px-4 hover:bg-gray-700">
            Skincare Product Analyzer
          </Link>
        </li>
      </ul>
      
      <ul>
        <li>
          <Link href="/profile" className="block py-2 px-4 hover:bg-gray-700">
            Your Profile
          </Link>
        </li>
        <li>
          <Link href="/" className="block py-2 px-4 hover:bg-gray-700">
            Logout
          </Link>
        </li>
      </ul>
    </div>
  );
}
