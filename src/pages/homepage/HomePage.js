import React from 'react'
import {motion} from 'framer-motion'
import CustomButton from '../../components/custom-button/CustomButton'
import Directory from '../../components/directory/Directory'
import './homepage.styles.scss'
import { useSelector} from 'react-redux'
import home from './home.jpg'
import {useNavigate} from 'react-router-dom'
import Footer from '../../components/footer/Footer'

const HomePage = () => {
  const navigate = useNavigate()
  const mode = useSelector(state=> state.theme.mode)
  return (
    <motion.div className='homepage'
      initial={{y: 20, opacity:0}}
      animate={{y:0, opacity: 1}}
      transition={{duration:.2, type: 'spring'}}
    >
       <div className={`hero ${mode}`} >
          <h1 className={`title ${mode}`} >Your one-stop shop for all your clothings</h1>
          <p className={`${mode}`} >Get all your clothings at the cheapest price and best quality from us today</p>
          <CustomButton onClick={ ()=> navigate('/shop') } >SHOP NOW</CustomButton>
       </div>
        <Directory/>
        <Footer/>      
    </motion.div>
  )
}

export default HomePage