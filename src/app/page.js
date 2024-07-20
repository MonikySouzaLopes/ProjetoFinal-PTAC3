'use client'
import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./home.module.css";
import Link from "next/link";
import Loading from "./componentes/Loading";
import ErronoFetch from "./componentes/ErronoFetch";

export default function Home() {

  const [listaProduto, setListaProduto] = useState([]);

  const [listaCompleta, setListaCompleta] = useState([]);

  const [erroNoServidor, setErroNoServidor] = useState(false)

  useEffect( ()=> {
    const getProduto = async() =>{
      try{const response = await fetch("http://localhost:3000/api");
      const data = await response.json();
      
      setListaCompleta(data);
      setListaProduto(data);
      }catch{
        setErroNoServidor(true);
      } 
    };
    getProduto();
  }, []);
//função para ordenar os produtos em ordem alfabética
const ordernarAZ = () =>{

  //essa const ta fazendo uma cópia da lista de produtos, e ela ta usando usando o metódo sort para ordenar
  const newList = [...listaProduto].sort( (a, b) =>
    //localeCompare é um método de string que compara duas strings em ordem alfabética, de acordo com as regras de localização.  
    a.titulo.localeCompare(b.titulo)
  );
  //depois o estado de listProduct vai ser alterado, afim de receber o que está armazenado dentro de newList
  setListaProduto(newList);
}

  if(erroNoServidor == true){
    return <ErronoFetch/>
  }

  if(listaCompleta[0] == null){
    return <center><Loading/></center>
  }
  return (
    <>
    <div>
        <Image width= {1310}
              height={300} 
              src="/Banner.png"/>
    </div>
    <br/>
    <p>Filtros: </p>
    <button onClick={ordernarAZ}>AZ</button>
    <main className={styles.main}>
     {listaProduto.map((produto)=>
          <div className={styles.card} key={produto.id}>
            <center><h3>{produto.titulo}</h3></center>
            <Image 
        width= {300}
        height={300}
        src={produto.imagem}/>
            <p><strong>R$ {produto.preco}</strong></p>
            <center><p><strong>Gênero: </strong>{produto.genero}</p></center>
            <center><p><strong>Tamanho: </strong>{produto.tamanho}</p></center> 
        <br/>
        <Link href={"/produto/" + produto.id}>Ver mais!</Link>
          </div>
   )}
    </main>
    </>
  );
}
