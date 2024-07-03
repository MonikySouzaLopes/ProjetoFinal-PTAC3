import { NextResponse } from "next/server";

export const listaDeRoupas = [
    {
        id: 1,
        titulo: "T-SHIRT SER MAIS DO QUE TER VERDE",
        preco: 129.90,
        genero: "UNISSEX",
        tamanho: "P ao GG",
        imagem: "https://acdn.mitiendanube.com/stores/001/111/736/products/verde11-f60203cb1b918a448717162450740403-640-0.webp"
    },
    {
        id: 2,
        titulo: "T-SHIRT PENTECOST PRETA",
        preco: 89.90,
        genero: "UNISSEX",
        tamanho: "P ao GG",
        imagem: "https://acdn.mitiendanube.com/stores/001/111/736/products/lojageracao-84-52a825667d18f367d317022213977533-640-0.webp"
    },
    {
        id: 3,
        titulo: "T-SHIRT ACASO NÃO SABEIS",
        preco: 89.90,
        genero: "UNISSEX",
        tamanho: "P ao GG",
        imagem: "https://acdn.mitiendanube.com/stores/001/111/736/products/acaso2-474dabc1ca271260a017072301326674-640-0.webp"
    },
    {
        id: 4,
        titulo: "T-SHIRT GOD´S YOUNG",
        preco: 61.90,
        genero: "UNISSEX",
        tamanho: "P ao GG",
        imagem: "https://acdn.mitiendanube.com/stores/001/111/736/products/colecaoyshv-91-e3237ccfdd02c6d26216927341090723-640-0.webp"
    },
    {
        id: 5,
        titulo: "MOLETOM COLO DE DEUS 20 ANOS",
        preco: 159.90,
        genero: "UNISSEX",
        tamanho: "P ao GG",
        imagem: "https://acdn.mitiendanube.com/stores/001/111/736/products/moletomge11-e718c71c5e6920457817162449293653-640-0.webp"
    },
    {
        id: 6,
        titulo: "MOLETOM ESSENCIAL BLACK",
        preco: 159.90,
        genero: "UNISSEX",
        tamanho: "P ao GG",
        imagem: "https://acdn.mitiendanube.com/stores/001/111/736/products/black1-892494bdfbc59f901417162447694008-640-0.webp"
    },
    {
        id: 7,
        titulo: "CAMISETA JESUS SAVES - JOÃO 3:17 - BRANCA",
        preco: 59.90,
        genero: "UNISSEX",
        tamanho: "P ao GG",
        imagem: "https://acdn.mitiendanube.com/stores/003/258/218/products/02-2bc74383343a1a816917166104312637-640-0.webp"
    },
    {
        id: 8,
        titulo: "CAMISETA GUARDA TEU CORAÇÃO - PROVÉRBIOS 4: 23- PRETA",
        preco: 69.90,
        genero: "UNISSEX",
        tamanho: "P ao GG",
        imagem: "https://acdn.mitiendanube.com/stores/003/258/218/products/02-1670c9a2d4ad72027e17166732447131-640-0.webp"
    },
    {
        id: 9,
        titulo: "CAMISETA JESUS IS KING - PHILIPPIANS 2: 10-11 - BRANCA",
        preco: 59.90,
        genero: "UNISSEX",
        tamanho: "P ao GG",
        imagem: "https://acdn.mitiendanube.com/stores/003/258/218/products/06-bc323f482dbb898c0517166097355397-640-0.webp"
    },
    {
        id: 10,
        titulo: "CAMISETA HOLY SPIRIT - 2 CORÍNTIOS 1: 21-22 - PRETA",
        preco: 69.90,
        genero: "UNISSEX",
        tamanho: "P ao GG",
        imagem: "https://acdn.mitiendanube.com/stores/003/258/218/products/06-holy-preta-a0822815af919812fa17166088880821-640-0.webp"
    },
    {
        id: 11,
        titulo: "CAMISETA SAVED BY GRACE - EFÉSIOS 2: 8-9 - BRANCA",
        preco: 59.90,
        genero: "UNISSEX",
        tamanho: "P ao GG",
        imagem: "https://acdn.mitiendanube.com/stores/003/258/218/products/06-b89462c684fa1bd1fe17166741902509-640-0.webp"
    },
    {
        id: 12,
        titulo: "CAMISETA JESUS CRISTO - PRETA",
        preco: 59.90,
        genero: "UNISSEX",
        tamanho: "P ao GG",
        imagem: "https://acdn.mitiendanube.com/stores/003/258/218/products/09-cruz-preta-e6c63138f8aaaca0c017166796820745-640-0.webp"
    }
];

export async function GET(){
    return NextResponse.json(listaDeRoupas)
}