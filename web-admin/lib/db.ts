import { Pool } from 'pg';

// Un solo pool por proceso: `next start` es un servidor de larga vida.
export const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 5 });
