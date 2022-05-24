// Ejercicio 1
const banco1 = {
    gestor: "10",
    cliente: "50",
    mensaje(){
        console.log("Hola cliente " + this.cliente)
    },
    trasferencia(){
        console.log("Su tranferencia ha sido realizada por el gestor " + this.gestor)
    }
}
banco1.mensaje()
banco1.trasferencia()