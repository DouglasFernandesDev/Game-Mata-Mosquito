let largura = 0;
let altura = 0;
let vidas = 1;
let tempo = 20;
let dificuldade = 1500;

let nivel = window.location.search
nivel = nivel.replace('?', '');

if(nivel === 'normal'){
  dificuldade = 1500;
} else if(nivel === 'dificil') {
  dificuldade = 1000;
} else if(nivel === 'chucknorris') {
  dificuldade = 750;
} 

const ajustaTamaho = () => {
  largura = window.innerWidth;
  altura = window.innerHeight;
//  console.log(largura, altura);
}
ajustaTamaho();

let cronometro = setInterval(() => {

  tempo -= 1;

  if(tempo < 0){      
    window.location.href = 'vitoria.html';
    clearInterval(criaMosca);
    clearInterval(cronometro);

  } else { document.getElementById('cronometro').innerHTML = tempo;
  }
}, 1000);

const posicaoRandom = () => {

  if(document.getElementById('mosquito')){
  document.getElementById('mosquito').remove();

    if(vidas > 3){
      window.location.href = 'gameover.html';
    } else {
      document.getElementById(`v${vidas}`).src="../assets/images/coracao_vazio.png";
      vidas++;
  }
}

  let posicaoX = Math.floor(Math.random() * largura) - 90;
  let posicaoY = Math.floor(Math.random() * altura) - 90;
  posicaoX = posicaoX < 0 ? 0 : posicaoX;
  posicaoY = posicaoY < 0 ? 0 : posicaoY;
  
  const mosquito = document.createElement('img');
  mosquito.src = '../assets/images/mosca.png';
  mosquito.className = tamanhoAleat() + ' ' + ladoAleat();
  mosquito.style.left = posicaoX + 'px';
  mosquito.style.top = posicaoY + 'px';
  mosquito.style.position = 'absolute';
  mosquito.id = 'mosquito';
  mosquito.onclick = function() {
    this.remove();
  };
  
  document.body.appendChild(mosquito);
}

const tamanhoAleat = () => {
  let classe = Math.floor(Math.random() * 4);
  
  switch(classe){
    case 0:
      return 'mosquito1';
    case 1:
      return 'mosquito2';
    case 2:
      return 'mosquito3';
    case 3:
      return 'mosquito4';
  }
}

const ladoAleat = () => {
  let classe = Math.floor(Math.random() * 2);
  
  switch(classe){
    case 0:
      return 'ladoA';
    case 1:
      return 'ladoB';
  }
}
