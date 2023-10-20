const axios = require("axios")

const obtener_info = async(req, res)=>{/*funcion que hace una peticion a la API requerida, 
                que trae la informacion del clima de un lugar en especifico, usando su latitud y longitud*/ 

    const {lat, lon} = req.query

    try {
        const {data} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=90d6373ae83c945ed2fcd537d83975b1`)
        
        
         if (!data) return res.status(404).send("No se encontraron paises")
        
        const respuesta = {//objeto que contiene los datos necesarios y procesados para un uso mas sencillo al llegar al front
            nombre: data.name,
            zonaHoraria: data.timezone,
            pais: data.sys.country,
            clima : {
                nombre : data.weather[0].main,
                descripcion : data.weather[0].description,
                iconoUrl: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
            },
            datos : {
                temperatura : data.main.temp,
                presion : data.main.pressure,
                humedad : data.main.humidity,
                nivel_del_mar: data.main.sea_level,
                nivel_del_suele: data.main.grnd_level
            }
        }

        return res.json(respuesta)

    } catch (error) {
        return res.status(404).send(error.message)
    }
}

module.exports = {
    obtener_info
}

//  https://openweathermap.org/img/wn/{icon}@2x.png