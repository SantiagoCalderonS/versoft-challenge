const router = require("express").Router();

router.get("/", (req, res)=>{ res.json({mensaje:"ruta"})})

/*endpoint de la API 
http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key} // con la info proporcionada por el usuario se buscaran los posibles resultados,
 el usuario escogera el deseado y con la latitud y la longitud se busacara la info

https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key} // dara la info a renderizar

*/


module.exports= router