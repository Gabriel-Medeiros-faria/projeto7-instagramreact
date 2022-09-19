import { useState } from "react"




export default function Usuario() {
    let [imagemUsuario, mudarImagem] = useState("./img/eu.jpg")
    let [nomeUsuario , mudarTexto] = useState("Gabriel Medeiros")
    
    
    
    function chamarImagem(){
        let imagem = prompt("URL da imagem")
        mudarImagem(imagemUsuario = imagem)
    }
    function chamarTexto(){
        let texto = prompt("Digite nome do usuário")
        mudarTexto(nomeUsuario = texto)
    }
    return (
        <div class="usuario">
            <img src={imagemUsuario} onClick = {chamarImagem}/>
            <div class="texto">
                <strong>_gabmedeiros_</strong>
                <span>
                    {nomeUsuario}
                    <ion-icon name="pencil" onClick = {chamarTexto}></ion-icon>
                </span>
            </div>
        </div>
    )
}