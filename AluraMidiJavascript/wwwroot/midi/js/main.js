function tocaSom(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1]
    //template string
    const idAudio = `#som_${instrumento}`;
    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    //onkeydown, é quando o usuário pressionar o teclado...Enquando ficar pressionando, o botão ficará vermelho add(ativa)
    tecla.onkeydown = function () {
        tecla.classList.add('ativa');
    }

    //onkeyup é para remove a cor vemelha do botão, quando o usuário parar de pressionar o botão.
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}

















///*Javascript do Alura Fone*/ 
//const listaDeTeclas = document.querySelectorAll('input[type=button]');
//const inputTel = document.querySelector('input[type=tel]');

//for (indice = 0; indice < listaDeTeclas.length; indice++) {

//    const tecla = listaDeTeclas[indice];

//    tecla.onclick = function () {
//        inputTel.value = inputTel.value + tecla.value;
//    }
//}








