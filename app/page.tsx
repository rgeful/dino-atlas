import Link from 'next/link';
import Image from 'next/image';

export default function LandingPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white p-6 pt-24">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <div className="space-y-8 text-center lg:text-left">
            <h1 className="text-5xl font-extrabold text-gray-900 tracking-tight sm:text-6xl">
              Interactive map of dinosaur locations
            </h1>
            <p className="text-xl text-gray-600">
              Explore the ancient world with our Dino Atlas. Discover where dinosaurs roamed, 
              learn fascinating facts, all on an interactive map.
            </p>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-4">
              <Link
                href="/map"
                className="rounded-lg bg-green-600 px-8 py-4 text-lg font-bold text-white shadow-lg transition-all hover:bg-green-700 hover:scale-105 active:scale-95"
              >
                View Map
              </Link>

              <button className="rounded-lg border border-gray-300 px-8 py-4 text-lg font-semibold text-gray-700 hover:bg-gray-50">
                Learn More
              </button>
            </div>
          </div>

          <div className="relative w-full h-100 lg:h-150">
            <Image
              src="/hero4.jpg"
              alt="Dino hero image"
              fill
              className="object-cover rounded-lg shadow-2xl"
              priority
            />
          </div>
        </div>
      </div>
    </main>
  );
}