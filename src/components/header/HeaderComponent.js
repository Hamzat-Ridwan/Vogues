import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {createStructuredSelector} from 'reselect'
import './header.styles.scss'
import {ReactComponent as Logo} from '../../assets/crown.svg'
import { auth } from '../../firebase/firebase.utils'
import CartIcon from '../cart-icon/CartIcon'
import CartDropdown from '../cart-dropdown/CartDropdown'
import { selectCartHidden } from '../../redux/cart/cart-selectors'
import { selectCurrentUser } from '../../redux/user/user-selectors'
import { useDispatch,useSelector } from 'react-redux'

const Header = ({currentUser, hidden}) => {
  const dispatch = useDispatch()
    const mode = useSelector((state)=> state.theme.mode)
  return (
    <div className={`header ${mode}`}>
        <Link className='logo-container' to='/'>
            {/* <Logo className='logo' /> */}
            <h1>Vouges</h1>
        </Link>
        <div className='options'>
            <Link className='option' to='/'>Home</Link>
            <Link className='option' to='/shop'>Shop</Link>
            {
              currentUser?
              <div className='option' onClick={()=> auth.signOut()}>SignOut</div>:
              <Link className='option' to='/signin'>SignIn</Link>
            }
            <CartIcon/>
        </div>
        {
          hidden? null:
          <CartDropdown/>
        }
        
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header)