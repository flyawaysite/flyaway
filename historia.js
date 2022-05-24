var nav, logo, titulo;
var texto;
var timer_1_texto;
var iframeHistoria;
var type;
function showContentHistoria() {

    document.body.style.backgroundColor = "#FFFFFF";

    document.body.appendChild(nav);
    //titulo    
    titulo = document.createElement("DIV")
    titulo.id = "titulo"
    titulo.innerHTML = "A nossa História"
    document.body.appendChild(titulo)

    var i = 0;
    var txt = 'Muito se fala do turismo e de tudo o que de bom ele traz, em particular para a Economia. Mas a verdade é que todas as histórias têm pelo menos dois lados e esta não é excecção. Não terá o turismo também os seus impactos negativos? Que é bom para o PIB, para os negócios locais, para a interculturalidade, disso não há dúvidas. Mas será benéfico para ambiente? Como afeta o mercado imobiliário? Viajar quebra de facto barreiras ou será que pelo contrário cria novas, nos lugares mais inesperados. Até onde estamos dispostos a abdicar do que resta da nossa identidade cultural em prol de um suposto crescimento económico? Afinal, o que representa o turismo? Para nós, Portugal e para aqueles que nos visitam? Estas são algumas das perguntas que procuramos responder no âmbito deste projeto. Não prometemos respostas concretas mas não nos faltam respostas honestas.';
    var speed = 20; //Velocidade do texto. Mais alto = Menor velocidade


    //texto
    texto = document.createElement("DIV")
    texto.id = "texto"
    texto.style.opacity = "0.0"
    document.body.appendChild(texto)
    //texto.innerHTML = "" 
    function typeWriter() {
        if (i < txt.length) {
            document.getElementById("texto").innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }
    

    if (type==null){
        typeWriter()
    }

    iframeHistoria = document.createElement("DIV")
    iframeHistoria.id = "iframeHistoria"
    //iframeHistoria.className="iframeHistoria"
    iframeHistoria.innerHTML = "<iframe id='iframeHistoria' width='480' height='270' src='videos/trailer.site.mp4' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>"
    document.body.appendChild(iframeHistoria)

    //fazer fade
    window.setTimeout(function () {
        timer_1_texto = window.setInterval(function () {
            generalFadein(timer_1_texto, texto, 0.01);
        }, 20);
    }, 500);

}
function hideContentHistoria() {
    document.body.removeChild(texto);
    document.body.removeChild(titulo);
    document.body.removeChild(iframeHistoria);

}