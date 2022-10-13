import React from 'react'
import { motion } from 'framer-motion'
import { connect } from 'react-redux'
import { addItem } from '../../redux/cart/cart-actions'
import CustomButton from '../custom-button/CustomButton'
import './collection-item.styles.scss'
import { useSelector, useDispatch } from 'react-redux'
import { setShowAlert } from '../../redux/alert/alert-action'

const CollectionItem = ({item, addItem}) => {
  const {name, price, imageUrl, image}  = item
  const mode = useSelector((state)=> state.theme.mode)
  const showAlert = useSelector(state => state.alert.showAlert)
    const dispatch = useDispatch()
    const displayAlert = () =>{
        dispatch(setShowAlert(true))
        clearAlert()
    }
    const clearAlert = () =>{
        setTimeout(()=>{
            dispatch(setShowAlert(false))
        }, 800)
    }
  return (
    <motion.div className='collection-item'
      whileHover={{scale: 1.05}}
    >
        <div className = {`image ${mode}`}>
          <img src={image} alt={name} />
        </div>
        <div className='collection-footer'>
            <div className='center'>
              <div className='name'>{name}</div>
              <div className='price'>${price}</div>
            </div>
        </div>
        <CustomButton onClick={()=> {addItem(item); displayAlert()}} inverted>Add to cart</CustomButton>
    </motion.div>
  )
}

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem)