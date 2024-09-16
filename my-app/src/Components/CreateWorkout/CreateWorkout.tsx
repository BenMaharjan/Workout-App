import styles from "./StylesCreateWorkout.module.css"

export default function CreateWorkout () {
  return (
    <section className={styles.WorkoutContainer}>
      <section className={styles.ContainerLeft}>
        <p>My Workout Plan</p>
      </section>
      <section className={styles.ContainerRight}>
        <p>Pre selected Workouts</p>
      </section>
    </section>
  )
}