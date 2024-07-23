
import Image from "next/image";
import styles from "./produto.module.css";
export default async function Produto({params}){
    
    const response = await fetch("http://localhost:3000/api/" + params.id);
   
    const data = await response.json();
    return(
        <>
        <br/>
        <div className={styles.container}> 
        <p className={styles.titulo}>{data.titulo}</p>
        <div className={styles.imagem}>
        <Image 
              width= {300}
              height={300}
              src={data.imagem}/>
        </div>
        <p className={styles.preco}>R${data.preco}</p>
        <p className={styles.detalhes}>{data.genero}</p>
        <p className={styles.detalhes}>{data.tamanho}</p>

        
        </div>
        </>
    );
}