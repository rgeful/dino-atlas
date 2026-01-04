import { db } from "@/db"; // You'll need to set up the client connection file
import { dinosaurs } from "@/db/schema";

export default async function Home() {
  const allDinos = await db.select().from(dinosaurs);

  return (
    <main className="p-10">
      <h1>Dino Atlas Connection Test</h1>
      <pre>{JSON.stringify(allDinos, null, 2)}</pre>
    </main>
  );
}