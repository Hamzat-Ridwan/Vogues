import React, {useState} from 'react'
import {motion} from 'framer-motion'
import { useSelector, useDispatch } from 'react-redux'
import { setShowAlert } from '../../redux/alert/alert-action'
import './cart-popup.scss'

const CartPopup = () => {
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
  return (
    <>
        { showAlert && <motion.div className='popup'
            animate={{x: ['0vw', '0vw', '0vw','0vw', '0vw', '0vw','0vw', '0vw', '0vw','0vw', '0vw', '0vw', '-200vw']}}
            transition={{type: 'spring', duration: .8}}
        >Cart Updated Successfully</motion.div>}
    </>
    
  )
}

export default CartPopup