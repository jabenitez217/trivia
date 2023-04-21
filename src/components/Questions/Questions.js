import { Button } from '@mui/material';
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import './Questions.css'

const Questions = ({
    currQues,
    setCurrQues,
    questions,
    options,
    correct,
    score,
    setScore,
    setQuestions,
}) => {
    const [selected, setSelected] = useState();
    const [error, setError] = useState(false);
    const history = useHistory();

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
            setSelected();
        } else {
            setError("Please select an option first");
        }
    }

  return (
    <div className='question'>
        <h1>Question {currQues + 1}</h1>
        <div className='single_question'>
            <h2>{questions[currQues].question.replaceAll('&quot;','"').replaceAll('&#039;',"'").replaceAll('&amp;','&')}</h2>
            <div className='options'>
                {error && <ErrorMessage>{error}</ErrorMessage>}
                {
                    options && options.map(i=> (
                        <button 
                            onClick={()=>{handleCheck(i)}} 
                            className={`singleOption ${selected && handleSelect(i)}`}
                            key={i}
                            disabled={selected}>
                        {i.replaceAll('&quot;','"').replaceAll('&#039;',"'").replaceAll('&amp;','&')}</button>
                    ))
                }
            </div>
            <div className='controls'>
                <Button
                    variant='contained'
                    color='neutral'
                    size='large'
                    style={{width: 185}}
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