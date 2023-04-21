import React from 'react'
import { useHistory } from 'react-router-dom'
import { useEffect } from 'react';
import { Button } from '@mui/material';
import './Result.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceSadCry, faFaceMeh, faFaceSmileBeam } from '@fortawesome/free-solid-svg-icons';

const Result = ({name, score}) => {
  
  const history = useHistory();

  useEffect(() => {
    if (!name) {
      history.push('/')
    }
  }, [name, history])
  
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
    </div>
  )
}

export default Result