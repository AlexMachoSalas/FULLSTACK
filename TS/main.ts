// función tipada
function sumar1(x: number, y: number): number {
    return x + y;
    }
    // función anónima tipada con inferencia de tipo
    const sumar2 = function(x: number, y: number): number { return x + y; };
    // función de flecha tipada con inferencia de tipo
    const sumar3 = (x: number, y: number): number => x + y;
    // función de flecha tipada sin inferencia de tipo (se utiliza el tipo Function)
    const sumar4: Function = (x: number, y: number): number => x + y;
    // creación de una variable que posteriormente almacenará una función
    let sumar5: Function;
    // error
// sumar5 = 5;
sumar5 = sumar4;
console.log(sumar1(3, 2));
