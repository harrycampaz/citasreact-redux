import { MOSTRAR_CITAS, AGREGAR_CITAS, BORRAR_CITAS } from "../actions/types";

const initialState = {
    citas: []
}

export default function(state = initialState, action){
    switch(action.type){
        case MOSTRAR_CITAS:
            return {
                ...state
            }
        default:
            return state;
    }
}