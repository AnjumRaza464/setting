import React, { useState } from 'react'
//import { Quizdata } from '../Data/Quizdata';
import QuizResult from './QuizResult';
import { Quizdata } from './../Data/Quizdata';


function Quiz() {
    const [currentquestion,setcurrentquestion]=useState(0);
    const[score,setScore]=useState(0);
    const [clickedOption,setclickedOption]=useState(0);
    const[showresult,setshowresult]=useState(false);
    const changeQuestion=()=>{
      updateScore();
      if(currentquestion<Quizdata.length-1){
        setcurrentquestion(currentquestion+1);
        setclickedOption(0);
      }
      else{
          setshowresult(true);
      }
        
    }
    const updateScore=()=>{
      if(clickedOption===Quizdata[currentquestion].answer){
        setScore(score+1);
      }
    }
    const resetAll=()=>{
      setshowresult(false);
      setcurrentquestion(0);
      setclickedOption(0);
      setScore(0);
    }
  return (
    <div>
      <p className="heading-txt"> Online Quiz App</p>
      <div className="container">
        {showresult?(
          <QuizResult score={score} totalscore={Quizdata.length} tryAgain={resetAll}/>
        ):(
          <>
            <div className="question">
                <span id="question-number">{currentquestion+1}.</span>
                <span id="question-txt">{Quizdata[currentquestion].question}</span>

            </div>
            <div className="option-container" >
                {Quizdata[currentquestion].options.map((option,i)=>{
                    return(
                        <button 
                        //className="option-btn" 
                        className={`option-btn ${
                          clickedOption===i+1?"checked":null
                        }`}
                        key={i}
                        onClick={()=>setclickedOption(i+1)}>
                        {option}
                        </button>
                    )
                })}
            </div>
            <input type="button" value="Next Question" className='btn btn-primary' onClick={changeQuestion}/>
            </>)}
      </div>
    </div>

    // TEsting

    // <div>
    //   <p className="heading-txt"> Online Quiz App</p>
    //   <div className="container">
    //         <div className="question">

    //         </div>
    //         <div className="option-container" >
    //             {Quizdata[0].options.map((option,i)=>{
    //                 return(
    //                     <button className="option-btn">

    //                     </button>
    //                 )
    //             })}
    //         </div>
    //         <input type="button" value="Next" id="next-button" />
    //   </div>
    // </div>
  )
}

export default Quiz
