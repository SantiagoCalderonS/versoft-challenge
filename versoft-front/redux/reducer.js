const initialState = {
paises: [],
info: {},
user: {}
}

export default function reducer ( state = initialState, actions) {
    
    switch(actions.type){
        
        case 'CONSEGUIR_LISTA':
            return {...state, paises: actions.payload};

        case "CONSEGUIR_INFO":
            return {...state, info: actions.payload}

        case "BORRAR_INFO":
            return {...state, info: {}}

        case "USUARIO":
            return {...state, user: actions.payload}

        default: return {...state};
    }
};
        