const persona1 = {
    nombre: 'Alejandro',
    'lugar de residencia': 'Madrid'
    };
    // Alejandro
    console.log(persona1.nombre);
    // Alejandro
    console.log(persona1['nombre']);
    // error
    //console.log(persona1.lugar de residencia);
    // en este caso son obligatorios los corchetes
    persona1['lugar de residencia'] = 'Sevilla';
    // Sevilla
    console.log(persona1['lugar de residencia']);
    const propiedad = 'nombre';
    // undefined porque busca la variable propiedad dentro del objeto persona1
    console.log(persona1.propiedad);
    // Alejandro
    console.log(persona1[propiedad]);
const persona2 = {
    nombre: 'Carmen',
    apellidos: 'González',
    datos: {
    dirección: 'Sevilla'
    }
};
// Sevilla
console.log(persona2.datos.dirección);
// undefined
console.log(persona2.datos.otrodato);
// dirección: "Sevilla"
console.log(persona2.datos);
const coche1 = { marca: 'Ford', modelo: 'Focus' };
const coche2 = { marca: 'Ford', modelo: 'Focus' };
// devuelve false porque no comparten referencia
console.log(coche1 == coche2);
// devuelve false porque no comparten referencia
console.log(coche1 === coche2);
// devuelve true porque el valor es el mismo y son de tipo string
console.log(coche1.modelo === coche2.modelo);
const coche3 = coche1;
// devuelve true porque comparten referencia
console.log(coche1 === coche3);
const x = {
    peras: 3,
    fresas: 20
};
delete x.fresas;