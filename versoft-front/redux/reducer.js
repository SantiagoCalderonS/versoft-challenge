const initialState = {
municipios: [], //lista de resultados de la busqueda por nombre
info: {},//informacion procesada a renderizar
user: {},//datos de posicion del usuario
error_info: {valor: false, mensaje: "SIN INFORMACION"},
error_municipios:  {valor: false, mensaje: "SIN RESULTADOS"},
error_user:  {valor: false, mensaje: "PRESTE SU UBICACON"}
}

export default function reducer ( state = initialState, actions) {
    
    switch(actions.type){
        
        case 'CONSEGUIR_LISTA':
            return {...state, error_municipios: {...state.error_municipios, valor :false} ,municipios: actions.payload};

        case "CONSEGUIR_INFO":
            return {...state, error_info: {...state.error_info, valor :false} ,info: actions.payload}

        case "BORRAR_INFO":
            return {...state ,info: {}}

        case "BORRAR_ERRORES":
            return {...state, error_info:  {...state.error_info, valor :false}, error_municipios: {...state.error_municipios, valor :false}, error_user: {...state.error_user, valor :false}}

        case "USUARIO":
            return {...state, error_user:  {...state.error_user, valor :false} ,user: actions.payload}

        case "ERROR_LISTA":
            return {...state, error_municipios:  {...state.error_municipios, valor: true}}

        case "ERROR_USER":
            return {...state, error_user:  {...state.error_user, valor: true}}
        
        case "ERROR_INFO":
            return {...state, error_info:  {...state.error_info, valor: true}}    

        default: return {...state};
    }
};
        