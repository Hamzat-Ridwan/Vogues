import React from 'react'
import {motion} from 'framer-motion'
import { Route, Routes, Outlet } from 'react-router-dom'
import CollectionsOverview from '../../components/collections-overview/collections-overview'
import PreviewComponent from '../../components/preview/PreviewComponent'
import SHOP_DATA from '../../redux/shop/ShopData'
import CategoryPage from '../category/CategoryPage'


const ShopComponent = () => {
    const collections = SHOP_DATA
    
  return (
    
    <motion.div className='shop-page'
      initial={{y: 20, opacity:0}}
      animate={{y:0, opacity: 1}}
      transition={{duration:.2}}
    >
      <Routes>
      <Route path='/' element={<CollectionsOverview/>}/>
      {/* <Route path={`shop/:collectionId`} element={<CategoryPage/>}/> */}
      {/* <CollectionsOverview/> */}
      </Routes>
      <Outlet/>
    </motion.div>
    
  )
}

export default ShopComponent