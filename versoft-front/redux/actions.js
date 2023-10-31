import axios from "axios"
import { iso31661 } from "iso-3166"


function par (code){//esta funcion es para obtener el nombre del pais por medio del codigo iso31661

    let pais = ""

    iso31661.forEach((I)=>{
        I.alpha2 === code? pais = I.name : ""
    })

    return pais
}

//funciones que modificaran el estado global, se usan mediante un useDispatch() en los componentes -en mi caso los instancio como const dispatch = useDispatch()

export const conseguir_municipios = ({pais, ciudad}) =>{//obtiene la lista de ciudades que coincidan con la info proporcionada
    return async (dispatch) => {
        try {
            const {data} = await axios.get(`http://localhost:3001/ubicacion?pais=${pais}&ciudad=${ciudad}`); // request
            
           data.map((L)=>{
                L.pais = par(L.pais)
            })
            console.log(data)


            return dispatch({
                type: "CONSEGUIR_LISTA",
                payload: data,
            });
        } catch (error) {
            return dispatch({
            type: "ERROR_LISTA", //caso que no se encuentren resultados
        });
        }
    };
}

export const conseguir_info = (lat, lon) =>{//entrega la info del sitio en cuestion mediante las coordenadas
    return async (dispatch) => {
        try {
            const {data} = await axios.get(`http://localhost:3001/info?lat=${lat}&lon=${lon}`); // request
            console.log(data)

            data.pais = par(data.pais)

            console.log(data)

            return dispatch({
                type: "CONSEGUIR_INFO",
                payload: data,
            });
        } catch (error) {
         
          return dispatch({
            type: "ERROR_INFO" //caso de que no obtenga info
        });
        }
    };
}

export const borrar_errores = () =>{ //resetea los errores
    return{
        type: "BORRAR_ERRORES"
    }
}

export const borrar_info = () =>{ //borra la info almacenada
    return{
        type: "BORRAR_INFO"
    }
}

export const info_usuario = (info) => {//datos del usuario
    return{
        type: "USUARIO",
        payload: info
    }
}

export const sin_info_usuario = () => {//si no se dio acceso a la ubicacion del usuario 
    return{
        type: "ERROR_USER"
    }
}
