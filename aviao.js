var nav, logo, titulo;
var texto1;
var timer_1_texto;
var video;
var aviao;
var canvas;
var overlay;
var popupIntro;
var botao;
var video1Element;
var animate;
function showContentAviao() {

  canvas = document.createElement("CANVAS");
  canvas.id = "canvas";
  document.body.appendChild(canvas);

  overlay = document.createElement("DIV")
  overlay.id = "overlay"
  overlay.className = "overlay"

  video1 = document.createElement("IFRAME")
  video1.id = "video-intro"
  video1.className="centrar"
  video1.src="videos/1.site.mp4";
  video1.width="700";
  video1.height="450";

  video2 = document.createElement("IFRAME")
  video2.id = "video2"
  video2.className="centrar"
  video2.src="videos/2.site.mp4";
  video2.width="700";
  video2.height="450";

  video3 = document.createElement("IFRAME")
  video3.id = "video3"
  video3.className="centrar"
  video3.src="videos/3.site.mp4";
  video3.width="700";
  video3.height="450";

  video4 = document.createElement("IFRAME")
  video4.id = "video4"
  video4.className="centrar"
  video4.src="videos/4.site.mp4";
  video4.width="700";
  video4.height="450";

  popupIntro = document.createElement("DIV");
  popupIntro.id = "popup-intro";
  popupIntro.className = "popup-intro";

  popupIntro.appendChild(video1);

  popup2 = document.createElement("DIV");
  popup2.id = "popup2";
  popup2.className = "popup-intro";

  popup2.appendChild(video2);

  popup3 = document.createElement("DIV");
  popup3.id = "popup3";
  popup3.className = "popup3";

  popup3.appendChild(video3);

  popup4 = document.createElement("DIV");
  popup4.id = "popup4";
  popup4.className = "popup4";

  popup4.appendChild(video4);


  botao = document.createElement("button");
  botao.setAttribute('type', 'button');
  botao.id = "botaox";
  botao.className = "botaox";
  botao.innerHTML = "x";

  botao.addEventListener("mouseover", function () {
    botao.style.cursor = "pointer";
  });
  botao.addEventListener("click", close);

  //Verificar se o utilizador clicou na área pretendida
  function insideCircle(x1, y1) {
    
    //coordenadas do meio dos circulos

    var video = null;

    var xponto1 = 389;
    var yponto1 = 277;

    var xponto2 = 618;
    var yponto2 = 355;

    var xponto3 = 845;
    var yponto3 = 434;

    var xponto4 = 1101;
    var yponto4 = 526;

    r = 40; //Raio do círculo
    if (Math.sqrt((x1 - xponto1) * (x1 - xponto1) + (y1 - yponto1) * (y1 - yponto1)) < r) {

      return video = "vid1";
    } else if (Math.sqrt((x1 - xponto2) * (x1 - xponto2) + (y1 - yponto2) * (y1 - yponto2)) < r) {
      return video = "vid2";
    } else if (Math.sqrt((x1 - xponto3) * (x1 - xponto3) + (y1 - yponto3) * (y1 - yponto3)) < r) {
      return video = "vid3";
    } else if (Math.sqrt((x1 - xponto4) * (x1 - xponto4) + (y1 - yponto4) * (y1 - yponto4)) < r) {
      return video = "vid4";
    } else {
      return video = null;
    }
  }

  //funcao de linear interpolation
  function lerp(start, end, t) {
    return start * (1 - t) + end * t;
  }
  //registar novos clicks do utilizador
  window.addEventListener('click', (e) => {
    x = e.clientX;
    y = e.clientY;
  });

  //Carregar imagens
  var img = new Image;
  img.src = "../mapa2/aviao.png"
  img.width = '100px'
  img.height = '100px'

  var background = new Image();
  background.src = "../mapa2/map.jpeg"

  //Carregar canvas
  let ctx = canvas.getContext('2d');
  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;


  let x = 105;
  let y = 200;
  let planeX = x;
  let planeY = y;

  //Função de animação do avião
  function moveToDynamic() {
    
    var v;
    ctx.clearRect(0, 0, width, height)
    v = insideCircle(x, y)
    if (v != null) {
      planeX = lerp(planeX, x, 0.05)
      planeY = lerp(planeY, y, 0.05)
    }
    ctx.beginPath();
    ctx.drawImage(background,0,0,1338,640) //carregar imagem de fundo (mapa) OS PRIMEIROS VALORES SÃO A POSIÇÃO
    ctx.drawImage(img, planeX -50, planeY -50, 70, 70);

    animate = window.requestAnimationFrame(moveToDynamic);
    
  }
  //Seleção dos vídeos
  function videoPlayer(v){
  
    if (v == "vid1") {
      setTimeout(popUpVideo1,2000);
    } else if (v == "vid2") {
      setTimeout(popUpVideo2,2000);
    } else if (v == "vid3") {
      setTimeout(popUpVideo3,2000);
    } else if (v == "vid4") {
      setTimeout(popUpVideo4,2000);
    }
  }

  //Abrir vídeo referente ao ponto onde o utilizador pressionou
  window.addEventListener('click', (e) => {
    var v = insideCircle(e.clientX,e.clientY)
    if (v!=null){
    videoPlayer(v)
    }
  });

  //Funções de abertura de popups para os vídeos
  function popUpVideo1() {
    
    document.body.appendChild(overlay);
    document.body.appendChild(popupIntro);
    //popupIntro.appendChild(video);
    document.body.appendChild(botao);
  };
  function popUpVideo2(video) {
    document.body.appendChild(overlay);
    document.body.appendChild(popup2);
    document.body.appendChild(botao);
  };
  function popUpVideo3(video) {
    document.body.appendChild(overlay);
    document.body.appendChild(popup3);
    document.body.appendChild(botao);
  };
  function popUpVideo4(video) {
    document.body.appendChild(overlay);
    document.body.appendChild(popup4);
    document.body.appendChild(botao);
  };
  
  //Função de fecho dos popups quando o botão é clickado
  function close() {
    document.body.removeChild(overlay);
    document.body.removeChild(botao);

    if (document.getElementById("popup-intro") != null) {
      document.body.removeChild(popupIntro);
    };

    if (document.getElementById("popup2") != null) {
      document.body.removeChild(popup2);
    };

    if (document.getElementById("popup3") != null) {
      document.body.removeChild(popup3);
    };

    if (document.getElementById("popup4") != null) {
      document.body.removeChild(popup4);
    };
  };
  //Iniciar função de animação do avião
  moveToDynamic();

}
//Remover conteúdo da página do avião
function hideContentAviao() {
  if (document.getElementById("popup-intro") != null) {
    document.body.removeChild(popupIntro);
  };

  if (document.getElementById("popup2") != null) {
    document.body.removeChild(popup2);
  };

  if (document.getElementById("popup3") != null) {
    document.body.removeChild(popup3);
  };

  if (document.getElementById("popup4") != null) {
    document.body.removeChild(popup4);
  };
  if (document.getElementById("botaox")!=null){
    document.body.removeChild(botao);
  };
  if (document.getElementById("overlay")!=null){
    document.body.removeChild(overlay);
  };
  document.body.removeChild(canvas);

}