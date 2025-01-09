import express from "express";
import {pool} from "../Server/Database/index.js"

const app= express();
const PORT = process.env.PORT;

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
})

app.get('/', (req,res) => {
  res.send("hello Benny");
})


app.get('/CreateWorkoutPlan', async function (req,res) {
  const SQLQUERY = 'SELECT * FROM threeDayWorkout';
  const result = await pool.query(SQLQUERY)
  res.status(200).json({
    status:"success",
    data: result.rows
  });
});
