/*É usado o 'use client' para indicar que o componente deve ser 
renderizado no lado cliente(navegador) em vez de no servidor*/
'use client'
//importando o useEffect e o useState do react
import { useEffect, useState } from "react";
//importando o componente nativo Image do next 
import Image from "next/image";
//importação do css
import styles from "./home.module.css";
//importando o componente nativo Link do next
import Link from "next/link";
//importando o componente Loading que criamos
import Loading from "./componentes/Loading";
//importando o componente ErronoFecth que será renderizado quando ocorrer um erro na busca de dados
import ErronoFetch from "./componentes/ErronoFetch";

//criação do componente Home
export default function Home() {

  //lista dos produtos a ser filtrada e ordenada
  const [listaProduto, setListaProduto] = useState([]);
  //lista completa com todos os produtos
  const [listaCompleta, setListaCompleta] = useState([]);
   //const que guarda um valor boolean para ser usada depois para tratar o erro do servidor
  const [erroNoServidor, setErroNoServidor] = useState(false);
  //const usada para a busca
  const [pesquisa, setPesquisa] = useState("");

  //o useEffect tá sendo usado para buscar os dados na quando o componente é montado
  useEffect( ()=> {
    //função assíncrona para buscar os dados no servidor(quando a função é assíncrona é utilizada no lado servidor)
    const getProduto = async() =>{
      //fetch é a função que busca os dados no servidor
      try{const response = await fetch("http://localhost:3000/api");
      //os dados estão sendo convertidos para JSON
        const data = await response.json();
      //os dados são armazenados nas listas
      setListaCompleta(data);
      setListaProduto(data);
      /*se ocorrer algum erro, vai cair no bloco catch e ira transformar
      o valor da constante erroNoServidor para true, que anteriormente estava definida
      como false */
      }catch{
        setErroNoServidor(true);
      } 
    };
    getProduto();
  }, []);

  //função pra ordernar os produtos em ordem alfabética
const ordenarAZ = () =>{
  const newList = [...listaProduto].sort( (a, b) =>
    a.titulo.localeCompare(b.titulo)
  );
  setListaProduto(newList);
}

//é a mesma função que a anterior, porém utiliza-se o método .reverse para deixar a ordem ao contrário
const ordenarZA = () =>{
  let newList = [...listaProduto].sort( (a, b) =>
      a.titulo.localeCompare(b.titulo)
  );
  newList = newList.reverse();
  setListaProduto(newList);
}

//função para ordenar o preço do menor para o maior
const ordenarPrecoMenorAoMaior = () =>{
  let newList = [...listaProduto].sort( (a, b) =>
      a.preco - b.preco
  );
  setListaProduto(newList);
}
//função para ordenar o preço do maior para o menor
const ordenarPrecoMaiorAoMenor = () =>{
  let newList = [...listaProduto].sort( (a, b) =>
      a.preco - b.preco
  );
  newList = newList.reverse();
  setListaProduto(newList);
}

//função de busca
const pesquisaTitulo = (text) =>{
  setPesquisa(text);
  
  if(text.trim() == ""){
    
      setListaProduto(listaCompleta);
      return
  }
 
  const newList = listaProduto.filter((product) => 
    product.titulo.toUpperCase().trim().includes(pesquisa.toUpperCase().trim()));
   setListaProduto(newList);
}

//condição que se a constante erroNoServidor for igual a true, retornará o componente ErroNoFetch
  if(erroNoServidor == true){
    return <ErronoFetch/>
  }
//condição que se a primeira posição da listaCompleta for igual a nulo, retornará o componente Loading, até q a primeira posição receba um valor
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
    <div className={styles.filtrosContainer}>
      <p> Filtros: </p>
    <button onClick={ordenarAZ}>Do A ao Z</button>
    <button onClick={ordenarZA}>Do Z ao A</button>
    <button onClick={ordenarPrecoMenorAoMaior}>Menor preço ao maior</button>
    <button onClick={ordenarPrecoMaiorAoMenor}>Maior preço ao menor</button>
    <p>Pesquisa: </p>
    <input type="text" value={pesquisa} placeholder="Pesquise o produto" onChange={(event) => pesquisaTitulo( event.target.value)}/>
    </div>
    
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
        <button className={styles.buttonLink}>
        <Link className={styles.link} href={"/produto/" + produto.id}>
                <p className={styles.buttonLinkText}>Ver mais!</p>
            </Link>
        </button>
       
          </div>
   )}
    </main>
    </>
  );
}
