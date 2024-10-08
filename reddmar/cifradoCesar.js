function cifrarMensaje(mensaje, llaveCifrado) {
    // Inicializo el abecedario
    let abecedario = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";

    let mensajeCifrado = ""
    // Convierto el mensaje a mayúsculas para que coincida con abecedario
    mensaje = mensaje.toUpperCase();

    // Bucle para iterar sobre cada carácter del mensaje
    for (let index = 0; index < mensaje.length; index++) {
        // Obtengo la letra en el mensaje con el índice actual
        let letraActual = mensaje[index];

        // Obtengo el índice de la letra actual en abecedario
        let indiceActual = abecedario.indexOf(letraActual);
        // Obtengo el índice de la letra actual en el abecedario y le sumo la llave de cifrado (para desplazarla).
        // El módulo 27 se usa para asegurar que, si el índice excede el tamaño del abecedario, vuelva al principio.
        // Ejemplo: Si la letra es "Z" (índice 26), al sumarle la llaveCifrado (3), obtenemos 29.
        // Luego, 29 % 27 = 2, lo que nos da la letra "C" en el abecedario
        let letraCifrada = (indiceActual + (llaveCifrado % 27)) % 27;

        // Si la letra actual no está en el abecedario (por ejemplo, un espacio o una coma), se mantiene sin cambios
        if (indiceActual == -1) {
            mensajeCifrado += letraActual;
        } else {
            // Si está en el abecedario, añadimos la letra cifrada
            mensajeCifrado += abecedario[letraCifrada];
        }
    }
    return mensajeCifrado;
}

function descifrarMensaje(mensaje, llaveDescifrado) {
    // Inicializo el abecedario
    let abecedario = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";

    mensajeDescifrado = "",
    // Convierto el mensaje a mayúsculas para que coincida con abecedario
    mensaje = mensaje.toUpperCase();

    // Bucle para iterar sobre cada carácter del mensaje
    for (let index = 0; index < mensaje.length; index++) {
        // Obtengo la letra en el mensaje con el índice actual
        let letraActual = mensaje[index];

        // Obtengo el índice de la letra actual en abecedario
        let indiceActual = abecedario.indexOf(letraActual);
        // Obtengo el índice de la letra actual en el abecedario y le sumo la llave de cifrado (para desplazarla).
        // El módulo 27 se usa para asegurar que, si el índice excede el tamaño del abecedario, vuelva al principio.
        // Ejemplo: Si la letra es "Z" (índice 26), al sumarle la llaveCifrado (3), obtenemos 29.
        // Luego, 29 % 27 = 2, lo que nos da la letra "C" en el abecedario
        let letraDescifrada = (indiceActual - (llaveDescifrado% 27) + 27) % 27;

        // Si la letra actual no está en el abecedario (por ejemplo, un espacio o una coma), se mantiene sin cambios
        if (indiceActual == -1) {
            mensajeDescifrado += letraActual;
        } else {
            // Si está en el abecedario, añadimos la letra cifrada
            mensajeDescifrado += abecedario[letraDescifrada];
        }
    }
    return mensajeDescifrado;
}

mensajeCifrado = cifrarMensaje("Hola, soy Reddmar", 5);
console.log(mensajeCifrado); // 'KRÑD, VRB UHGGODU'

mensajeDescifrado = descifrarMensaje(mensajeCifrado, 5)
console.log(mensajeDescifrado); // 'HOLA, SOY REDDMAR'
