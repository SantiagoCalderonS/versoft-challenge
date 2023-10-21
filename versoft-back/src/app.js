const express = require("express")
const app = express(); // app es la instancia de express
const cors= require("cors");
const morgan = require("morgan");

const router = require("./rutas/index")//se importan las rutas atraves de index.js

app.use(cors()); //

app.use(morgan("dev")); //permite una clara visualizacion de las peticiones en la consola, para monitoriar el funcionamiento del server

app.use(express.json()); // transforma json en objetos

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");         // permite conexion de cualquier direccion 
    res.header("Access-Control-Allow-Credentials", "true"); //esto lo copie de un proyecto grupal previo
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.header(
        "Access-Control-Allow-Methods",
        "GET, POST, OPTIONS, PUT, DELETE"
    );
    next();
});

app.use("/", router); // usa el router como middleware, que manejara las peticiones


module.exports = app;