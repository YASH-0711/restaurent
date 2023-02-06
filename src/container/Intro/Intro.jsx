import React from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';

import { meal } from '../../constants';

import './Intro.css';

const Intro = () => {
  
   const [playVedio, setplayVedio] = React.useState()
  const vidRef = React.useRef()
  
  return (
  <div className="app__video">
    <video src={meal} ref={vidRef} type="vedio/mp4" Loop controls={false} muted></video>
    <div className='app__vedio-overlay flex__center'>
      <div className="app__video-overlay_circle flex__center"></div>
    </div>
  </div>

  
  )
}



export default Intro;
