import React, {useState} from 'react'
import './sign-up.scss'
import {motion} from 'framer-motion'
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'
import CustomButton from '../custom-button/CustomButton'
import FormInput from '../form-input/FormInput'
import { Link } from 'react-router-dom'

const SignUp = () => {
    const [details, setDetails] = useState({

        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
    const handleSubmit = async (e)=>{
        e.preventDefault()
        const {displayName, email, password, confirmPassword} = details
        if(password !== confirmPassword){
            alert("passwords don't match")
            return
        }
        try {
            const {user} = await auth.createUserWithEmailAndPassword(email, password)
            await createUserProfileDocument(user, {displayName})
            setDetails({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        } catch (error) {
            console.log(error)
        }
    }

    const handleChange = e =>{
        const {name, value} = e.target
        setDetails(prevDetails =>{
            return{
                ...prevDetails,
                [name]: value
            }
        })
    }

    const {displayName, email, password, confirmPassword} = details
  return (
    <motion.div className='sign-up'
        initial={{y: 20, opacity:0}}
        animate={{y:0, opacity: 1}}
        transition={{duration:.2, type: 'spring'}}
    >
        <h2 className='title'>SIGN UP</h2>
        <span>Sign Up With Your Email and Password</span>
        <form className='sign-up-form' onSubmit={handleSubmit}>
            <FormInput
                type='text'
                name='displayName'
                value={displayName}
                handleChange={handleChange}
                label='Display Name'
                required
            />
            <FormInput
                type='email'
                name='email'
                value={email}
                handleChange={handleChange}
                label='Email'
                required
            />
            <FormInput
                type='password'
                name='password'
                value={password}
                handleChange={handleChange}
                label='Password'
                required
            />
            <FormInput
                type='password'
                name='confirmPassword'
                value={confirmPassword}
                handleChange={handleChange}
                label='Confirm Password'
                required
            />
            <CustomButton type='submit'>SIGN UP</CustomButton>
        </form>
        <span>Already have an account? <Link to='/signin'>Sign in</Link></span>
    </motion.div>
  )
}

export default SignUp