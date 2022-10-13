import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setShowAlert } from './alert-action'

const AlertFunction = () => {
    const showAlert = useSelector(state => state.alert.showAlert)
    const dispatch = useDispatch()
    const displayAlert = () =>{
        dispatch(setShowAlert(true))
        clearAlert()
    }
    const clearAlert = () =>{
        setTimeout(()=>{
            dispatch(setShowAlert(false))
        }, 2000)
    }
}

export default AlertFunction