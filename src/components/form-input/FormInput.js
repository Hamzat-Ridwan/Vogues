import React from 'react'
import { useSelector } from 'react-redux'
import './form-input.styles.scss'

const FormInput = ({handleChange, label, ...otherProps}) => {
  const mode = useSelector(state => state.theme.mode )
  return (
    <div className='group'>
        <input className='form-input' onChange={handleChange} {...otherProps} />
        {
            label?
            (<label className= {`${otherProps.value.length ? 'shrink' : ''} form-input-label ${mode} `} >
                {label}
            </label>)
            : null
        }
    </div>
  )
}

export default FormInput