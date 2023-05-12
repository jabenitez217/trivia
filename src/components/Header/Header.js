import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import { Button } from '@mui/material'

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
        <Link to='/' className='title'>Trivia Game</Link>
        <Button
         onClick={toggleSound}>Sound</Button>
        <hr className='divider'/>
    </div>
  )
}

export default Header
