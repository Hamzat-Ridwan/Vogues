import { CHANGE_THEME } from "./theme-type";

export const changeTheme = (mode) =>({
    type: CHANGE_THEME,
    payload: mode
})