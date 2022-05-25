// Ejercicio 1
const banco1 = {
    gestor: "10",
    cliente: "50",
    mensaje: "Hola cliente",
    trasferencian: "Su tranferencia ha sido realizada"
}
const banco2 = {
    gestor: "25",
    cliente: "105",
    mensaje: "Hola cliente",
    trasferencia() {
        console.log("Su tranferencia ha sido realizada por el gestor " + this.gestor)
    }
}
const banco3 = {
    gestor: "12",
    cliente: "30",
    mensaje: "Hola cliente",
    trasferencia: "Su tranferencia ha sido realizada por el gestor"
}
arraybnc1=Object.keys(banco1)
arraybnc2=Object.keys(banco2)
arraybnc3=Object.keys(banco3)
console.log(arraybnc1)
console.log(arraybnc2)
console.log(arraybnc3)
for (let i = 0; i < arraybnc1.length; i++) {
    console.log(banco1[arraybnc1[i]]);
    
}
for (let i = 0; i < arraybnc2.length; i++) {
    if (typeof(banco2[arraybnc2[i]])=="function") {
        banco2[arraybnc2[i]];
    } else {
        console.log(banco2[arraybnc2[i]]);
    }
}
for (let i = 0; i < arraybnc3.length; i++) {
    console.log(banco3[arraybnc3[i]]);
    
}
console.log(typeof(banco2[arraybnc2[3]]))