import { SHOW_ALERT } from "./alert-type"

export const setShowAlert = (alert) =>({
    type: SHOW_ALERT,
    payload: alert
})