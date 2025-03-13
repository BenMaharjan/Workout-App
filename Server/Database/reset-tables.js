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

      DROP TABLE IF EXISTS fourDayWorkOut;
      CREATE TABLE fourDayWorkOut (
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
        ('Back', 'Bent-over Row'),
        ('Shoulders', 'Overhead Press'),
        ('Legs', 'Squats'),
        ('Arms', 'Bicep Curl');

      INSERT INTO fourDayWorkOut (muscleGroup, exercise)
      VALUES
        ('Chest', 'Incline Dumbell Press'),
        ('Back', 'Face Pulls'),
        ('Shoulders', 'Side Lateral Raises'),
        ('Legs', 'Leg Extensions'),
        ('Arms', 'Tricep Extensions');
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