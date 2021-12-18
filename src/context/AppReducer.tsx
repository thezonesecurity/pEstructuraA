//reducer es una funcion 
import { types } from "@babel/core";
import Types from "./ConstantTypes";

export interface ActionType {
    type: string,
    payload: any
}
export default (state: any, action: ActionType) => { //es una funcion anonima
    switch (action.type) {
        case Types.CHANGEURI: {
            return {
                ...state,
                uriphoto: action.payload
            }
        }
        case Types.SEARCHBARVISIBLE: {
            return {
                ...state,
                searchbarVisible: action.payload
            }
        }
        default:
            return state;
    }
}