const initialState = {
municipios: [], //lista de resultados de la busqueda por nombre
info: {},//informacion procesada a renderizar
user: {},//datos de posicion del usuario
error_info: false,
error_municipios: false,
error_user: false
}

export default function reducer ( state = initialState, actions) {
    
    switch(actions.type){
        
        case 'CONSEGUIR_LISTA':
            return {...state, error_municipios: false ,municipios: actions.payload};

        case "CONSEGUIR_INFO":
            return {...state, error_info: false ,info: actions.payload}

        case "BORRAR_INFO":
            return {...state ,info: {}}

        case "BORRAR_ERRORES":
            return {...state, error_info: false, error_municipios: false, error_user: false}

        case "USUARIO":
            return {...state, error_user: false ,user: actions.payload}

        case "ERROR_LISTA":
            return {...state, error_municipios: true}

        case "ERROR_USER":
            return {...state, error_user: true}
        
        case "ERROR_INFO":
            return {...state, error_info: true}    

        default: return {...state};
    }
};
        