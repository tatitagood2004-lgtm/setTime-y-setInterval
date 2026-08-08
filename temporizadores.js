

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



let timeoutID = setTimeout(() => {
console.log("¡Hola despues de 3 segundos");
},3000);

console.log("Temporizando el programa");

setTimeout(() => {
    clearTimeout(timeoutID);
    console.log("mensaje cada 1 segundo");
},1000);

const interval = setInterval(() =>{
   const ahora = new Date();
   console.log(ahora.getSeconds());

},1000);

setTimeout(() =>{
clearInterval(interval);
},5000);