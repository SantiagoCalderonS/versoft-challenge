const ruta_info = require("express").Router();


const {obtener_info} = require("../controladores/info")


ruta_info.get("/", obtener_info);


module.exports = ruta_info

/* 
//en cada ruta se puede seguir especificando el endpoint de la peticion ".../####"
//se requiere y se instancia Router de Express, se le da un nombre caracteristico

const ruta_info = require("express").Router();

//importar la funcion que dara la respuesta (res)
const {obtener_info} = require("../controladores/info")


//el metodo puesto divide las peticiones con igual endpoint
             \/
ruta_info.get("/", obtener_info);
                      /\
               //se ejecuta el controlador, la funcion que procesara la info de las response



//escribirlo directamente seria:

ruta_info.get( "/" , ( req, res)=>{
    res.send("respuesta");   
})
*/