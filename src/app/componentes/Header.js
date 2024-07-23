import styles from "./header.module.css"
import Image from "next/image";
import Link from "next/link"
export default function Header(){
    return(
        <nav className={styles.navbar}>
        <div className={styles.navbar_div}> 

        <Link href="/">
                   
                        <Image
                            width={200}
                            height={200}
                            src="/Logo.png"
                            alt="Logo"
                        />
                   
                </Link>
        <p>Urban Believers</p>
        <p className={styles.frase}>O lugar onde a fé e a moda se encontram !</p>
        </div>
        <div className={styles.navbar_menu} >
           <Image 
           width= {60}
           height={60}
           src="/Sacola.png" 
            />
        </div>
    </nav>
    
    );
};