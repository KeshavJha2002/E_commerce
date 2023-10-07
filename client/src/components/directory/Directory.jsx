import React from 'react'
import MenuItem from '../menu-item/MenuItem.jsx';
import {Items} from '../../static/menuItems.js';
import './css/directory.css';
// import { Route } from 'react-router-dom';

const Directory = ({handleTarget}) => {
  const onClickHandler = (title)=>{
    // <Route path='/hats' element={<>Hats</>}/>
    console.log(title)
    handleTarget(title);
  };

  return (
    <div className='directory-menu'>
      {Items.map(
        (item)=> <MenuItem key={item.id} title={item.title} image={item.imageUrl} link={item.linkUrl} size={item.size} onClickHandler={onClickHandler}/>
        )}
    </div>
  )
}

export default Directory
