document.write("Ejercicio 1 <br>");
document.write(4.3>=4);
document.write("<br>");
document.write(1==2);
document.write("<br>");
document.write(4<4);
document.write("<br>");
document.write(2!==5);
document.write("<br>");
document.write(5=='5');
document.write("<br>");
document.write(5==='5');
document.write("<br>");
document.write(5==5);
document.write("<br>");
document.write(5===5);
document.write("<br>");
document.write("Ejercicio 2<br>");
a = 2
b = 1
c = 6
d = 4
if ((a+b) > (c+d)) {
    document.write("a+b > c+d")
}
else if ((a+b) < (c+d)) {
    document.write("a+b < c+d")
}
document.write("<br>")
document.write("Ejercicio operadores logicos, puesto por el profesor<br>")
let hora = 14
if ((hora>=9)&&(hora<=14)) {
    document.write("Sant Boi")
}
if ((hora>=15)&&(hora<=20)) {
    document.write("Castelldefels")
}
if ((hora<9)&&(hora>20)){
    document.write("No tengo clase")    
}
if ((hora<15)&&(hora>14)){
    document.write("No tengo clase")    
}
document.write("<br>")
document.write("Ejercicio 3<br>")
angulo1 = 50
angulo2 = 70
angulo3 = 70
if ((angulo1+angulo2+angulo3)==180) {
    document.write("Crean un triangulo")
}
if (((angulo1+angulo2+angulo3)<180)||(angulo1+angulo2+angulo3)>180) {
    document.write("No crean un triangulo")
}
document.write("<br>")
document.write("Ejercicio 4<br>")
variable = 17
if ((variable % 2) == 0) {
    document.write("Es un numero par")
} else {
    document.write("Es un numero impar")
}
document.write("<br>")
document.write("Ejercicio 5<br>")
num1 = 2
num2 = 3
num3 = 4
if ((num1>num2)&&(num1>num3)) {
    document.write("num1 es el mayor")
}
if ((num2>num1)&&(num2>num3)) {
    document.write("num2 es el mayor")
}
if ((num3>num1)&&(num3>num2)) {
    document.write("num3 es el mayor")
}
document.write("<br>")
