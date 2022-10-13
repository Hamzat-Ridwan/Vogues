import React from 'react'
import { useSelector } from 'react-redux'
import {HiOutlineMail} from 'react-icons/hi'
import { BsPhone, BsTwitter } from 'react-icons/bs'
import {RiLinkedinFill} from 'react-icons/ri'
import Phone from '../../assets/images/contact.png'
import './contact.scss'
import Footer from '../../components/footer/Footer'

const Contact = () => {
  const mode = useSelector(state=> state.theme.mode )
  return (
    <div className='contact-page'>
      <div className= {`contact-hero ${mode}`}>
        <h1 className= {`contact-title ${mode}`} >CONTACT US</h1>
      </div>
      <div className='contacts'>
         <div className='contact-item'>
            <HiOutlineMail />
            <a href="mailto:ridwanhamzat99@gmail.com" className='p-text'>ridwanhamzat99@gmail.com</a>
          </div>
          <div className='contact-item'>
            <BsPhone />
            <a href="tel:+234 909 100 6936" className='p-text'>+234 909 100 6936</a>
          </div>
          <div className='contact-item'>
            <BsTwitter style={{marginRight: '3rem' }} />
            <a href="https://www.twitter.com/Hamza_rid1" className='p-text'>Twitter Profile</a>
          </div>
          <div className='contact-item'>
            <RiLinkedinFill style={{marginRight: '3rem' }} />
            <a href="https://www.linkedin.com/in/ridwan-hamzat" className='p-text'>LinkedIn Profile</a>
          </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Contact