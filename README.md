# Dino Atlas

https://github.com/user-attachments/assets/a1c61e22-d727-4a37-b532-c1661663562b

An interactive geospatial dashboard that visualizes the prehistoric world. Users can explore a global map of dinosaur discovery sites, featuring a "fly-to" interaction system that syncs a searchable sidebar with a dynamic map interface.

## Tech Stack

* **Frontend:** [Next.js] & [TailwindCSS]
* **Map Engine:** [Leaflet] & [React-Leaflet]
* **Database:** [PostgreSQL] hosted via [Supabase]
* **ORM:** [DrizzleORM]
* **Language:** TypeScript

## Key Features

* **Interactive Geospatial Map:** Smoothly navigate to specific excavation regions using Leaflet's `flyTo` animations.
* **Synchronized UI State:** Selecting a dinosaur in the sidebar triggers a map movement and highlights the discovery site.
* **Type-Safe Database Access:** Uses Drizzle ORM to interface with a cloud-hosted Postgres database, ensuring data integrity across the stack.
* **Responsive Sidebar:** A clean, modern list inspired by [Kumamap](https://kumamap.com/), displaying species name, diet, and time period.
* **Optimized Client Loading:** Implements Next.js dynamic imports with `ssr: false` to handle browser-only map libraries efficiently.

## System Design & Technical Challenges

### 1. Handling SSR with Geospatial Libraries
Leaflet requires access to the `window` and `document` objects, which are not available during Next.js Server-Side Rendering (SSR). I solved this by using **Dynamic Imports** with `ssr: false` to ensure the map engine only initializes on the client side.

### 2. Relational Data Modeling
I designed a schema to handle complex prehistoric data, utilizing `doublePrecision` for scientific measurements (length, weight) to allow for future sorting/filtering features, and `JSONB` or array types for flexible trivia storage.

### 3. Decoupled Architecture
By using **Drizzle ORM**, the application logic is decoupled from the specific database provider. This allows the system to remain database-agnostic while providing full type safety from the database to the UI.


