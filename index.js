import figlet from "figlet";

// Funciona exactamente igual
console.log(figlet.textSync("JS con Bun"));

const server = Bun.serve({
  port: 3000,
  fetch(req) {
    return new Response("¡Hola desde JavaScript puro!");
  },
});

console.log(`Servidor en http://localhost:${server.port}`);
