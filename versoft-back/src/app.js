const express = require("express")
const app = express(); // app es la instancia de express
const cors= require("cors");
const morgan = require("morgan");

const router = require("./rutas/index")

app.use(cors()); //

app.use(morgan("dev")); //

app.use(express.json()); // transforma json en objetos

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");         // permite conexion de cualquier direccion 
    res.header("Access-Control-Allow-Credentials", "true");
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

app.use("/", router); // usa el router como middleware, que manejara los endpoints de las peticiones


module.exports = app;