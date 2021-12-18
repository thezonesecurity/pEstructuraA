import React, {useReducer} from "react";
import AppReducer from "./AppReducer";
import AppContext from "./AppContext";
import Types from "./ConstantTypes";
//es el conjunto de variables
const DataState = (props: any) => {
    const initialState = {
        searchbarVisible: false,
        uriphoto: ""
    }
    const [state, dispatch] = useReducer(AppReducer, initialState);
    const changeSearchBarVisible = (value: boolean) => {
        dispatch({type: Types.SEARCHBARVISIBLE, payload: value});
    }
    const changeUri= (value: boolean) => {
        dispatch({type: Types.CHANGEURI, payload: value});
    }
    return (
        <AppContext.Provider value={{searchbarVisible: state.searchbarVisible,
         changeSearchBarVisible, uriphoto: state.uriphoto, changeUri, dispatch}}>
            {props.children }
        </AppContext.Provider>
    )
}
export default DataState;