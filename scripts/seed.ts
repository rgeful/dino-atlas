import { config } from 'dotenv';
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import fs from 'fs';
import path from 'path';
import { dinosaurs } from '../db/schema';

config({ path: '.env.local' });

async function main() {
  console.log('Starting seed');

  const connectionString = process.env.DATABASE_URL!;
  if (!connectionString) {
    throw new Error('DATABASE_URL is missing');
  }

  const client = postgres(connectionString, { prepare: false });
  const db = drizzle(client);

  try {
    const dataPath = path.join(process.cwd(), 'dinosaurs.json');
    const rawData = fs.readFileSync(dataPath, 'utf-8');
    const dinoData = JSON.parse(rawData);

    console.log(`Found ${dinoData.length} dinosaurs in JSON file.`);

    console.log('Clearing old data...');
    await db.delete(dinosaurs); 

    console.log('Inserting new data...');
    await db.insert(dinosaurs).values(dinoData);

    console.log('Seeding complete!');
  } catch (error) {
    console.error('Seeding failed:', error);
  } finally {
    await client.end();
  }
}

main();