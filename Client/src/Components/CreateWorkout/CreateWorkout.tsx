'use client';

import { useState } from "react";
import styles from "./StylesCreateWorkout.module.css";

interface WorkoutPlan {
    Chest: string;
    Shoulders: string;   
    Legs: string;
}

export default function CreateWorkout () {
  const [myPlan, setMyPlan] = useState<WorkoutPlan | null>(null);
  
  const workoutPlans = {
      Threeday: {
        Chest: "Bench Press",
        Shoulders: "Overhead Press",
        Legs: "Squats"
      },
      Fourday: {
        Chest: "Dumbell Press",
        Shoulders: "Side Laterals",
        Legs: "SLeg Press"
    }  
}
  function handleThreeDayClick () {
    setMyPlan(workoutPlans.Threeday);
  }

  function handleFourDayClick () {
    setMyPlan(workoutPlans.Fourday)
  }

  return (
    <section className={styles.WorkoutContainer}>
      <section className={styles.ContainerLeft}>
        <p>My Workout Plan</p>
        <textarea
        className={styles.textArea}
          value={myPlan ? Object.entries(myPlan)
            .map(([key, value]) => `${key}: ${value}`)
            .join('\n')
            : ''}
          readOnly
        />
      </section>
      <section className={styles.ContainerRight}>      
        <section className={styles.PresetPlans}>
          <p>Pre-Selected Workouts</p><br/>
          <button onClick={handleThreeDayClick}>Three Day Workout Plan</button>
          <button onClick={handleFourDayClick}>Four Day Workout Plan</button>
          <button>Five Day Workout Plan</button>
          <button>Six Day Workout Plan</button>                 
        </section>
      </section>
    </section>
  )
}