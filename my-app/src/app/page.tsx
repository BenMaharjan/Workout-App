import Image from "next/image";
import styles from "./page.module.css";
import HeaderComponent from "@/Components/Header/HeaderComponent";
import FooterComponent from "@/Components/Footer/FooterComponent";
import MainComponent from "@/Components/Main/MainComponent";

export default function Home() {
  return (    
    <>
      <HeaderComponent />  
      <MainComponent /> 
      <FooterComponent />
    </>
  );
}
