const axios = require("axios")

const obtener_ubicacion_por_nombre = async(req, res)=>{

    const {ciudad, pais} = req.query

    try {
        const {data} = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${ciudad},${pais}&limit=5&appid=90d6373ae83c945ed2fcd537d83975b1`)
        console.log("funciona")
        const paises = []

        if (data.length < 1){
            throwError()
        }

        data.forEach( P => {
            paises.push({
                nombre: P.name,
                latitud: P.lat,
                longitud : P.lon,
                estado : P.state,
                pais: P.country
            })
        });

        res.json(paises)
    } catch (error) {
        res.send("miembro")
    }
}

module.exports = {
    obtener_ubicacion_por_nombre
}