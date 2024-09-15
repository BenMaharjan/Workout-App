import Link from 'next/link'
import styles from "./StylesButton.module.css"

// This is a TypeScript interface declaration. 
// Interfaces in TypeScript are used to define the shape of an object. 
// In this case, we're defining the shape of the props that our Button component will receive.
// ButtonProps is the name we've given to this interface.
// Inside the curly braces, we define the properties and their types:
// href: string means the href prop must be a string.
// text: string means the text prop must also be a string.
// This interface ensures that when someone uses the Button component, they must provide these two props, and they must be strings.
// TypeScript will show an error if these conditions are not met.

interface ButtonProps {
  href: string;
  text: string;
}

export default function Button({href, text}:ButtonProps) {
  return (
    <Link href ={href} passHref>
      <button className={styles.button}>{text}</button>
    </Link>
  );
}