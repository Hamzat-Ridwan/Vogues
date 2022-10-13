import { CHANGE_THEME } from "./theme-type";

const INITIAL_STATE ={
    mode: ''
}

const themeReducer = (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case CHANGE_THEME:
            return{
                ...state,
                mode: action.payload
            }
        default:
            return state
    }
}

export default themeReducer