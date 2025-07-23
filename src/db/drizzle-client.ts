import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import * as schema from './schema';
import 'dotenv/config';

const pool = new Pool({
  connectionString: process.env.EXT_DB_URL,
});

export const db = drizzle(pool, { schema });
