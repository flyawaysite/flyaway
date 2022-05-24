var projetocreated = false;
var titulo;
var sub1;
var turismo;
var larga;
var sub2;
var comprido;
var intro;
var iframe;
var sub3;
var cultura;
var iceberg;
var type;
var timer_1_textoRealidade;
var type1;
var timer_1_textoTurismo;

// mostrar o conteúdo da página

function showContentProjeto() {

    titulo = document.createElement("DIV")
    titulo.id = "titulo"
    titulo.innerHTML = "O nosso Projeto"
    document.body.appendChild(titulo)


    sub1 = document.createElement("DIV");
    sub1.id = "sub1";
    sub1.innerHTML = "O Turismo";
    document.body.appendChild(sub1);

    larga = document.createElement("IMG");
    larga.id = "larga";
    larga.src = "../imagens/larga.png";
    document.body.appendChild(larga);

    turismo = document.createElement("DIV");
    turismo.id = "turismo";
    turismo.innerHTML = "";
    document.body.appendChild(turismo);

    sub2 = document.createElement("DIV");
    sub2.id = "sub2";
    sub2.innerHTML = "Expectativa vs Realidade";
    document.body.appendChild(sub2);

    comprido = document.createElement("IMG");
    comprido.id = "comprido";
    comprido.src = "../imagens/comprido.png";
    document.body.appendChild(comprido);


    intro = document.createElement("DIV");
    intro.id = "intro";
    intro.innerHTML = "";
    document.body.appendChild(intro);

    //video
    iframe = document.createElement("DIV")
    iframe.id = "iframe"

    iframe.innerHTML = "<iframe width='480' height='270' src='https://www.youtube.com/embed/F4KYhryX90w' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>"
    document.body.appendChild(iframe)

    sub3 = document.createElement("DIV");
    sub3.id = "sub3";
    sub3.innerHTML = "A Cultura";
    document.body.appendChild(sub3);

    cultura = document.createElement("DIV");
    cultura.id = "cultura";
    cultura.innerHTML = " Quando nos deparamos com outra cultura, normalmente apenas interagimos com os 10% da ponta do iceberg. Muitas vezes, as pessoas assumem ou criam opiniões sobre uma determinada cultura sem de facto compreender internamente os seus valores e crenças. <br> Num iceberg, apenas cerca de 10% é visível por estar por cima de água. Mas a maior parte do iceberg está escondido por baixo da superfície. <br> Em 1976, Edward T. Hall sugeriu que a cultura era semelhante a um iceberg e propôs que a cultura tem duas componentes. Uma visível (surface culture) e a outra escondida (deep culture).";
    document.body.appendChild(cultura);

    iceberg = document.createElement("IMG");
    iceberg.id = "iceberg";
    iceberg.src = "../imagens/iceberg.jpeg";
    iceberg.style.width = "400";
    iceberg.style.height = "500";
    iceberg.style.opacity = "1";
    document.body.appendChild(iceberg);

    imagemTurismo = document.createElement("IMG");
    imagemTurismo.id = "imagemTurismo";
    imagemTurismo.src = "../imagens/imagemTurismo.png";
    imagemTurismo.height="400"
    imagemTurismo.width="400"
    document.body.appendChild(imagemTurismo);


    var i = 0;
    var txt = 'Que na maioria das vezes a expetativa não corresponde à realidade isso já é uma conceção que à partida temos como adquirido. Mas infelizmente e como que em contrassenso com aquilo que nós próprios já sabemos, não parece ser suficiente para nos impedir de criamos ilusões involuntárias. Isso é o que acontece na maioria das vezes, no tempo que antecede uma viagem. Só quando chegamos aos locais é que percebemos que as fotografias e os postais que vimos não são reflexos precisos do que existe de facto. E aí compreendemos que nos voltamos a deixar levar pelo desejo do que poderia vir a ser.';
    var speed = 20; //Velocidade do texto. Mais alto = Menor velocidade

    var txt1="Viajar sempre fez parte da vida do ser humano. Um grande exemplo disto mesmo é o nomadismo que remonta desde a pré-história. A exploração de novos locais, quer seja em busca de subsistência ou de conhecimento, sempre existiu. Não é por acaso que Luís de Camões escreveu: “Passaram ainda além da Taprobana, / Em perigos e guerras esforçados / Mais do que prometia a força humana, (…)”. Mais tarde, e quando a sobrevivência já não era a principal preocupação, nasceram as “viagens” tal e qual como as conhecemos hoje. Começando pelas peregrinações religiosas, e indo até às viagens que começaram por ser em tempos feitas com o único objetivo previamente definido, e que com o aumento de acessibilidade se passaram a realizar na maioria das vezes por puro entretenimento."
    //texto
    textoRealidade = document.createElement("DIV")
    textoRealidade.id = "textoRealidade"
    textoRealidade.style.opacity = "0.0"

    //texto turismo
    textoTurismo = document.createElement("DIV")
    textoTurismo.id = "textoTurismo"
    textoTurismo.style.opacity = "0.0"

    document.body.appendChild(textoRealidade)
    document.body.appendChild(textoTurismo)

    function typeWriter() {
        if (i < txt.length) {
            document.getElementById("textoRealidade").innerHTML += txt.charAt(i);
        }
        if(i < txt1.length){
            document.getElementById("textoTurismo").innerHTML += txt1.charAt(i);
        }
        i++;
        setTimeout(typeWriter, speed);
    }
    
    window.setTimeout(function () {
        timer_1_textoRealidade = window.setInterval(function () {
            generalFadein(timer_1_textoRealidade, textoRealidade, 0.01);
        }, 20);
    }, 500);

    window.setTimeout(function () {
        timer_1_textoTurismo = window.setInterval(function () {
            generalFadein(timer_1_textoTurismo, textoTurismo, 0.01);
        }, 20);
    }, 500);

    

    if (type==null){
        typeWriter()
    }
   


    projetocreated = true

}

// esconder o conteúdo da página
function hideContentProjeto() {
    document.body.removeChild(titulo);
    document.body.removeChild(sub1);
    document.body.removeChild(larga);
    document.body.removeChild(turismo);
    document.body.removeChild(sub2);
    document.body.removeChild(comprido);
    document.body.removeChild(intro);
    document.body.removeChild(iframe);
    document.body.removeChild(sub3);
    document.body.removeChild(cultura);
    document.body.removeChild(iceberg);
    document.body.removeChild(textoRealidade);
    document.body.removeChild(textoTurismo);
    document.body.removeChild(imagemTurismo);
}
