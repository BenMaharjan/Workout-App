import Button from "./Button/Button"
import styles from "./StylesButtonContainer.module.css"

interface Link {
  href:string,
  text:string
}

interface ButtonContainerProps {
  links:Link[]
}

export default function ButtonContainer ({links}:ButtonContainerProps) {
  return (
    <div className = {styles.ButtonContainerStyle}>
      {links.map((link, index) => (
        <Button key={index} href={link.href} text={link.text} />
      ))}
    </div>
  );
}