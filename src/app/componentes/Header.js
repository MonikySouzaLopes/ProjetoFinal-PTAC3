import styles from "./header.module.css"
import Image from "next/image";
export default function Header(){
    return(
        <nav className={styles.navbar}>
        <div className={styles.navbar_div}> 
        <Image width= {200}
              height={200} 
              src="/Logo.png"/>
        <p>Urban Believers</p>
        <p className={styles.frase}>O lugar onde a fé e a moda se encontram !</p>
        </div>
        <div className={styles.navbar_menu} >
           <Image 
           width= {40}
           height={40}
           src="https://img.icons8.com/ios/50/shopping-cart--v1.png" 
            />
           
        </div>
    </nav>
    );
};