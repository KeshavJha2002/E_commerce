import React from 'react'
import Directory from '../components/directory/Directory.jsx';
import './css/homePage.css';

const HomePage = ({handleTarget}) => {
  return (
    <div className='homepage'>
      <Directory handleTarget={handleTarget}/>
    </div>
  )
}

export default HomePage
