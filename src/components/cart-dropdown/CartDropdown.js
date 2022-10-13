import React from 'react'
import {motion} from 'framer-motion'
import {useNavigate, Navigate, Link} from 'react-router-dom'
import { connect } from 'react-redux'
import { selectCartItems } from '../../redux/cart/cart-selectors'
import { toggleCartHidden } from '../../redux/cart/cart-actions'
import './cart-dropdown.styles.scss'
import CustomButton from '../custom-button/CustomButton'
import CartItem from '../cart-item/CartItem'
import { useSelector } from 'react-redux'

const CartDropdown = ({cartItems, dispatch}) => {
  const navigate = useNavigate()
  const currentUser = useSelector((state) => state.currentUser);
  console.log(currentUser)
  return (
    <motion.div className='cart-dropdown'
      initial={{y: 200}}
      animate={{y: 0}}
      transition={{type: 'spring', duration: .2}}
    >
        <div className='cart-items' >
          {
            cartItems.length?
            cartItems.map(cartItem =>(
              <CartItem key={cartItem.id} item={cartItem} />
            ))
            : <span className='empty-message' style={{color: 'black'}}>Your cart is empty</span>
           }
        </div>
        <CustomButton onClick={ ()=> {navigate('/checkout'); dispatch(toggleCartHidden()) }  } >GO TO CHECKOUT</CustomButton>
    </motion.div>
  )
}

const mapStateToProps = (state) =>({
  cartItems: selectCartItems(state)
})

export default connect(mapStateToProps)(CartDropdown)