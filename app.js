const textArea =  document.querySelector('.in-texto');
const mensaje = document.querySelector('.resultado');

/*
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/ 

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value);
    let button = document.querySelector('#btn-copiar');
    mensaje.value =  textoEncriptado;
    textArea.value= '';
    button.textContent= 'Copiar';
}


function encriptar (stringEncriptada){
    let matrizCodigo =  [["e","enter"],["i","imes"],["a","ai"],["o", "ober"], ["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();
    
    for(let i=0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}

function btnDesencriptar( ){
    const textoDesencriptado = desencriptar(textArea.value);
    let button = document.querySelector('#btn-copiar');
    mensaje.value =  textoDesencriptado;
    textArea.value='';
    button.textContent="Copiar";
}

function desencriptar (stringDesencriptada) {
    let matrizCodigo =   [['enter','e'], ['imes', 'i'], ['ai', 'a'], ['ober', 'o'], ['ufat', 'u']];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i=0; i <  matrizCodigo.length; i++) {
        if (stringDesencriptada.includes(matrizCodigo[i][0])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
        }

    }
    return stringDesencriptada;
}

/*function copiarTexto(){
    let texto = mensaje.value;
    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(texto);
            console.log('Contenido copiado al portapapeles');
        } catch (err) {
            console.error('Error al copiar: ', err);
        }
    }
}*/

/*const $content = document.getElementById('resultado'),
      $btn = document.getElementById('btn-copiar');

    $btn.addEventListener('click', e => {
    $content.select();
    document.execCommand('copy');
})*/

function copiarTexto(){
    let texto = mensaje.value;
    let button = document.querySelector('#btn-copiar');

    navigator.clipboard.writeText(texto);
    button.textContent= "¡Copiado!";
     
}
