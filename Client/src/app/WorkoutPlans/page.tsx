'use client';
import HeaderComponent from "@/Components/Header/HeaderComponent";
import { useState, useEffect } from "react";
import styles from "./StylesCreateWorkout.module.css";

export default function WorkoutPlans() {
  const [threeDayWorkout, setThreeDayWorkout] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

useEffect(() => {
  fetch('http://localhost:8080/Createworkoutplan')
  .then((responce) => responce.json())
  .then((data)=> {
    setThreeDayWorkout(data);
    setLoading(false);
    })
  .catch((error => {
    setError(error.message);
    setLoading(false);
    })) 
  })
  return(
    <>
      <section>
         <HeaderComponent />
          {loading && <p>Loading workout plan...</p>}
          {error && <p>Error loading workout plan: {error}</p>}
          {threeDayWorkout && (
            <div>
              <h2>Your Workout Plan</h2>
              <pre>{JSON.stringify(threeDayWorkout, null, 2)}</pre>
            </div>
          )}         
      </section>   
    </>
  )
}