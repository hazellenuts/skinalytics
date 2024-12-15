// components/organisms/Navbar.tsx
"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();

  const loginClick = () => {
    router.push("/login");
  };
  const signupClick = () => {
    router.push("/signup");
  };
  return (
    <nav className="bg-white text-gray-700 p-4 sticky z-10 top-0">
      <div className="container mx-auto flex justify-between items-center ">
        <Link href="/" className="text-5xl"><h1>Skinalytics</h1></Link>
        <div className="gap-10 items-center flex">
          <Link href="/">About Us</Link>
          <Link href="/">Features</Link>
          <Link href="/">Reviews</Link>
        </div>
        <div className="flex gap-2">
          <button onClick={loginClick} className="bg-blue-500 text-white py-2 px-4 rounded-3xl hover:bg-blue-600 sm:py-2 sm:px-3 lg:py-3 lg:px-6">
                Login
          </button>
          <button onClick={signupClick} className="bg-blue-500 text-white py-2 px-4 rounded-3xl hover:bg-blue-600 sm:py-2 sm:px-3 lg:py-3 lg:px-6">
                Signup
          </button>
        </div>
        
      </div>
    </nav>
  );
}
