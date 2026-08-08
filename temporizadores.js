

setTimeout(() => {
console.log("¡Hola despues de 3 segundos");
},3000);

const interval = setInterval(() =>{
   const ahora = new Date();
   console.log(ahora.getHours());
   console.log(ahora.getMinutes());
   console.log(ahora.getSeconds());

},2000);

setTimeout(() =>{
clearInterval(interval);
},10000);

