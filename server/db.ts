import { drizzle } from "drizzle-orm/neon-serverless";
import ws from "ws";
import { Pool } from "@neondatabase/serverless";

if (!process.env.DATABASE_URL) {
  throw new Error(
    "DATABASE_URL must be set. Did you forget to provision a database?",
  );
}

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
// @ts-ignore - webSocketConstructor type issue
pool.neonConfig.webSocketConstructor = ws;

export const db = drizzle(pool);
