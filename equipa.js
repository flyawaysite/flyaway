
var equipacreated = false;
var titulo;
var catarina, claudia, pedro;
var leg1, leg2, leg3;
var timer_1_1, timer_1_2, timer_1_3, timer_1_4, timer_1_5, timer_1_6;
function showContentEquipa () {

        titulo = document.createElement ("DIV");
        titulo.id ="titulo";
        titulo.innerHTML ="A nossa Equipa";
        document.body.appendChild(titulo);
      

        catarina = document.createElement ("IMG");
        catarina.id ="catarina";
        catarina.src ="https://flyawaysite.github.io/imagens/catarina.jpeg" ;
        catarina.style.width ="200";
        catarina.style.height ="200";
        catarina.style.opacity = "0.0";
        document.body.appendChild(catarina);


        claudia = document.createElement ("IMG");
        claudia.id ="claudia";
        claudia.src ="https://flyawaysite.github.io/imagens/claudia.jpeg" ;
        claudia.style.width ="200";
        claudia.style.height ="200";
        claudia.style.opacity = "0.0";
        document.body.appendChild(claudia);
    

        pedro = document.createElement ("IMG");
        pedro.id ="pedro";
        pedro.src ="https://flyawaysite.github.io/imagens/pedro.jpeg" ;
        pedro.style.width ="200";
        pedro.style.height ="200";
        pedro.style.opacity = "0.0";
        document.body.appendChild(pedro);
     

        leg1 = document.createElement ("DIV");
        leg1.id ="leg1";
        leg1.innerHTML ='Catarina Santos <br> "Demoro 1h20 a chegar à faculdade. Não consigo alugar um quarto no centro, é demasiado caro."';
        leg1.style.opacity = "0.0";
        document.body.appendChild(leg1);
     

        leg2 = document.createElement ("DIV");
        leg2.id ="leg2";
        leg2.innerHTML ='Cláudia Cardoso <br> "Todos os meus vizinhos são estrangeiros. Na minha rua, quase ninguém fala português."';
        leg2.style.opacity = "0.0";
        document.body.appendChild(leg2);

        leg3 = document.createElement ("DIV");
        leg3.id ="leg3";
        leg3.innerHTML ='Pedro Serafim <br> "Sinto que a ribeira está a perder o seu encanto. Tem sempre demasiadas pessoas e muito lixo."';
        leg3.style.opacity = "0.0";
        document.body.appendChild(leg3);


            
        
      //para fazer fade    
    window.setTimeout(function() {
            timer_1_1 = window.setInterval(function() {
                generalFadein(timer_1_1, catarina, 0.01);
            },20);
        }, 500);
    
        window.setTimeout(function() {
            timer_1_2 = window.setInterval(function () {
                generalFadein(timer_1_2, claudia, 0.01);
            },20);
        }, 500);
    
        window.setTimeout(function() {
            timer_1_3 = window.setInterval(function () {
                generalFadein(timer_1_3, pedro, 0.01);
            },20);
        }, 500);
    
        window.setTimeout(function() {
            timer_1_4 = window.setInterval(function() {
                generalFadein(timer_1_4, leg1, 0.01);
            },20);
        }, 500);
    
        window.setTimeout(function() {
            timer_1_5 = window.setInterval(function () {
                generalFadein(timer_1_5, leg2, 0.01);
            },20);
        }, 500);
    
        window.setTimeout(function() {
            timer_1_6 = window.setInterval(function () {
                generalFadein(timer_1_6, leg3, 0.01);
            },20);
        }, 500);

     }






function hideContentEquipa() {
    document.body.removeChild (titulo);
    document.body.removeChild (catarina);
    document.body.removeChild (claudia);
    document.body.removeChild (pedro);
    document.body.removeChild (leg1);
    document.body.removeChild (leg2);
    document.body.removeChild (leg3);

}
