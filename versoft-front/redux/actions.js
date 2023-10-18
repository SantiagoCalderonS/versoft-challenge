import axios from "axios"

export const conseguir_paises = (obj) =>{
    return async (dispatch) => {
        try {
            const {data} = await axios.get(`http://localhost:3001/ubicacion`, obj); // request
            console.log(data)
            return dispatch({
                type: "CONSEGUIR_LISTA",
                payload: data,
            });
        } catch (error) {
         
          return dispatch({
            type: "ERROR",
            payload: true
        });
        }
    };
}

export const conseguir_info = (lat, lon) =>{
    return async (dispatch) => {
        try {
            const {data} = await axios.get(`http://localhost:3001/info?lat=${lat}&lon=${lon}`); // request
            console.log(data)
            return dispatch({
                type: "CONSEGUIR_INFO",
                payload: data,
            });
        } catch (error) {
         
          return dispatch({
            type: "ERROR",
            payload: true
        });
        }
    };
}

export const borrar_info = () =>{
    return{
        type: "BORRAR_INFO"
    }
}

export const info_usuario = (info) => {
    return{
        type: "USUARIO",
        payload: info
    }
}

