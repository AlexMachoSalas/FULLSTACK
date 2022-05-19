for (let i = 0; i < 11; i++) {
    document.write("5x" + i + "=" + i*5 + "<br>");
}

const array=['En','un','lugar','de','la','mancha'];
const len = array.length;
    for(let i = 0; i < len; i++) {
        console.log(array[i]);
    }
    const nombre = prompt("Escriba su nombre", "Escriba aquí");
    for (let i = 0; i < 11; i++) {
        document.write(nombre + "<br>");
    }
    let numero = prompt("Escriba un numero entero positivo", "Escriba aquí");
    for (let i = numero; i >= 0; i--) {
        if (i==0) {
            document.write(i)
        } else {
            document.write(i + ", ");
        } 
    }
