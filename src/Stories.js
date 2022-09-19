function RenderizarStories(props) {
    return (
        <div class="story">
            <div class="imagem">
                <img src={props.img} />
            </div>
            <div class="usuario">
                {props.texto}
            </div>
        </div>
    )
}


export default function Stories() {

    const imagem_texto = [
        {
            img:"img/9gag.svg",
            texto: "9gag"
        }
        ,
        {
            img:"./img/meowed.svg",
            texto: "meowed"
        }
        ,
        {
            img:"./img/barked.svg",
            texto:  "barked"
        }
        ,
        {
            img:"./img/nathanwpylestrangeplanet.svg" ,
            texto:  "nathanwpylestrangeplanet"
        }
        ,
        {
            img:"./img/wawawicomics.svg",
            texto: "wawawicomics"
        }
        ,
        {
            img:"./img/respondeai.svg",
            texto: "  respondeai"
        }
        ,
        {
            img:"./img/filomoderna.svg",
            texto: " filomoderna"
        }
        ,
        {
            img:"./img/memeriagourmet.svg",
            texto: "memeriagourmet"
        }

    ]

    return (

        <ul class="stories">
            {imagem_texto.map((story) =><li>{<RenderizarStories img={story.img} texto = {story.texto}/>}</li>)}
            
            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </ul>
        
    )
}