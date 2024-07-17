import Image from "next/image"
import styles from "./footer.module.css"
export default function Footer(){
    return(
        <>
        <br/>
          <footer className={styles.footer}>
          <div className={styles.container}>
            <p>&copy; 2024 Here I Am. Todos os direitos reservados.</p>
        </div>
          </footer>
          </>
    );
};