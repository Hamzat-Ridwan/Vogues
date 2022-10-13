import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import {  useDispatch } from 'react-redux'
import { clearAllCart } from '../../redux/cart/cart-actions'

const StripeButton = ({price}) => {
    const priceForStripe = price * 100
    const publishableKey = 'pk_test_51Lir4SJlvMfgZhQcD20veAZ7cQ9Hu9S8AgBXPPZAQGh3i3r7iw3NXjResTmFXAMg6R7uDl94aysTFkDaoSECLJxb00uoGfgfeI'
    const onToken = token =>{
        console.log(token)
        alert('Payment Successful')
        dispatch(clearAllCart())
    }

    const dispatch = useDispatch()
  return (
    <StripeCheckout
    label = 'Pay Now'
    name='Vogues'
    billingAddress
    shippingAddress
    image='https://svgshare.com/i/CUz.svg'
    description= {`Your total is ${price}`}
    amount={priceForStripe}
    panelLabel='Pay Now'
    token={onToken}
    stripeKey={publishableKey}
    />
  )
}

export default StripeButton