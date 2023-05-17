import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVolumeHigh, faVolumeXmark } from '@fortawesome/free-solid-svg-icons'

const Header = ({sound, setSound}) => {

  const toggleSound = () => {
    if (sound === true) {
      setSound(false);
    } else {
      setSound(true);
    }
    console.log(sound);
  };

  return (
    <div className='header'>
      <div className='row'>
        <Link to='/' className='title'>Trivia Game</Link>
          {
            sound ? <button className='sound' onClick={toggleSound} >
                      <FontAwesomeIcon icon={faVolumeHigh} size='2x' color='#01161E'/>
                    </button> 
                  : <button  className ='sound' onClick={toggleSound}>
                      <FontAwesomeIcon icon={faVolumeXmark} size='2x' color='#01161E'/>
                    </button>
          }
      </div>
      <hr className='divider'/>
    </div>
  )
}

export default Header
