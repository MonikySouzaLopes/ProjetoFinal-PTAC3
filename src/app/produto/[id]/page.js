
import Image from "next/image";

export default async function Produto({params}){
    
    const response = await fetch("http://localhost:3000/api/" + params.id);
   
    const data = await response.json();
    return(
        <div> 
        <p> {data.titulo}</p>
        <p>{data.preco}</p>
        <p>{data.genero}</p>
        <p>{data.tamanho}</p>

        <Image 
              width= {150}
              height={150}
              src={data.imagem}/>

        </div>
        
    );
}