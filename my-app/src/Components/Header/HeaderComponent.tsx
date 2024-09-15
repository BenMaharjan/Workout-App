
import styles from "./StylesHeader.module.css";
import Link from "next/link";
import ButtonContainer from "./ButtonContainer/ButtonContainer";

export default function HeaderComponent () {
  const links = [
    {href: "/", text: "Main"},
    {href: "/WorkoutLogs", text: "Logs"},
    {href: "/CreateWorkoutPlan", text: "Create Plan"}
  ];

  return(
    <>
      <section className ={styles.HeaderSection}>
        <h1>WORKOUT PLAN APP</h1>
        <nav>
          <ButtonContainer links={links} />
        </nav>          
      </section>
    </>
  )
}