import { drizzle, VercelPgClient } from "drizzle-orm/vercel-postgres";

import { env } from "~/env";
import * as schema from "./schema";
import { createClient } from "@vercel/postgres";

/**
 * Cache the database connection in development. This avoids creating a new connection on every HMR
 * update.
 */
const globalForDb = globalThis as unknown as {
  client: VercelPgClient | undefined;
};
export const client = globalForDb.client ?? createClient();
if (env.NODE_ENV !== "production") globalForDb.client = client;

export const db = drizzle(client, { schema });
