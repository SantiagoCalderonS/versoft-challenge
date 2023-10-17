// en cada ruta se puede seguir especificando en endpoint de la peticion ".../####"
//se requiere y se instancia eL Router, se le da un nombre caracteristico

const ruta_info = require("express").Router();

//importar la funcion que dara la respuesta
const {obtener_info} = require("../controladores/info")


//el metodo puesto divide las peticiones con igual endpoint
//             \/
ruta_info.get("/", obtener_info);
//                      /\
//               se ejecuta el controlador, la funcion que procesara la info de las response


/*
escribirlo directamente seria:

ruta_info.get( "/" , ( req, res)=>{
    res.send("respuesta");   
})
*/


module.exports = ruta_info