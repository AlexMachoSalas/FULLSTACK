let numeros = [0,1,2,3,4,5]
for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
    
}
for (let numero of numeros) {
    console.log(numero)
}
// ejercicio 2
let colores = ["amarillo","azul","rojo"]
for (let i = 0; i < colores.length; i++) {
    console.log(colores[i]);
    
}
// ejercicio 4
let elementos1 = ["mar","rio","nueves","sol","dia"]
let elementos2 = ["oceano","lago","nueves","soleado","dia"]
let contador=0;
for (let element of elementos1) {
    for (let element1 of elementos2) {
        if (element1==element) {
            contador++
        }
    }
}
console.log(contador)