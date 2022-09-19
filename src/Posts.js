import { useState } from "react"


function RenderizarPosts(props) {
    let [like, darLike] = useState("heart-outline")
    let [vermelho, ficarVermelho] = useState("")
    let [salvar, ficarPreto] = useState("bookmark-outline")
    let [pessoasCurtiram, curtidas] = useState(Number((props.quantidadePessoasCurtiu).replace(".", "")))

    function doubleClickLike(){
        if(like === "heart-outline"){
            darLike(like = "heart")
            ficarVermelho(vermelho = "vermelho")
            curtidas(pessoasCurtiram + 1)
        }
    }
    function clickLike(){

        if(like === "heart-outline"){
            darLike(like = "heart")
            ficarVermelho(vermelho = "vermelho")
            curtidas(pessoasCurtiram + 1)
        }

        else{
            darLike(like = "heart-outline")
            ficarVermelho(vermelho = "")
            curtidas(pessoasCurtiram - 1)
        }
        
    }

    function chamarClickSalvar(){

        if(salvar === "bookmark-outline"){
            ficarPreto(salvar = "bookmark")
        }
        else{
            ficarPreto(salvar = "bookmark-outline")
        }
        
    }
    return (
        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={props.imgUsuario}/>
                    {props.nomeUsuario}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img src={props.post} onDoubleClick = {doubleClickLike}/>
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon name={like} onClick = {clickLike} class= {vermelho}></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name={salvar} onClick={chamarClickSalvar}></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={props.pessoaCurtiu} />
                    <div class="texto">
                        Curtido por <strong>{props.nomePessoaCurtiu}</strong> e <strong>outras {pessoasCurtiram.toLocaleString('pt-BR')} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function Posts() {

    const lista = [
        {
            imgUsuario: "./img/meowed.svg",
            nomeUsuario: "meowed",
            post: "./img/gato-telefone.svg",
            pessoaCurtiu: "./img/respondeai.svg",
            nomePessoaCurtiu: "respondeai",
            quantidadePessoasCurtiu: "101.523"
        }
        ,
        {
            imgUsuario: "./img/barked.svg",
            nomeUsuario: " barked",
            post: "./img/dog.svg",
            pessoaCurtiu: "./img/adorable_animals.svg",
            nomePessoaCurtiu: "adorable_animals",
            quantidadePessoasCurtiu: "99.159"
        }
    ]
    return (
        <ul class="posts">
            {lista.map((posts) => <li><RenderizarPosts
                imgUsuario={posts.imgUsuario}
                nomeUsuario={posts.nomeUsuario}
                post={posts.post}
                pessoaCurtiu={posts.pessoaCurtiu}
                nomePessoaCurtiu={posts.nomePessoaCurtiu}
                quantidadePessoasCurtiu={posts.quantidadePessoasCurtiu} /></li>)}
        </ul>
    )
}