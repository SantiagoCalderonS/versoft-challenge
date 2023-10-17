const ruta_ubicacion = require("express").Router();
const {obtener_ubicacion_por_nombre} = require("../controladores/ubicacion")

ruta_ubicacion.get("/", obtener_ubicacion_por_nombre);

module.exports = ruta_ubicacion