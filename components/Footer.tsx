import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 px-6">
      <div className="container mx-auto max-w-7xl flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <Image
            src="/logo.png"
            alt="DinoAtlas Logo"
            width={40}
            height={40}
            className="object-contain"
          />
          <span className="text-2xl font-bold">DinoAtlas</span>
        </Link>

        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="text-lg font-semibold hover:opacity-80 transition-opacity"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-lg font-semibold hover:opacity-80 transition-opacity"
          >
            About
          </Link>
          <Link
            href="/map"
            className="text-lg font-semibold hover:opacity-80 transition-opacity"
          >
            Map
          </Link>
        </div>
      </div>
    </footer>
  );
}
