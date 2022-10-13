import { useEffect } from 'react';
import {connect, useSelector} from 'react-redux'
import './App.scss';
import HomePage from './pages/homepage/HomePage';
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom'
import ShopComponent from './pages/shop/ShopComponent';
import Header from './components/header/HeaderComponent';
import {auth, createUserProfileDocument} from './firebase/firebase.utils'
import { setCurrentUser } from './redux/user/user-actions'
import { selectCurrentUser } from './redux/user/user-selectors';
import CheckoutPage from './pages/checkout/CheckoutPage';
import CategoryPage from './pages/category/CategoryPage';
import SignIn from './components/sign-in/SignIn';
import SignUp from './components/sign-up/SignUp';
import Contact from './pages/contact/Contact';
import ThemeButton from './components/theme-button/ThemeButton';
import CartPopup from './components/cart-popup/CartPopup';

function App({currentUser, setCurrentUser}) {
  useEffect(()=>{
    auth.onAuthStateChanged(async userAuth =>{
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth)
        userRef.onSnapshot(snapShot =>{
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        })
        
      }
      setCurrentUser(userAuth)
      
    })
  },)
 
  const theme = useSelector((state) => (state.theme).mode);
  return (
    <div className={theme} >
    <BrowserRouter>
      
      <Header />
      <CartPopup/>
      <ThemeButton/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='shop' element={<ShopComponent/>}>
          <Route path=':collectionTitle' element={<CategoryPage/>}/>
        </Route>
        <Route path='/checkout' element={!currentUser ? <Navigate to='/signin' /> : <CheckoutPage/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route exact path='/signin' element={currentUser ? <Navigate to="/" /> : <SignIn/>} />
        <Route exact path='/signup' element={currentUser ? <Navigate to="/" /> : <SignUp/>} />
      </Routes>
      
      
    </BrowserRouter>
    </div>   
  );
}

const mapStateToProps = (state)=>({
  currentUser: selectCurrentUser(state)
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
