import React, { useState } from 'react'
import { QuizData } from './QuizData'
import './Quiz.css'
import QuizResult from './QuizResult';


export default function Quiz() {
    const [currentQuestin, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [clickedOption, setClickOption] = useState(0);
    const [showResult, SetShowResult] = useState(false);

    function handleNext() {
        updateScore();
        if (currentQuestin < QuizData.length - 1) {
            setCurrentQuestion(currentQuestin + 1)
            setClickOption(0)
        }
        else {
            SetShowResult(true)
        }
    }
    function updateScore() {
        if (clickedOption === QuizData[currentQuestin].answer) {
            setScore(score + 1)
        }
    }

    function handlePlayAgain() {
        setCurrentQuestion(0);
        SetShowResult(false);
        setClickOption(0);
        setScore(0)
    }

    return (
        <>
            <div className='quizdiv'>
                {showResult ? (<QuizResult score={score} totalScore={QuizData.length} tryAgain={handlePlayAgain} />) : (
                    <>
                        <h1 style={{ marginLeft: '6VW' }}>Attempt Quiz </h1><br />
                        <h4>  <span>{currentQuestin + 1}. </span> <span>{QuizData[currentQuestin].question}</span></h4>
                        {
                            QuizData[currentQuestin].options.map((option, index) => {
                                return (<div key={index}>
                                    <h2 className='option-btn' onClick={() => setClickOption(index + 1)}>{option}</h2>

                                </div>
                                )

                            })
                        }
                        <button onClick={handleNext} className='next-btn'>Next</button>
                    </>
                )}
            </div>


        </>
    )
}
