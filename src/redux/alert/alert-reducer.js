import { SHOW_ALERT } from "./alert-type"

const initialState = {
    showAlert: false
}

const alertReducer = (state = initialState, { type, payload }) => {
  switch (type) {

  case SHOW_ALERT:
    return { ...state,
        showAlert: payload 
     }

  default:
    return state
  }
}

export default alertReducer