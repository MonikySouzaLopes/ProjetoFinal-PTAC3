'use client'
import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./home.module.css";
import Link from "next/link";

export default function Home() {

  const [listaProduto, setListaProduto] = useState([]);

  const [listaCompleta, setListaCompleta] = useState([]);

  useEffect( ()=> {
    const getProduto = async() =>{
      const response = await fetch("http://localhost:3000/api");
      const data = await response.json();

      setListaProduto(data);
    };
    getProduto();
  }, []);

  return (
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
        
          </div>
   )}
    </main>
  );
}
