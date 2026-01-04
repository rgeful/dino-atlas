import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-8">
          <h1 className="text-5xl font-extrabold text-gray-900 tracking-tight">
            About DinoAtlas
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed">
              Ever since I was a kid, I&apos;ve been fascinated by dinosaurs. I used to imagine an interactive website
              where I could explore dinosaur facts, see where they lived, and learn about these incredible creatures
              that once roamed our planet.
            </p>

            <p className="text-xl text-gray-700 leading-relaxed">
              Years later, I decided to bring that childhood dream to life. DinoAtlas is a passion project, a place
              where curiosity meets technology. Here, you can discover where different dinosaur species lived,
              learn fascinating facts about them, and explore the ancient world through an interactive map.
            </p>

            <p className="text-xl text-gray-700 leading-relaxed">
              This project combines my love for dinosaurs with my skills in web development, creating an experience
              that I wish I had as a young dinosaur enthusiast.
            </p>

            <div className="pt-8">
              <p className="text-lg text-gray-600">
                Want to learn more about me and my other projects?
              </p>
              <Link
                href="https://sxul.xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 rounded-lg bg-green-600 px-8 py-4 text-lg font-bold text-white shadow-lg transition-all hover:bg-green-700 hover:scale-105 active:scale-95"
              >
                Visit My Portfolio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
