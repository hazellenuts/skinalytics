// app/page.tsx (Landing Page)
import Link from "next/link";
import Navbar from "@/components/organisms/Navbar";

export default function LandingPage() {
  return (
    <div>
      <Navbar />
      {/* Hero Section Container with Margin */}
      <div className="mx-6">
        <div
          className="relative h-[calc(100vh*7.8/9)] w-full bg-cover bg-center flex flex-col justify-center items-start text-white rounded-3xl"
          style={{
            backgroundImage: "url('/images/bg-woman.jpg')",
          }}
        >
          <div className="p-8">
            <h3 className="text-4xl font-bold mb-4 sm:text-3xl lg:text-5xl font-poppins">
              Your skin’s best, <br />
              thoughtful choice.
            </h3>
            <p className="mb-6 text-sm sm:text-base lg:text-lg">
              Explore our features and redefine your skin care journey.
            </p>
            <Link href="/features">
              <button className="outline font-bold text-white py-2 px-4 rounded-3xl hover:bg-blue-600 sm:py-2 sm:px-3 lg:py-3 lg:px-6">
                Explore Now
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <div className="mx-40 flex items-center gap-10">
        <img src="/images/product.png" alt="" className="h-[calc(100vh*7.1/14)] w-auto" />
        <div>
          <h2 className="mb-4 text-center">About Us</h2>
          <p className="text-gray-700 text-center">
          At Skinalytics, we believe that healthy, glowing skin starts with making the right choices. We’re here to help you navigate the world of skincare with ease, offering personalized insights based on your unique skin type. 
          </p>
        </div>
      </div>

      {/* Quotes Section */}
      <div className="mx-6 px-40 py-10 items-center gap-10 outline rounded-3xl">
          <h2 className="text-center">“Because healthy skin starts with knowing what’s best for you”</h2>
          <p className="text-gray-700 text-center">
          —skinalytics 
          </p>
      </div>

      {/* features Section */}
      <div className="mx-6 px-40 py-20 items-center">
          <h2 className="text-center">Our Features</h2>
          <ul className="flex items-center justify-center gap-10">
            <div className="container bg-gray-200 text-center p-4">feature 1</div>
            <div className="container bg-gray-200 text-center p-4">feature 2</div>
            <div className="container bg-gray-200 text-center p-4">feature 3</div>
          </ul>
          <p className="text-gray-700 text-center">
          —skinalytics 
          </p>
      </div>
    </div>


  );
}
