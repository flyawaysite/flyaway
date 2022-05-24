
var audio;
var clicked;
function showContentInicio() {

    
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


    // logo grande 
    var logofundo
    logofundo = document.createElement("IMG")
    logofundo.id = "logofundo"
    logofundo.src = "/imagens/logo.jpeg"
    logofundo.style.width = "500"
    logofundo.style.height = "500"
    logofundo.style.opacity = "0.0" //opacidade 0 para aumentar depois com a função
    document.body.appendChild(logofundo)

    logofundo.addEventListener("mouseover", bigger); //chama a função 
    logofundo.addEventListener("mouseout", smaller); //chama a função
    logofundo.addEventListener("click", function () { switchOnce() })

    audio = new Audio('./sons/aviao.mpeg');

    window.setTimeout(function () {
        timer_1_1 = window.setInterval(function () {
            generalFadein(timer_1_1, logofundo, 0.01);
        }, 40);
    }, 500);
}


function switchOnce() {
    if (clicked != true) {
        audio.play();
        clicked = true;
        window.setTimeout(function () { switchContent("historia") }, 23000)
    }
}

// função para aparecer maior quando o rato passa lá
function bigger() {
    document.getElementById("logofundo").style.width = "530"
    document.getElementById("logofundo").style.height = "530"
    document.getElementById("logofundo").style.top = "30"
    document.getElementById("logofundo").style.left = "360"
}

// função para aparecer como estava antes (quando o rato sair de la)
function smaller() {
    document.getElementById("logofundo").style.width = "500"
    document.getElementById("logofundo").style.height = "500"
    document.getElementById("logofundo").style.top = "50"
    document.getElementById("logofundo").style.left = "370"
}


function hideContentInicio() {
    document.body.removeChild(logofundo);
    audio.pause()
}