import React from 'react'
import { connect } from 'react-redux'
import { clearItemFromCart, removeItem, addItem } from '../../redux/cart/cart-actions'
import { useDispatch } from 'react-redux'
import { setShowAlert } from '../../redux/alert/alert-action'
import './checkout-item.styles.scss'

const CheckoutItem = ({cartItem, clearItem, addItem, removeItem}) => {
    const {name, price, quantity, image} = cartItem
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
    <div className='checkout-item'>
        <div className='image-container'>
            <img src={image} alt='item'/>
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>
            <div className='arrow' onClick={()=> {removeItem(cartItem); displayAlert()} }>-</div>
            <span className='value'>{quantity}</span>
            <div className='arrow' onClick={()=> {addItem(cartItem); displayAlert()} }>+</div>
        </span>
        <span className='price'>${price}</span>
        <div className='remove-button' onClick={()=> {clearItem(cartItem); displayAlert()} }>x</div>
    </div>
  )
}
const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem)