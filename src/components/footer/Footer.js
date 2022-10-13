import React from 'react'
import { useNavigate } from 'react-router-dom'
import CustomButton from '../custom-button/CustomButton'
import './footer.scss'

const Footer = () => {
    const navigate = useNavigate()
  return (
    <div className='footer'>
        <h1>Get In Touch</h1>
        <CustomButton onClick={()=> navigate('/contact')} >Contact Us</CustomButton>
    </div>
  )
}

export default Footer