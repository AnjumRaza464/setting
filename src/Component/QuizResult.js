import React from 'react'

function QuizResult(props) {
  return (
    <>
    <div className='show-score'>
      Your Score : {props.score}<br />
      Total Score : {props.totalscore}
    </div>
    <button id="next-button" onClick={props.tryAgain}
    className='btn btn-primary'
    >Try Again</button>
    </>
    
  )
}

export default QuizResult
