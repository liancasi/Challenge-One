let textoDigitado =  document.getElementById('texto');
console.log(textoDigitado);
let resultadoTexto = document.querySelector('.cuadro-resultado');



function encriptar(){
    let textoDigitado = texto.value.toLowerCase();
    let resultado = '';
    for (var i = 0; i < textoDigitado.length; i++) {
        let letra = textoDigitado[i];
        switch (letra) {
            case 'a':
                resultado += 'ai';
                break;
            case 'e':
                resultado += 'enter';
                break;
            case 'i':
                resultado += 'imes';
                break;
            case 'o':
                resultado += 'ober';
                break;
            case 'u':
                resultado += 'ufat';
                break;
            default:
                resultado += letra;
        }
    }
     console.log(resultado);
     let contenidoResultado = resultadoTexto.querySelector('.contenido-resultado');
     resultadoTexto.innerHTML = '';
     let parrafoResultado = document.createElement('p');
     parrafoResultado.textContent = resultado;
     resultadoTexto.appendChild(parrafoResultado);

     let contenedorBoton = resultadoTexto.querySelector('.contenedor-botones');
     let botonCopiar = document.createElement('button');
     botonCopiar.textContent = 'Copiar';
     botonCopiar.classList.add('boton-copiar');
     parrafoResultado.appendChild(botonCopiar);

     botonCopiar.addEventListener('click', () => {
        navigator.clipboard.writeText(resultado).then(()=>{
            alert('Texto copiado al portapapeles');
        })
        .catch((error) => {
            console.error('Error al copiar el texto: ', error);
        });
        });
       
}

function desencriptar(){
    let textoDigitado = texto.value.toLowerCase();
    let resultado = '';
    for (let i = 0; i < textoDigitado.length; i++) {
        if (textoDigitado.substring(i, i + 2) === 'ai') {
            resultado += 'a';
            i++; // Avanzar un carácter más después de 'ai'
        } else if (textoDigitado.substring(i, i + 5) === 'enter') {
            resultado += 'e';
            i += 4; // Avanzar cuatro caracteres más después de 'enter'
        } else if (textoDigitado.substring(i, i + 4) === 'imes') {
            resultado += 'i';
            i += 3; // Avanzar tres caracteres más después de 'imes'
        } else if (textoDigitado.substring(i, i + 4) === 'ober') {
            resultado += 'o';
            i += 3; // Avanzar tres caracteres más después de 'ober'
        } else if (textoDigitado.substring(i, i + 4) === 'ufat') {
            resultado += 'u';
            i += 3; // Avanzar tres caracteres más después de 'ufat'
        } else {
            resultado += textoDigitado[i];
        }
    }

     console.log(resultado);
     let contenidoResultado = resultadoTexto.querySelector('.contenido-resultado');
     resultadoTexto.innerHTML = '';
     let parrafoResultado = document.createElement('p');
     parrafoResultado.textContent = resultado;
     resultadoTexto.appendChild(parrafoResultado);

     let contenedorBoton = resultadoTexto.querySelector('.contenedor-botones');
     let botonCopiar = document.createElement('button');
     botonCopiar.textContent = 'Copiar';
     botonCopiar.classList.add('boton-copiar');
     parrafoResultado.appendChild(botonCopiar);

     botonCopiar.addEventListener('click', () => {
        navigator.clipboard.writeText(resultado).then(()=>{
            alert('Texto copiado al portapapeles');
        })
        .catch((error) => {
            console.error('Error al copiar el texto: ', error);
        });
        });
       
}


