import React from 'react'
import {MdOutlineLightMode, MdDarkMode} from 'react-icons/md'
import {motion} from 'framer-motion'
import { useDispatch,useSelector } from 'react-redux'
import { changeTheme } from '../../redux/theme/theme-action'
import './theme.scss'

const ThemeButton = () => {
    const dispatch = useDispatch()
    const mode = useSelector((state)=> state.theme.mode)
  return (
    <motion.div className='theme' onClick={()=> dispatch(changeTheme(mode === ''? 'dark': '' )) } 
      animate={{y: [-10,10,-8,8,-5,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,]}}
      transition={{yoyo: Infinity, type: 'spring', duration: 10}}
    >
        {
          mode === '' ? 
          (<MdDarkMode />) : 
          (<MdOutlineLightMode />)
        }
    </motion.div>

  )
}

export default ThemeButton