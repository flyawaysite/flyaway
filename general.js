var generalcreated = false;
var nav; 
var logo; 
var menu1;
var menu2; 
var menu3; 
var menu4;
var video1,video2,video3,video4;
  function generalCreated (){  


    if (generalcreated == false) {


        nav = document.createElement("DIV");
        nav.id="nav";
        
        logo = document.createElement ("IMG");
        logo.id ="logo";
        logo.src ="../imagens/logo.png";
        nav.appendChild(logo);
        logo.addEventListener("mousedown", function() {switchContent("aviao")})
        

   
        menu1 = document.createElement ("DIV");
        menu1.id ="menu1";
        menu1.innerHTML ="A nossa História";
        menu1.style.opacity="1";
        menu1.addEventListener("mouseover", bold1);//chama a função
        menu1.addEventListener("mouseout", light1);//chama a função
        menu1.addEventListener("mousedown", function() {switchContent("historia")})
        nav.appendChild(menu1)
     
     
        
        menu2 = document.createElement ("DIV");
        menu2.id ="menu2";
        menu2.innerHTML ="Equipa";
        menu2.addEventListener("mouseover", bold2);//chama a função para ficar a bold quando passa o rato
        menu2.addEventListener("mouseout", light2);//chama a função para ficar "normal" quando o rato sai
        menu2.addEventListener("mousedown", function() {switchContent("equipa")})
        nav.appendChild(menu2)

     
        
        menu3 = document.createElement ("DIV");
        menu3.id ="menu3";
        menu3.innerHTML ="O nosso Projeto";
        menu3.addEventListener("mouseover", bold3);//chama a função
        menu3.addEventListener("mouseout", light3);//chama a função
        menu3.addEventListener("mousedown", function() {switchContent("projeto")})    
        nav.appendChild(menu3)
        

        
  
        menu4 = document.createElement ("DIV");
        menu4.id ="menu4";
        menu4.innerHTML ="Parceiros";
        menu4.addEventListener("mouseover", bold4);//chama a função
        menu4.addEventListener("mouseout", light4);//chama a função
        menu4.addEventListener("mousedown", function() {switchContent("parceiros")})   
        nav.appendChild(menu4)


        generalcreated = true;
    

}
}

// função de fade
function generalFadein(timer, img, speed) {

    if (timer == null) {
        console.log("Está a passar para esta função um temporizador nulo. Fadein cancelado")
        return
    }
    
    if (img == null) {
        console.log("Está a passar para esta função uma imagem nula. Fadein cancelado")
        return
    }
    
    if (img.style.opacity == "") {
        img.style.opacity = "0.0";
    }
    
    var opacity = Number(img.style.opacity);
    if (opacity < 1) {
        opacity = opacity + speed;
        // in the next instruction, for instance number 0.7 is converted to the text representation "0.7" and stored in variable
        img.style.opacity = "" + opacity;
    }
    else {
        window.clearInterval(timer);
    }
    }


    var currentCode=null;
    var previousCode=null;

    function switchContent(code) {
        previousCode = code;
        if (currentCode != null) {
            hideCurrentContent();
        }
        displayContent(code);
    }



    function hideCurrentContent() {
        if (currentCode=="inicio"){
            hideContentInicio();
        }
        
        if (currentCode == "historia") {
            hideContentHistoria();
        }
        else
        if (currentCode == "equipa") {
            hideContentEquipa();
        }
        else
        if (currentCode == "projeto") {
            hideContentProjeto();
        }
        else
        if (currentCode == "parceiros") {
            hideContentParceiros();
        }
        else
        if (currentCode == "aviao") {
            hideContentAviao();
        }
        currentCode = null;
    }

// função para tornar o menu bold quando passa por cima o rato
    function bold1() {
        document.getElementById("menu1").style.fontWeight ="bold"
      }
    
      function light1() {
        document.getElementById("menu1").style.fontWeight ="lighter"
      }
  
  
      function bold2() {
        document.getElementById("menu2").style.fontWeight ="bold"
      }
    
      function light2() {
        document.getElementById("menu2").style.fontWeight ="lighter"
      }
  
  
      function bold3() {
        document.getElementById("menu3").style.fontWeight ="bold"
      }
    
      function light3() {
        document.getElementById("menu3").style.fontWeight ="lighter"
      }
  
  
      function bold4() {
        document.getElementById("menu4").style.fontWeight ="bold"
      }
    
      function light4() {
        document.getElementById("menu4").style.fontWeight ="lighter"
      }
    

      // função de mostrar o conteúdo
      function displayContent(code) {
        currentCode = code;
        if (code == "inicio"){
            showContentInicio();
        }
        if (code == "historia") {
            showContentHistoria();
        }
    
        if (code == "equipa") {
            showContentEquipa();
        }
        else
        if (code == "projeto") {
            showContentProjeto();
        }
        else
        if (code == "parceiros") {
            showContentParceiros();
        }
        else
        if (code == "aviao") {
            showContentAviao();
        }
       
    }

  
    function start() {
        //começa aqui
        switchContent("inicio");
        generalCreated()
    }