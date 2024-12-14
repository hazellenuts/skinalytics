// app/page.tsx (Landing Page)
import Link from "next/link";
import Navbar from "@/components/organisms/Navbar";

export default function LandingPage() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold">Welcome to Our App</h1>
        <p>Explore our features</p>
        <div className="mt-4">
          <Link href="/login" className="text-blue-500">Login</Link> | 
          <Link href="/signup" className="text-blue-500">Sign Up</Link>
        </div>
      </div>
    </div>
  );
}
