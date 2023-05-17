import React from 'react';
import { useEffect, useState } from 'react';
import { CircularProgress } from '@mui/material';
import Questions from '../../components/Questions/Questions'
import './Quiz.css';
import QuizInfo from '../../components/QuizInfo/QuizInfo';

const Quiz = ({name, questions, setQuestions, score, setScore, sound}) => {

  const [options, setOptions] = useState();
  const [currQues, setCurrQues] = useState(0);
  useEffect(() => {
    console.log(questions);

    setOptions(questions && 
    handleShuffle([
      questions[currQues]?.correct_answer,
      ...questions[currQues]?.incorrect_answers,
    ])
    );
  }, [questions, currQues]);

  console.log(options);
  
  const handleShuffle = (optionss) => {
    return optionss.sort(() => Math.random() - 0.5);
  }

  return (
    <div className='quiz'>
      <span className='subtitle'>Welcome, {name}</span><br/>
      
      {questions ? (
        <>
          <QuizInfo category={questions[currQues].category} score={score} />
          <br/>

          <Questions 
            currQues={currQues}
            setCurrQues={setCurrQues}
            questions={questions}
            options={options}
            correct={questions[currQues]?.correct_answer}
            score={score}
            setScore={setScore}
            setQuestions={setQuestions}
            sound={sound}
          />
        </> 
      ): (
        <CircularProgress 
        style={{margin: 100}} 
        color="inherit" 
        size={150} 
        thickness={1}/>
      )}
    </div>
  );
}

export default Quiz