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
const banco2 = {
    gestor: "25",
    cliente: "105",
    mensaje(){
        console.log("Hola cliente " + this.cliente)
    },
    trasferencia(){
        console.log("Su tranferencia ha sido realizada por el gestor " + this.gestor)
    }
}
const banco3 = {
    gestor: "12",
    cliente: "30",
    mensaje(){
        console.log("Hola cliente " + this.cliente)
    },
    trasferencia(){
        console.log("Su tranferencia ha sido realizada por el gestor " + this.gestor)
    }
}
banco1.mensaje()
banco1.trasferencia()
banco2.mensaje()
banco2.trasferencia()
banco3.mensaje()
banco3.trasferencia()