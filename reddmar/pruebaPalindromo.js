palindromo = "Anita lava la tina"
let auxiliar


if(typeof(palindromo) === "string"){
    auxiliar = "palindromo"
}else{
    auxiliar = "capicua"
}

pattern = /[\^*@!"#$%&/()=?¡!¿'\\.,;]/
palindromo = palindromo
palindromo = palindromo
    .toString()
    .replace(pattern, "")
    .toLowerCase()
    .split(" ")
    .join("");
let esPalindromo = true

for (let i = 0; i < palindromo.length; i++) {
    const element = palindromo[i];
    j = palindromo.length -1-i
    if (palindromo[i] !== palindromo[j]) {
        esPalindromo = false
        break
    }
}

if (esPalindromo) {
    console.log(`Es un ${auxiliar}.`);
} else{
    console.log(`No es un ${auxiliar}.`);
    
}
