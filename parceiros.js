var nav, logo, titulo;
var menu1, menu2, menu3, menu4;
var sergio, sara, paula;
var legsergio, legsara, legpaula;
var texto1, texto2, texto3;
var timer_1_1, timer_1_2, timer_1_3, timer_1_4, timer_1_5, timer_1_6,  timer_1_7, timer_1_8, timer_1_9;

    titulo = document.createElement ("DIV")
    titulo.id ="titulo"


    sergio = document.createElement ("IMG")
    sergio.id ="sergio"
    sergio.src ="../imagens/sergio.jpg" 
    sergio.style.width ="200"
    sergio.style.height ="200"
    sergio.style.opacity = "0.0" 
    
    sara = document.createElement ("IMG")
    sara.id ="sara"
    sara.src ="../imagens/sara.jpg" 
    sara.style.width ="200"
    sara.style.height ="200"
    sara.style.opacity = "0.0"   

    paula = document.createElement ("IMG")
    paula.id ="paula"
    paula.src ="../imagens/paula.jpeg" 
    paula.style.width ="200"
    paula.style.height ="200"
    paula.style.opacity = "0.0"

    legsergio = document.createElement ("DIV")
    legsergio.id ="legsergio"
    legsergio.innerHTML ="Sérgio Araújo"
    legsergio.style.opacity ="0.0"

    legsara = document.createElement ("DIV")
    legsara.id ="legsara"
    legsara.innerHTML ="Sara Almeida"
    legsara.style.opacity ="0.0"    

    legpaula = document.createElement ("DIV")
    legpaula.id ="legpaula"
    legpaula.innerHTML ="Paula Guerra"
    legpaula.style.opacity ="0.0"    

    texto1 = document.createElement("DIV")
    texto1.id="texto1"
    texto1.innerHTML =" É professor Coordenador do Politécnico de Leiria (IPL). <br> É licenciado no Ramo Político-Económico de Relações Internacionais, Mestre em em Engenharia Turística e Cultural e Doutor em Ciências do Turismo.  <br> É membro integrado do CITUR – Centro de Investigação, Desenvolvimento e Inovação em Turismo e coordenador do Mestrado em Turismo e Ambiente da ESTM – Escola Superior de Turismo e Tecnologia do Mar. "
    texto1.style.opacity ="0.0"    

    texto2 = document.createElement("DIV")
    texto2.id="texto2"
    texto2.innerHTML ="Licenciada em Gestão Turística e Hoteleira, está atualmente a tirar Mestrado em Marketing e Promoção Turística na Escola Superior de Turismo e Tecnologia do Mar (ESTM)."
    texto2.style.opacity ="0.0"    

    texto3 = document.createElement ("DIV")
    texto3.id ="texto3"
    texto3.innerHTML ="É professora no departamento de Sociologia da Faculdade de Letras da Universidade do Porto, local onde tirou o seu respetivo Doutoramento na área. <br> Paula Guerra coordena o subgrupo Criação artística, práticas e políticas culturais e integra outros centros de investigação internacionais, como o Centro de Estudos de Geografia e do Ordenamento do Território (CEGOT)."
    texto3.style.opacity ="0.0"    
function showContentParceiros() {
	
    titulo.innerHTML ="Parceiros"    

    document.body.appendChild(titulo)
    document.body.appendChild (sergio)
    document.body.appendChild (sara)
    document.body.appendChild (paula)
    document.body.appendChild (legsergio)
    document.body.appendChild (legsara)
    document.body.appendChild (legpaula)
    document.body.appendChild (texto1)
    document.body.appendChild (texto2)
    document.body.appendChild (texto3)
    
//fazer fade

    window.setTimeout(function() {
		timer_1_1 = window.setInterval(function() {
			generalFadein(timer_1_1, sergio, 0.01);
		},20);
	}, 1000);

	window.setTimeout(function() {
		timer_1_2 = window.setInterval(function () {
			generalFadein(timer_1_2, texto1, 0.01);
		},20);
	}, 1000);

	window.setTimeout(function() {
		timer_1_3 = window.setInterval(function () {
			generalFadein(timer_1_3, legsergio, 0.01);
		},20);
	}, 1000);

    window.setTimeout(function() {
		timer_1_4 = window.setInterval(function() {
			generalFadein(timer_1_4, sara, 0.01);
		},20);
	}, 3000);

	window.setTimeout(function() {
		timer_1_5 = window.setInterval(function () {
			generalFadein(timer_1_5, legsara, 0.01);
		},20);
	}, 3000);

	window.setTimeout(function() {
		timer_1_6 = window.setInterval(function () {
			generalFadein(timer_1_6, texto2, 0.01);
		},20);
	}, 3000);


      


        window.setTimeout(function() {
            timer_1_7 = window.setInterval(function() {
                generalFadein(timer_1_7, paula, 0.01);
            },20);
        }, 5500);
        
        window.setTimeout(function() {
            timer_1_8 = window.setInterval(function () {
                generalFadein(timer_1_8, legpaula, 0.01);
            },20);
        }, 5500);
        
        window.setTimeout(function() {
            timer_1_9 = window.setInterval(function () {
                generalFadein(timer_1_9, texto3, 0.01);
            },20);
        }, 5500);
            }

        
        function hideContentParceiros() {
            document.body.removeChild(titulo);
            document.body.removeChild(sergio);
            sergio.style.opacity = "0.0" 
            document.body.removeChild(sara);
            sara.style.opacity = "0.0"
            document.body.removeChild(legsergio);
            legsergio.style.opacity = "0.0" 
            document.body.removeChild(legsara);
            legsara.style.opacity = "0.0" 
            document.body.removeChild(texto1);
            texto1.style.opacity = "0.0" 
            document.body.removeChild(texto2);
            texto2.style.opacity = "0.0" 
            document.body.removeChild(paula);
            paula.style.opacity = "0.0" 
            document.body.removeChild(legpaula);
            legpaula.style.opacity = "0.0" 
            document.body.removeChild(texto3)
            texto3.style.opacity = "0.0" 
        
        }
