const axios = require("axios")

const obtener_info = async(req, res)=>{

    const {lat, lon} = req.query

    try {
        const {data} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=90d6373ae83c945ed2fcd537d83975b1`)
        console.log(data)
        
        !data && throwError()
        
        const respuesta = {
            nombre: data.name,
            zonaHoraria: data.timezone,
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

        console.log(respuesta)
       
        res.json(respuesta)
    } catch (error) {
        res.send(error.message)
    }
}

module.exports = {
    obtener_info
}

//  https://openweathermap.org/img/wn/{icon}@2x.png