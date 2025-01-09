import pg from 'pg';

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  throw new Error(
    "This project requires a database URL. Please ensure you have a .env file containing a DATABASE_URL variable"
  );
}

export const pool = new pg.Pool({
  connectionString: databaseUrl,
});