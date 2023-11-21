import React from 'react';
import Dubai2 from './Images2/Dubai2.png';
import SideBar1 from '../SideBar/SideBar1';
import './Visit1.css';
const Visit1 = () => {
  return (
    <div>
        <SideBar1 />
        <div className='background-image1' style={{ backgroundImage: `url(${Dubai2})` }}></div>
    </div>
  )
}

export default Visit1
