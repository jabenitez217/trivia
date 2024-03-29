import React from 'react'
import { useHistory } from 'react-router-dom'
import { useEffect } from 'react';
import { Button } from '@mui/material';
import './Result.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceSadCry, faFaceMeh, faFaceSmileBeam } from '@fortawesome/free-solid-svg-icons';
import GoodSound from './mixkit-video-game-win-2016.wav';
import BadSound from './mixkit-player-losing-or-failing-2042.wav'

const Result = ({name, score, sound}) => {
  
  const history = useHistory();

  useEffect(() => {
    if (!name) {
      history.push('/')
    }

    if (sound) {
      score <= 3 ? play(BadSound)
        : score >=4 & score <=7 ? play(BadSound)
        : play(GoodSound)
    }
    // eslint-disable-next-line
  }, [name, history])

  const play = (audio) => {
    new Audio(audio).play();
  }
  
  return (
    <div className='result'>
      <span className='title'>Final Score: {score}</span>
      <br/>
      {score <=3 ? <FontAwesomeIcon icon={faFaceSadCry} size='10x' style={{color: "#388697",fontSize: "225px"}}/>
        :score >=4 & score <=7 ? <FontAwesomeIcon icon={faFaceMeh} style={{color: "#388697",fontSize: "225px"}} />
        :<FontAwesomeIcon icon={faFaceSmileBeam} size='10x' style={{color: "#388697",fontSize: "225px"}} />
      }
      <br/><br/><br/>
      <Button
        variant='contained'
        color='secondary'
        size='large'
        style={{alignSelf: 'center', marginTop: 20}}
        href='/'  
      >
        Return Home
      </Button>
      <div className='feedback'>
        Thanks for Playing! Please feel free to leave any feedback 
        <a href='https://forms.gle/GqfhaL4Ru5wPWryTA'> here.</a>
        {/* <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeAaNF9YLXUFUPT3wBei8Q0zfpJW0gIbAv7ZHvEEH6KjgzNag/viewform?embedded=true" width="640" height="633" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe> */}
      </div>
    </div>
  )
}

export default Result