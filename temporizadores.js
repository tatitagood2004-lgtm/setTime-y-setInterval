

// let timeoutID = setTimeout(() => {
// console.log("¡Hola despues de 3 segundos");
// },3000);

// console.log("Temporizando el programa");

// setTimeout(() => {
//     clearTimeout(timeoutID);
//     console.log("Cancele el setTimeout");
// },1000);

// const interval = setInterval(() =>{
//    const ahora = new Date();
//    console.log(ahora.getHours(), ahora.getMinutes(), ahora.getSeconds());

// },2000);

// setTimeout(() =>{
// clearInterval(interval);
// },10000);



// ¿Cuándo es necesario cancelarlo? Si queremos evitar que la acción ocurra
// en el futuro (por ejemplo, porque ya no aplica o se tomó otra decisión).

let timeoutID = setTimeout(() => {
console.log("¡Hola despues de 3 segundos");
},3000);

console.log("Temporizando el programa");

 //Cancelamos el setTimeout ANTES de que se cumplan los 3 segundos.
// ¿Por qué? Para que el mensaje NO se ejecute si ya no corresponde.

setTimeout(() => {
    clearTimeout(timeoutID);
    console.log("time cancelado");
},1000);

console.log("SetInterval creado (empezara ejecutandose cada 1s")

// Creamos un intervalo para imprimir cada segundo.
// ¿Cuándo conviene cancelarlo? Cuando ya cumplió su propósito (ej: después de 5s),
// o para evitar que quede corriendo indefinidamente y siga gastando recursos.

const interval = setInterval(() =>{
   const ahora = new Date();
   console.log(ahora.getSeconds());

},1000);

console.log("setInterval creado: empezará a ejecutar cada 1s");

// Cancelamos el intervalo después de 5 segundos.
// ¿Por qué? Porque ya no queremos seguir imprimiendo cada segundo.

setTimeout(() =>{
clearInterval(interval);
console.log("Intervalo cancelado");
},5000);