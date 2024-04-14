let vector = [];
for (let i = 1; i <= 5; i++) {
    let numero = parseInt(prompt("numero" + i + ":"));
    vector.push(numero);
}

let suma = 0;
for (let i = 0; i < vector.length; i++) {
    suma += vector[i];
}

let media = suma / vector.length;

window.alert ("La media aritmética de los numeros ingresados es: " + media);