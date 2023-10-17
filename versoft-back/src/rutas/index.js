const ruta_ubicacion = require("./ruta_ubicacion")
const ruta_info = require("./ruta_info")

const router = require("express").Router();

router.use("/ubicacion", ruta_ubicacion)
router.use("/info", ruta_info)

module.exports= router


/*endpoint a usar de la API 
http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key} // 
con la info proporcionada por el usuario se buscaran los posibles resultados,
 el usuario escogera el deseado y con su latitud y la longitud se busacara la info

https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key} // mediante la latitud y longitud dara la info a renderizar

https://api.openweathermap.org/data/2.5/weather?id={city id}&appid={API key}https://api.openweathermap.org/data/2.5/weather?id={city id}&appid={API key} //para una busqueda mas especifica

https://openweathermap.org/img/wn/{icon}@2x.png // esto sera la url de la imagen que aparecera en la parte del front
*/
