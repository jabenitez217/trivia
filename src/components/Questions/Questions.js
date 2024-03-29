import { Button } from '@mui/material';
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import './Questions.css'
import CorrectSound from './mixkit-arcade-bonus-alert-767.wav';
import WrongSound from './mixkit-failure-arcade-alert-notification-240.wav';
import ConfettiExplosion from 'react-confetti-explosion';

const Questions = ({
    currQues,
    setCurrQues,
    questions,
    options,
    correct,
    score,
    setScore,
    setQuestions,
    sound,
}) => {
    const [selected, setSelected] = useState();
    const [error, setError] = useState(false);
    const history = useHistory();
    const [confetti, setConfetti] = useState(false);

    const play = (sound) => {
        new Audio(sound).play();
    }

    const handleSelect = (i) => {
        if (selected === i && selected === correct) {
            return 'select';
        } else if (selected === i && selected !== correct) {
            return 'wrong';
        } else if (i === correct) {
            return 'select';
        }
    };

    const handleCheck = (i) => {
        setSelected(i);
        if (i === correct) {
            setScore(score + 1);
            setConfetti(true);
            if (sound) {
                play(CorrectSound);
            }
        } else {
            if (sound) {
                play(WrongSound);
            }
        }
        setError(false);       
    };

    const handleQuit = () => {
        setCurrQues(0);
        setQuestions();
    };

    const handleNext = () => {
        if (currQues > 8) {
            history.push('/result');
        } else if (selected) {
            setCurrQues(currQues+1);
            setConfetti(false);
            setSelected();
        } else {
            setError("Please select an option first");
        }
    }

    const htmlDecode = (text) => {
        let doc = new DOMParser().parseFromString(text, "text/html");
        return doc.documentElement.textContent;
    } 

  return (
    <div className='question'>
        {confetti && <ConfettiExplosion colors={['#388697','#FA8334','a9b0b4','#01161E']} height='200vh' duration={2500} width={1600}/>}
        <h1>Question {currQues + 1}</h1>
        <div className='single_question'>
            <h2>{htmlDecode(questions[currQues].question)}</h2>
            <div className='options'>
                {error && <ErrorMessage>{error}</ErrorMessage>}
                {
                    options && options.map(i=> (
                        <button 
                            onClick={()=>{handleCheck(i)}} 
                            className={`singleOption ${selected && handleSelect(i)}`}
                            key={i}
                            disabled={selected}
                            style={{color: "black"}}>
                        {htmlDecode(i)}</button>
                    ))
                }
            </div>
            <div className='controls'>
                <Button
                    variant='contained'
                    color='neutral'
                    size='large'
                    style={{width: 185, margin: 20}}
                    href='/'
                    onClick={handleQuit}
                >
                    Quit
                </Button>
                <Button
                    variant='contained'
                    color='neutral'
                    size='large'
                    style={{width: 185}}
                    onClick= {handleNext}
                >
                    Next Question
                </Button>
            </div>
        </div>
    </div>
  )
}

export default Questions