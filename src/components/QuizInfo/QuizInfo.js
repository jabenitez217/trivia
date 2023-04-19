import React from 'react'
import './QuizInfo.css'

const QuizInfo = ({category, score}) => {
  return (
    <div className='info'>
        <div className='inner'>
            <p>{category}</p>
            <p>Score: {score}</p>
        </div>
    </div>
  )
}

export default QuizInfo
