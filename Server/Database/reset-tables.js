import { pool } from "./index.js";

export async function resetTable() {
  try {
    // Drop table if it exists, then create it
    await pool.query(`
      DROP TABLE IF EXISTS threeDayWorkOut;
      CREATE TABLE threeDayWorkOut (
        id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        muscleGroup VARCHAR(255) NOT NULL,
        exercise VARCHAR(255) NOT NULL
      );
    `);

    // Insert data into the table
    await pool.query(`
      INSERT INTO threeDayWorkOut (muscleGroup, exercise)
      VALUES
        ('Chest', 'Bench Press'),
        ('Shoulders', 'Overhead Press'),
        ('Legs', 'Squats'),
        ('Arms', 'Bicep Curl');
    `);

    console.log("Table reset and data inserted successfully.");
  } catch (err) {
    console.error("Error resetting table:", err.message);
  } finally {
    // End the pool
    await pool.end();
  }
}

await resetTable();