const axios = require("axios")

//________________________________DATOS DE ENTORNO
require("dotenv").config();
const {APIKEY} = process.env
//___________________________________

const obtener_ubicacion_por_nombre = async(req, res)=>{/*funcion que hace una peticion a la API requerida, 
que trae una lista de sitios con una latitud y una longitud en especificas, usando un nombre y pais*/

    const {ciudad, pais} = req.query

    try {
        const {data} = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${ciudad},${pais}&limit=5&appid=${APIKEY}`)
        
        const paises = []//arreglo de paises

        if (data.length < 1){//posible caso de resultados = 0
            return res.status(404).send("No se encontraron paises")
        }

        data.forEach( P => {//el arreglo de la peticion de procesa para un mejor manejo en el front
            paises.push({
                nombre: P.name,
                latitud: P.lat,
                longitud : P.lon,
                estado : P.state,
                pais: P.country
            })
        });

        return res.status(200).json(paises)
    } catch (error) {
        return res.status(404).send(error.message)
    }
}

module.exports = {
    obtener_ubicacion_por_nombre
}