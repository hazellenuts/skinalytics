// components/organisms/Navbar.tsx
"use client";
import Link from "next/link";
import Button from "../atoms/Button";
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
    <nav className="bg-gray-100 text-gray-700 p-4">
      <div className="container mx-auto flex justify-between ">
        <Link href="/" className="text-4xl"><h1>Skinalytics</h1></Link>
        
        <div className="flex">
          <div>
            <Link href="/">About Us</Link>
            <Link href="/">Features</Link>
            <Link href="/">Reviews</Link>
          </div>
          <div>
            <Button onClick={loginClick}>Login</Button>
            <Button onClick={signupClick}>Sign Up</Button>
          </div>
        </div>
        
      </div>
    </nav>
  );
}
