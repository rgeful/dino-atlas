import { pgTable, serial, text, doublePrecision, varchar } from 'drizzle-orm/pg-core';

export const dinosaurs = pgTable('dinosaurs', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  description: text('description'),
  length: doublePrecision('length'), 
  height: doublePrecision('height'),
  weight: doublePrecision('weight'),
  funFacts: text('fun_facts').array(), 
  originCountry: varchar('origin_country', { length: 256 }),
  latitude: doublePrecision('latitude'),
  longitude: doublePrecision('longitude'),
  diet: varchar('diet', { length: 50 }),
  period: varchar('period', { length: 100 }),
  imageUrl: text('image_url'),
});