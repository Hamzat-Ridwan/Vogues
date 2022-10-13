import React from 'react'
import {useNavigate} from 'react-router-dom'
import './menu-item.scss'
import { useSelector } from 'react-redux'

const MenuItem = ({title, imageUrl, size, linkUrl, img}) => {
  const navigate = useNavigate()
  const mode = useSelector((state)=> state.theme.mode)
  return (
    <div className={`${size} menu-item`} onClick={()=> navigate(linkUrl)} >
          <div
              // style={{
              //     // backgroundImage: `url(${imageUrl})`
              //     background: '#f7f7ff'
              // }}
              className= {`background-image ${mode}`}
          >
            <img src={img} alt={title} />
          </div>
          <div className='content'>
              <h1 className='title'>{title.toUpperCase()}</h1>
              <span className='subtitle'>SHOP NOW</span>
          </div>
    </div>
  )
}

export default MenuItem