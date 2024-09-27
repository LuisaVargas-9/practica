let Abecedario = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
console.log(Abecedario.slice(8, 9));
console.log(Abecedario.indexOf(""));

let input = "HOLA, SOY LUISA";

//let lista = [1,2,3,4,5]
// for (let index = 0; index < 30; index++) {
//     console.log(lista[index%5]);   
// }

function CifrarMensaje(input, llaveCifrado) {
    let mensajeCifrado = "";
    for (let i = 0; i < input.length; i++) {
        let letraActual = input[i]
        console.log(letraActual);
        //let letraActual = input.slice(i, i + 1);
        let indiceAbecedario = Abecedario.indexOf(letraActual);
        let posicionCifrada = (indiceAbecedario + (llaveCifrado%27))%27;
        console.log(posicionCifrada);
        if (indiceAbecedario == -1) {
            mensajeCifrado += letraActual
        } else {
            mensajeCifrado += Abecedario[posicionCifrada];
        }
        // if (letraActual == "X") {
        //     letraActual = "A";
        //     mensajeCifrado += letraActual;
        //     //posicionCifrada = 0
        // } else if (letraActual == "Y") {
        //     letraActual = "B";
        //     mensajeCifrado += letraActual;
        // } else if (letraActual == "Z") {
        //     letraActual = "C";
        //     mensajeCifrado += letraActual;
        // } else if (letraActual == "," || letraActual == " ") {
        //     mensajeCifrado += letraActual;
        // } else {
        //     mensajeCifrado += Abecedario.slice(posicionCifrada, posicionCifrada + 1);
        // }
    }
    return mensajeCifrado;
}

cifradoCesar = CifrarMensaje(input, 3);
console.log(cifradoCesar);

let inputCifrado = cifradoCesar
function DescifrarMensaje(inputCifrado, llaveCifrado){
    let mensajeDescifrado = "";
    for (let i = 0; i < inputCifrado.length; i++) {
        let letraActual = inputCifrado[i]
        console.log(letraActual);
        //let letraActual = input.slice(i, i + 1);
        let indiceAbecedario = Abecedario.indexOf(letraActual);
        let posicionCifrada = (indiceAbecedario - (llaveCifrado%27) +27)%27;
        console.log(posicionCifrada);
        if (indiceAbecedario == -1) {
            mensajeDescifrado += letraActual
        } else {
            mensajeDescifrado += Abecedario[posicionCifrada];
        }
    }
    return mensajeDescifrado
}

mensajeFinal = DescifrarMensaje(inputCifrado, 3)
console.log(mensajeFinal);
