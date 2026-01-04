import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white z-50 px-6 py-4">
      <div className="container mx-auto max-w-7xl flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <Image
            src="/logo.png"
            alt="DinoAtlas Logo"
            width={40}
            height={40}
            className="object-contain"
          />
          <span className="text-2xl font-bold text-gray-900">DinoAtlas</span>
        </Link>

        <div className="flex items-center gap-8">
          <Link
            href="/map"
            className="text-lg font-semibold text-gray-700 hover:opacity-80 transition-colors"
          >
            Map
          </Link>
          <Link
            href="/learn-more"
            className="text-lg font-semibold text-gray-700 hover:opacity-80 transition-colors"
          >
            Learn More
          </Link>
        </div>
      </div>
    </nav>
  );
}