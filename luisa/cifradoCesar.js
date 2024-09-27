let Abecedario = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
console.log(Abecedario.slice(8, 9));
console.log(Abecedario.indexOf(""));

let input = "HOLA, SOY LUISA";

function CifrarMensaje(input) {
    let mensajeCifrado = "";
    for (let i = 0; i < input.length; i++) {
        let letraActual = input.slice(i, i + 1);
        let posicionCifrada = Abecedario.indexOf(letraActual) + 3;
        if (letraActual == "X") {
            letraActual = "A";
            mensajeCifrado += letraActual;
            //posicionCifrada = 0
        } else if (letraActual == "Y") {
            letraActual = "B";
            mensajeCifrado += letraActual;
        } else if (letraActual == "Z") {
            letraActual = "C";
            mensajeCifrado += letraActual;
        } else if (letraActual == "," || letraActual == " ") {
            mensajeCifrado += letraActual;
        } else {
            mensajeCifrado += Abecedario.slice(posicionCifrada, posicionCifrada + 1);
        }
    }
    return mensajeCifrado;
}

cifradoCesar = CifrarMensaje(input);
console.log(cifradoCesar);