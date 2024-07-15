'use client'
import { useEffect, useState } from "react";
import Image from "next/image";
import "./styles.css";
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
    <main>
     {listaProduto.map((produto)=> 
          <div key={produto.id}>
            <center><h3>{produto.titulo}</h3></center>
            <p><strong>R$ {produto.preco}</strong></p>
            <center><p><strong>Gênero: </strong>{produto.genero}</p></center>
            <center><p><strong>Tamanho: </strong>{produto.tamanho}</p></center>
            <Image 
        width= {150}
        height={150}
        src={produto.imagem}/>
        <br/>
        
          </div>
   )}
    </main>
  );
}
