import figlet from "figlet";

// 1. Usamos figlet para decorar un mensaje
const bienvenido = figlet.textSync("Bun es veloz!");
console.log(bienvenido);

// 2. Creamos un servidor web simple
const server = Bun.serve({
  port: 3000,
  fetch(request) {
    return new Response("¡Hola! Estás viendo un servidor creado con Bun.");
  },
});

console.log(`Servidor escuchando en http://localhost:${server.port}`);
