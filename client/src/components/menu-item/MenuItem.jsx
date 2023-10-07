import React from 'react'
import './css/menuItem.css'

const MenuItem = ({title,image,link,size,onClickHandler}) => {
  return (
    <div className={`${size} menu-item`} onClick={()=>onClickHandler(title)}>
      <div className='background-image' style={{backgroundImage: `url(${image})`}}/>
      <div className='content'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <span className='subtitle'>SHOP NOW</span>
      </div>
    </div>
  )
}

export default MenuItem
