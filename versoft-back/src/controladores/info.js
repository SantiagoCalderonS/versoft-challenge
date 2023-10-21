const axios = require("axios");

//______________________DATOS DE ENTORNO_______________
require("dotenv").config();
const {APIKEY} = process.env
//______________________________________________________

const obtener_info = async(req, res)=>{/*funcion que hace una peticion a la API requerida, 
                que trae la informacion del clima de un lugar en especifico, usando su latitud y longitud*/ 

    const {lat, lon} = req.query

    try {

        const {data} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}`)

         if (!data) return res.status(404).send("No se encontraron paises")
        
        const respuesta = {//objeto que contiene los datos necesarios y procesados para un uso mas sencillo al llegar al front
            nombre: data.name,
            horaLocal: new Date((new Date().getTime())+data.timezone*1000).toISOString().split("").splice(11, 5).join(""),//esto es para obtener la hora local del lugar
            pais: data.sys.country,
            clima : {
                nombre : data.weather[0].main,
                descripcion : data.weather[0].description,
                iconoUrl: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
            },
            datos : {
                temperatura : data.main.temp,
                presion : data.main.pressure,
                humedad : data.main.humidity
            }
        }

        return res.status(200).json(respuesta)

    } catch (error) {
        return res.status(404).send(error.message)
    }
}

module.exports = {
    obtener_info
}

//  https://openweathermap.org/img/wn/{icon}@2x.png