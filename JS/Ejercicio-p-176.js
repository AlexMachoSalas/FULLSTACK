const sumar = (a,b) => a + b;
const restar = (a,b) => a - b;
const multiplicar = (a,b) => a * b;
const dividir = (a,b) => a / b;
console.log(sumar(1,2));
console.log(restar(5,1));
console.log(multiplicar(3,2));
console.log(dividir(4,2));
const callback = (resultado) => {console.log(resultado)}
const sumar1 = (a,b,callback) => callback(a + b);
const restar1 = (a,b,callback) => callback(a - b);
const multiplicar1 = (a,b,callback) => callback(a * b);
const dividir1 = (a,b,callback) => callback(a * b);
sumar1(1,5,callback);
restar1(5,1,callback);
multiplicar1(3,2,callback);
dividir1(4,2,callback);
sumar1(1, 2, (resultado) => {console.log(resultado);});
restar1(1, 2, (resultado) => {console.log(resultado);});
multiplicar1(1, 2, (resultado) => {console.log(resultado);});
dividir1(1, 2, (resultado) => {console.log(resultado);});