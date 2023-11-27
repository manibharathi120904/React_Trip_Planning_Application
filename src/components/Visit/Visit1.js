import React from 'react';
import Dubai2 from './Images2/Dubai1.png';
import SideBar1 from '../SideBar/SideBar1';
import './Visit1.css';
const Visit1 = () => {
  return (
    <div>
        <div className='background-image1' style={{ backgroundImage: `url(${Dubai2})` }}><center><h1>Life is either a daring adventure or nothing at all<br />Travel far enough, you meet yourself</h1></center></div>
        <SideBar1 />
    </div>
  )
}

export default Visit1
