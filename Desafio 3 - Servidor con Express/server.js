const express = require("express");
const Contenedor = require("./indexManejoArchivos");

const app = express();
const PORT = 8080;

const contenedor = new Contenedor("productos.txt");

app.get("/productos", async (req, res) => {
    const productos = await contenedor.getAll();
    res.send(productos);
});

app.get("/productoRandom", async (req, res) => {
    const productos = await contenedor.getAll();
    let numeroRandom = Math.floor(Math.random()*productos.length);
    res.send(productos[numeroRandom]);
});

const server = app.listen(PORT, () => {
    console.log(`Server listening: PORT ${PORT}`);
});

server.on(`error`, err => console.log(`error: ${err}`));