import React, {useState} from 'react'
import { motion } from 'framer-motion'
import './sign-in.scss'
import FormInput from '../form-input/FormInput'
import CustomButton from '../custom-button/CustomButton'
import { Link } from 'react-router-dom'

import {auth, signInWithGoogle } from '../../firebase/firebase.utils'

const SignIn = () => {
  const [formValue, setFormValue] = useState({
    email: '',
    password: ''
  })
  const handleSubmit = async e =>{
    e.preventDefault()
    const {email, password} = formValue
    try {
      await auth.signInWithEmailAndPassword(email, password)
      setFormValue({
        email: '',
        password : ''
      })
    } catch (error) {
      console.log(error)
    }
    
    console.log(formValue)
  }

  const handleChange = e =>{
    const {name, value} = e.target
    setFormValue((prevState) =>{
      return {
        ...prevState,
        [name]: value
      }
    })
  }

  const {email, password} = formValue
  
  return (
    <motion.div className='sign-in'
      initial={{y: 20, opacity:0}}
      animate={{y:0, opacity: 1}}
      transition={{duration:.2, type: 'spring'}}
    >
      {/* <h2>I already have an account</h2> */}
      <h2 className='title'>SIGN IN</h2>
      <span>Sign in with your email and password</span>
      
      <form onClick={handleSubmit} >
        <FormInput name='email' type="email" value={email} handleChange= {handleChange} label='email' required />
        <FormInput name='password' type="password" value={password} handleChange={handleChange} label='password' required />
        <div className='buttons'>
          <CustomButton type="submit" >Sign In</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn >Sign In With Google</CustomButton>
        </div>
      </form>
      <span>Don't have an account? <Link to='/signup'>Sign up</Link></span>
    </motion.div>
    
  )
}

export default SignIn